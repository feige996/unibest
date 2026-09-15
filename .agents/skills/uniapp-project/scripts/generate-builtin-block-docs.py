#!/usr/bin/env python3
"""
Generate block.md-style documentation for uni-app built-in components.

Why this exists:
- The skill aims to reduce token usage by keeping key component knowledge local.
- The `mermaid/examples/block.md` format uses: Instructions → Syntax → Examples → Reference.
- Most built-in component docs were placeholders. This script fetches official pages and
  generates consistent, detailed local docs under `references/components/built-in/`.

Usage:
  python3 scripts/generate-builtin-block-docs.py
  python3 scripts/generate-builtin-block-docs.py --only view,button,input
  python3 scripts/generate-builtin-block-docs.py --dry-run
"""

from __future__ import annotations

import argparse
import re
import time
from dataclasses import dataclass
from pathlib import Path
from typing import Iterable, Optional, Sequence

import requests
from bs4 import BeautifulSoup, Tag


@dataclass(frozen=True)
class ComponentPage:
    """Component page parsed result."""

    name: str
    url: str
    title: str
    intro_paragraphs: list[str]
    properties_table_md: Optional[str]
    events_table_md: Optional[str]
    slots_table_md: Optional[str]
    platform_table_md: Optional[str]
    platform_notes: list[str]
    example_blocks: list[tuple[str, str]]  # (lang, code)


def _clean_text(s: str) -> str:
    """Normalize whitespace for human-readable text blocks."""
    s = re.sub(r"\s+", " ", s or "").strip()
    return s


def _looks_like_single_token_label(s: str) -> bool:
    """
    Heuristic filter for navigation/platform labels accidentally captured as paragraphs.

    Examples: 'HarmonyOS', 'HBuilderX', 'App', 'H5'
    """
    if not s:
        return False
    if len(s) > 16:
        return False
    return re.fullmatch(r"[A-Za-z0-9.+-]+", s) is not None


def _guess_code_lang(code_tag: Tag) -> str:
    """Guess fenced code language from CSS classes, defaulting to vue."""
    classes = " ".join(code_tag.get("class", [])).lower()
    if "language-vue" in classes:
        return "vue"
    if "language-html" in classes:
        return "html"
    if "language-javascript" in classes or "language-js" in classes:
        return "javascript"
    if "language-typescript" in classes or "language-ts" in classes:
        return "typescript"
    if "language-css" in classes or "language-scss" in classes:
        return "css"
    return "vue"


def _table_to_grid(table: Tag) -> Optional[list[list[str]]]:
    """
    Convert a HTML table into a 2D grid (rows x cols).

    Notes:
    - Handles simple <tr><th/td> tables. Complex rowspan/colspan is flattened.
    - Returns None if <2 rows or <2 cols.
    """
    rows = table.find_all("tr")
    grid: list[list[str]] = []
    for tr in rows:
        cells = tr.find_all(["th", "td"])
        if not cells:
            continue
        grid.append([_clean_text(c.get_text(" ", strip=True)) for c in cells])

    if len(grid) < 2:
        return None
    max_cols = max(len(r) for r in grid)
    if max_cols < 2:
        return None
    return [r + [""] * (max_cols - len(r)) for r in grid]


def _grid_to_markdown(grid: Sequence[Sequence[str]]) -> Optional[str]:
    """Convert a 2D grid (with header row) into a Markdown table."""
    if not grid or len(grid) < 2:
        return None
    max_cols = max(len(r) for r in grid)
    if max_cols < 2:
        return None
    norm = [list(r) + [""] * (max_cols - len(r)) for r in grid]
    header = norm[0]
    aligns = ["---"] * max_cols

    out = []
    out.append("| " + " | ".join(header) + " |")
    out.append("| " + " | ".join(aligns) + " |")
    for r in norm[1:]:
        out.append("| " + " | ".join(r) + " |")
    return "\n".join(out)


def _table_to_markdown(table: Tag) -> Optional[str]:
    """Backward-compatible helper: HTML table -> Markdown table."""
    grid = _table_to_grid(table)
    return _grid_to_markdown(grid) if grid else None


def _find_section_table(soup: BeautifulSoup, keywords: Iterable[str]) -> Optional[Tag]:
    """
    Find the first table under a heading (h2/h3/h4) whose text contains any keyword.
    """
    for heading in soup.find_all(["h2", "h3", "h4"]):
        title = _clean_text(heading.get_text(" ", strip=True))
        if not title:
            continue
        if not any(k in title for k in keywords):
            continue

        # Walk forward to the next table.
        cur = heading
        for _ in range(20):
            cur = cur.find_next_sibling()
            if cur is None:
                break
            if isinstance(cur, Tag) and cur.name == "table":
                return cur
            # Sometimes a wrapper div contains the table.
            if isinstance(cur, Tag):
                table = cur.find("table")
                if table is not None:
                    return table
    return None


def _table_header_cells(table: Tag) -> list[str]:
    """Return first-row cell texts for a table."""
    tr = table.find("tr")
    if tr is None:
        return []
    cells = tr.find_all(["th", "td"])
    return [_clean_text(c.get_text(" ", strip=True)) for c in cells if _clean_text(c.get_text(" ", strip=True))]


def _find_table_by_header_keywords(content: Tag, header_keywords: Iterable[str]) -> Optional[Tag]:
    """
    Find a table by matching keywords against its header row cells.

    This is a fallback for pages that don't have clear '属性/事件/平台' headings in static HTML.
    """
    kws = tuple(header_keywords)
    for table in content.find_all("table"):
        headers = _table_header_cells(table)
        if not headers:
            continue
        joined = " ".join(headers)
        if any(k in joined for k in kws):
            return table
    return None


def _is_platform_support_table(headers: list[str]) -> bool:
    """
    Heuristic: detect a platform compatibility/support table.

    We intentionally reject mixed 'properties' tables that contain '平台差异说明' column.
    """
    if not headers:
        return False
    joined = " ".join(headers)
    # Reject common props table headers
    if "属性名" in joined or "默认值" in joined or "类型" in joined:
        return False
    # Accept platform-like headers
    if "平台" in joined and ("支持" in joined or "版本" in joined or "说明" in joined):
        return True
    return False


def _find_platform_table(content: Tag) -> Optional[Tag]:
    """
    Find platform compatibility/support table.

    Strategy:
    - Prefer section-based lookup by '平台/兼容' headings.
    - Fallback: scan all tables and pick the first that looks like a platform table.
    """
    t = _find_section_table(content, keywords=("平台", "兼容", "兼容性", "Platform"))
    if t is not None:
        headers = _table_header_cells(t)
        if _is_platform_support_table(headers):
            return t

    for table in content.find_all("table"):
        headers = _table_header_cells(table)
        if _is_platform_support_table(headers):
            return table
    return None


def _is_event_row_name(name: str) -> bool:
    """
    Heuristic: detect event rows embedded inside a 'properties' table.

    Common patterns in uni-app docs:
    - '@scroll', '@scrolltoupper' ...
    - 'bindtap', 'bindgetuserinfo' ...
    - 'onLoad' ... (rare in component docs, but keep for robustness)
    """
    n = (name or "").strip()
    if not n:
        return False
    return n.startswith("@") or n.startswith("bind") or n.startswith("on")


def _split_props_and_events_grid(grid: list[list[str]]) -> tuple[Optional[list[list[str]]], Optional[list[list[str]]]]:
    """
    Split a mixed table into props rows and events rows.

    If no event-like rows are found, returns (grid, None).
    """
    if not grid or len(grid) < 2:
        return None, None

    header = grid[0]
    body = grid[1:]
    props_rows = []
    event_rows = []
    for row in body:
        first = (row[0] if row else "").strip()
        if _is_event_row_name(first):
            event_rows.append(row)
        else:
            props_rows.append(row)

    props_grid = [header] + props_rows if props_rows else None
    if event_rows:
        # Reuse header but rename first column to '事件名' for clarity.
        event_header = list(header)
        if event_header:
            event_header[0] = "事件名"
        events_grid = [event_header] + event_rows
    else:
        events_grid = None

    return props_grid, events_grid


def _extract_platform_notes(content: Tag) -> list[str]:
    """
    Extract platform-related notes as bullet points (fallback when no platform table exists).

    Strategy:
    - Look for headings containing '平台' / '兼容' and collect nearby <p>/<ul>/<ol> texts.
    """
    notes: list[str] = []
    for heading in content.find_all(["h2", "h3", "h4"]):
        ht = _clean_text(heading.get_text(" ", strip=True))
        if not ht:
            continue
        if ("平台" not in ht) and ("兼容" not in ht):
            continue

        cur = heading
        for _ in range(15):
            cur = cur.find_next_sibling()
            if cur is None:
                break
            if isinstance(cur, Tag) and cur.name in ("h2", "h3", "h4"):
                break
            if isinstance(cur, Tag) and cur.name in ("p", "li"):
                txt = _clean_text(cur.get_text(" ", strip=True))
                if txt and not _looks_like_single_token_label(txt):
                    notes.append(txt)
            if len(notes) >= 8:
                break

    # de-dup while preserving order
    seen = set()
    uniq = []
    for n in notes:
        if n in seen:
            continue
        seen.add(n)
        uniq.append(n)
    return uniq[:8]


def fetch_component_page(name: str, timeout_s: int = 25) -> ComponentPage:
    """
    Fetch and parse a uni-app built-in component doc page.
    """
    url = (
        "https://doc.dcloud.net.cn/uniCloud/unicloud-db"
        if name == "unicloud-db"
        else f"https://uniapp.dcloud.net.cn/component/{name}.html"
    )

    resp = requests.get(
        url,
        headers={
            "User-Agent": "uniapp-develop-skills-docgen/1.0 (+local skill generator)",
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        },
        timeout=timeout_s,
    )
    resp.raise_for_status()

    soup = BeautifulSoup(resp.text, "html.parser")
    # Uni-app docs are VuePress-like. Extract only from the main content container to
    # avoid picking up nav/menu text like "内置组件 / 扩展组件（uni-ui）".
    container = soup.select_one(".theme-default-content, .content__default")
    content = container if container is not None else soup

    # Title: prefer stable local naming for built-in components.
    # Some uni-app pages render dynamic titles ("uni-app官网") in static HTML.
    h1 = content.find("h1") if isinstance(content, Tag) else soup.find("h1")
    h1_text = _clean_text(h1.get_text(" ", strip=True)) if h1 else ""
    if h1_text and not h1_text.lower().startswith("uni-app"):
        title = h1_text
    else:
        title = name

    # Intro: take first 2-4 paragraphs after h1 if possible, otherwise first 3 <p>.
    intro: list[str] = []
    if h1:
        cur = h1
        for _ in range(50):
            cur = cur.find_next()
            if cur is None:
                break
            if isinstance(cur, Tag) and cur.name in ("h2", "h3"):
                break
            if isinstance(cur, Tag) and cur.name == "p":
                txt = _clean_text(cur.get_text(" ", strip=True))
                if txt:
                    intro.append(txt)
            if len(intro) >= 4:
                break
    if not intro:
        for p in content.find_all("p")[:10]:
            txt = _clean_text(p.get_text(" ", strip=True))
            if txt and not _looks_like_single_token_label(txt):
                intro.append(txt)
            if len(intro) >= 3:
                break

    # Tables (prefer section-based, fallback to header-based).
    props_table = _find_section_table(content, keywords=("属性", "properties", "Props", "prop"))
    if props_table is None:
        props_table = _find_table_by_header_keywords(content, header_keywords=("属性名", "属性", "默认值", "类型"))

    events_table = _find_section_table(content, keywords=("事件", "events", "Event"))
    if events_table is None:
        events_table = _find_table_by_header_keywords(content, header_keywords=("事件名", "事件名称", "回调", "参数"))

    slots_table = _find_section_table(content, keywords=("插槽", "slot", "slots"))

    platform_table = _find_platform_table(content)

    # Prefer explicit events table; if missing, try to split mixed props/events table.
    props_md = None
    events_md = None
    if props_table:
        grid = _table_to_grid(props_table)
        if grid:
            props_grid, embedded_events_grid = _split_props_and_events_grid(grid)
            props_md = _grid_to_markdown(props_grid) if props_grid else None
            if embedded_events_grid and events_table is None:
                events_md = _grid_to_markdown(embedded_events_grid)
        else:
            props_md = _table_to_markdown(props_table)

    if events_table:
        events_md = _table_to_markdown(events_table) or events_md

    slots_md = _table_to_markdown(slots_table) if slots_table else None
    platform_md = _table_to_markdown(platform_table) if platform_table else None
    platform_notes = _extract_platform_notes(content) if not platform_md else []

    # Examples: collect up to 6 non-trivial code blocks.
    examples: list[tuple[str, str]] = []
    for code in content.select("pre code"):
        # Important: avoid adding separators between syntax highlight token spans.
        # Using separator "" keeps original newlines but doesn't inject newlines
        # between adjacent text nodes.
        txt = code.get_text("", strip=False).strip()
        if len(txt) < 40:
            continue
        # Remove trailing "复制代码" if present in text nodes
        txt = re.sub(r"\n?复制代码\s*$", "", txt).rstrip()
        lang = _guess_code_lang(code)
        examples.append((lang, txt))
        if len(examples) >= 6:
            break

    return ComponentPage(
        name=name,
        url=url,
        title=title,
        intro_paragraphs=intro,
        properties_table_md=props_md,
        events_table_md=events_md,
        slots_table_md=slots_md,
        platform_table_md=platform_md,
        platform_notes=platform_notes,
        example_blocks=examples,
    )


def render_block_style_md(page: ComponentPage) -> str:
    """
    Render markdown roughly aligned with `mermaid/examples/block.md` structure:
    - Instructions
    - Syntax (with properties/events/platform tables)
    - Examples (multiple)
    - Reference
    """
    title = page.title or page.name

    lines: list[str] = []
    lines.append(f"# {title}")
    lines.append("")
    lines.append("## Instructions")
    lines.append("")
    if page.intro_paragraphs:
        for p in page.intro_paragraphs[:4]:
            lines.append(p)
            lines.append("")
    else:
        lines.append(f"`{page.name}` 是 uni-app 内置组件。")
        lines.append("")

    lines.append("### Syntax")
    lines.append("")
    lines.append(f"- 使用 `<{page.name} />`（或 `<{page.name}></{page.name}>`，当需要包裹子节点时）。")
    lines.append("- 遇到平台差异时，建议使用条件编译（`#ifdef / #endif`）显式处理。")
    lines.append("")

    if page.properties_table_md:
        lines.append("#### Properties")
        lines.append("")
        lines.append(page.properties_table_md)
        lines.append("")
    else:
        lines.append("#### Properties")
        lines.append("")
        lines.append(f"See official docs for full properties list: `{page.url}`")
        lines.append("")

    if page.events_table_md:
        lines.append("#### Events")
        lines.append("")
        lines.append(page.events_table_md)
        lines.append("")
    else:
        lines.append("#### Events")
        lines.append("")
        lines.append(f"See official docs for full events list: `{page.url}`")
        lines.append("")

    if page.slots_table_md:
        lines.append("#### Slots")
        lines.append("")
        lines.append(page.slots_table_md)
        lines.append("")

    if page.platform_table_md:
        lines.append("#### Platform Compatibility")
        lines.append("")
        lines.append(page.platform_table_md)
        lines.append("")
    else:
        lines.append("#### Platform Compatibility")
        lines.append("")
        if page.platform_notes:
            for n in page.platform_notes:
                lines.append(f"- {n}")
        else:
            lines.append(f"See official docs for platform support table: `{page.url}`")
        lines.append("")

    lines.append("### Examples")
    lines.append("")
    if not page.example_blocks:
        lines.append(f"Examples are available in the official docs: `{page.url}`")
        lines.append("")
    else:
        for idx, (lang, code) in enumerate(page.example_blocks, start=1):
            lines.append(f"### Example (Example {idx})")
            lines.append("")
            lines.append(f"```{lang}")
            lines.append(code.rstrip())
            lines.append("```")
            lines.append("")

    lines.append(f"Reference: [Official Documentation]({page.url})")
    lines.append("")

    return "\n".join(lines)


def _parse_only_arg(s: str) -> list[str]:
    """Parse --only 'a,b,c' argument."""
    items = []
    for part in (s or "").split(","):
        part = part.strip()
        if part:
            items.append(part)
    return items


def _parse_skip_arg(s: str) -> set[str]:
    """Parse --skip 'a,b,c' argument."""
    return set(_parse_only_arg(s))


def main() -> int:
    """CLI entrypoint."""
    parser = argparse.ArgumentParser(description="Generate built-in component docs in block.md style.")
    parser.add_argument("--only", type=str, default="", help="Comma-separated component names to generate.")
    parser.add_argument("--skip", type=str, default="", help="Comma-separated component names to skip.")
    parser.add_argument("--dry-run", action="store_true", help="Do not write files; just print what would happen.")
    parser.add_argument("--sleep", type=float, default=0.2, help="Sleep between requests (seconds).")
    args = parser.parse_args()

    repo_root = Path(__file__).resolve().parents[1]
    out_dir = repo_root / "references" / "components" / "built-in"
    if not out_dir.exists():
        raise SystemExit(f"Output dir not found: {out_dir}")

    only = set(_parse_only_arg(args.only))
    skip = _parse_skip_arg(args.skip)
    targets = sorted(p.stem for p in out_dir.glob("*.md"))
    if only:
        targets = [t for t in targets if t in only]
    if skip:
        targets = [t for t in targets if t not in skip]

    if not targets:
        print("No targets found.")
        return 0

    for name in targets:
        print(f"[fetch] {name}")
        page = fetch_component_page(name)
        md = render_block_style_md(page)
        out_file = out_dir / f"{name}.md"
        if args.dry_run:
            print(f"[dry-run] would write {out_file} ({len(md)} chars)")
        else:
            out_file.write_text(md, encoding="utf-8")
            print(f"[write] {out_file}")
        time.sleep(max(args.sleep, 0.0))

    return 0


if __name__ == "__main__":
    raise SystemExit(main())

