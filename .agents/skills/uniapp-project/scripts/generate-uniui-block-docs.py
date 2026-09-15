#!/usr/bin/env python3
"""
Generate block.md-style documentation for uni-ui components.

Outputs:
  references/components/uni-ui/{component}.md

Why:
- Keep key info local to reduce token usage.
- Enforce a consistent structure similar to `mermaid/examples/block.md`:
  Instructions → Syntax → Examples → Reference

Usage:
  python3 scripts/generate-uniui-block-docs.py
  python3 scripts/generate-uniui-block-docs.py --only uni-badge,uni-icons
  python3 scripts/generate-uniui-block-docs.py --skip uni-badge
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
    """uni-ui component page parsed result."""

    name: str
    url: str
    title: str
    intro_paragraphs: list[str]
    properties_table_md: Optional[str]
    events_table_md: Optional[str]
    platform_table_md: Optional[str]
    platform_notes: list[str]
    example_blocks: list[tuple[str, str]]  # (lang, code)


def _clean_text(s: str) -> str:
    """Normalize whitespace for human-readable text blocks."""
    return re.sub(r"\s+", " ", s or "").strip()


def _looks_like_single_token_label(s: str) -> bool:
    """Filter nav/platform labels accidentally captured as paragraphs."""
    if not s or len(s) > 16:
        return False
    return re.fullmatch(r"[A-Za-z0-9.+-]+", s) is not None


def _guess_code_lang(code_tag: Tag) -> str:
    """Guess fenced code language from CSS classes."""
    classes = " ".join(code_tag.get("class", [])).lower()
    if "language-vue" in classes:
        return "vue"
    if "language-html" in classes:
        return "html"
    if "language-javascript" in classes or "language-js" in classes:
        return "javascript"
    if "language-typescript" in classes or "language-ts" in classes:
        return "typescript"
    return "vue"


def _table_to_grid(table: Tag) -> Optional[list[list[str]]]:
    """HTML table -> normalized 2D grid."""
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
    """2D grid -> markdown table."""
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


def _find_section_table(content: Tag, keywords: Iterable[str]) -> Optional[Tag]:
    """Find a table under a heading containing keywords."""
    for heading in content.find_all(["h2", "h3", "h4"]):
        ht = _clean_text(heading.get_text(" ", strip=True))
        if not ht:
            continue
        if not any(k in ht for k in keywords):
            continue
        cur = heading
        for _ in range(20):
            cur = cur.find_next_sibling()
            if cur is None:
                break
            if isinstance(cur, Tag) and cur.name == "table":
                return cur
            if isinstance(cur, Tag):
                t = cur.find("table")
                if t is not None:
                    return t
    return None


def _table_header_cells(table: Tag) -> list[str]:
    tr = table.find("tr")
    if tr is None:
        return []
    return [_clean_text(c.get_text(" ", strip=True)) for c in tr.find_all(["th", "td"])]


def _is_platform_support_table(headers: list[str]) -> bool:
    joined = " ".join(headers)
    if "属性名" in joined or "默认值" in joined or "类型" in joined:
        return False
    if "平台" in joined and ("支持" in joined or "版本" in joined or "说明" in joined):
        return True
    return False


def _find_platform_table(content: Tag) -> Optional[Tag]:
    t = _find_section_table(content, keywords=("平台", "兼容", "兼容性", "Platform"))
    if t is not None and _is_platform_support_table(_table_header_cells(t)):
        return t
    for table in content.find_all("table"):
        if _is_platform_support_table(_table_header_cells(table)):
            return table
    return None


def _extract_platform_notes(content: Tag) -> list[str]:
    notes: list[str] = []
    for heading in content.find_all(["h2", "h3", "h4"]):
        ht = _clean_text(heading.get_text(" ", strip=True))
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
    seen = set()
    uniq = []
    for n in notes:
        if n in seen:
            continue
        seen.add(n)
        uniq.append(n)
    return uniq[:8]


def fetch_uniui_page(name: str, timeout_s: int = 25) -> ComponentPage:
    """Fetch and parse uni-ui component page."""
    url = f"https://uniapp.dcloud.net.cn/component/uniui/{name}.html"
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
    container = soup.select_one(".theme-default-content, .content__default")
    content = container if container is not None else soup

    # Title: prefer component name for stability.
    title = name

    # Intro: first 3 paragraphs from content
    intro: list[str] = []
    for p in content.find_all("p")[:12]:
        txt = _clean_text(p.get_text(" ", strip=True))
        if txt and not _looks_like_single_token_label(txt):
            intro.append(txt)
        if len(intro) >= 3:
            break

    props_table = _find_section_table(content, keywords=("属性", "Properties", "props", "Props"))
    props_md = _grid_to_markdown(_table_to_grid(props_table)) if props_table else None

    events_table = _find_section_table(content, keywords=("事件", "Events", "Event"))
    events_md = _grid_to_markdown(_table_to_grid(events_table)) if events_table else None

    platform_table = _find_platform_table(content)
    platform_md = _grid_to_markdown(_table_to_grid(platform_table)) if platform_table else None
    platform_notes = _extract_platform_notes(content) if not platform_md else []

    # Examples: collect up to 6 code blocks
    examples: list[tuple[str, str]] = []
    for code in content.select("pre code"):
        txt = code.get_text("", strip=False).strip()
        if len(txt) < 40:
            continue
        txt = re.sub(r"\n?复制代码\s*$", "", txt).rstrip()
        examples.append((_guess_code_lang(code), txt))
        if len(examples) >= 6:
            break

    return ComponentPage(
        name=name,
        url=url,
        title=title,
        intro_paragraphs=intro,
        properties_table_md=props_md,
        events_table_md=events_md,
        platform_table_md=platform_md,
        platform_notes=platform_notes,
        example_blocks=examples,
    )


def render_block_style_md(page: ComponentPage, repo_root: Path) -> str:
    """Render markdown in block.md-like structure."""
    name = page.name
    url = page.url

    # Links
    plugin_name = name.replace("uni-", "")
    plugin_url = f"https://ext.dcloud.net.cn/plugin?name={plugin_name}"
    local_example = repo_root / "examples" / "uni-ui" / f"{name}.vue"

    lines: list[str] = []
    lines.append(f"# {name}")
    lines.append("")
    lines.append("## Instructions")
    lines.append("")
    if page.intro_paragraphs:
        for p in page.intro_paragraphs:
            lines.append(p)
            lines.append("")
    else:
        lines.append(f"`{name}` 是 uni-ui 扩展组件。")
        lines.append("")

    lines.append("### Syntax")
    lines.append("")
    lines.append(f"- 使用 `<{name} />`（或 `<{name}></{name}>`，当需要包裹子节点时）。")
    lines.append("- 遇到平台差异时，建议使用条件编译（`#ifdef / #endif`）显式处理。")
    lines.append("")

    lines.append("#### Properties")
    lines.append("")
    if page.properties_table_md:
        lines.append(page.properties_table_md)
    else:
        lines.append(f"See official docs for full properties list: `{url}`")
    lines.append("")

    lines.append("#### Events")
    lines.append("")
    if page.events_table_md:
        lines.append(page.events_table_md)
    else:
        lines.append(f"See official docs for full events list: `{url}`")
    lines.append("")

    lines.append("#### Platform Compatibility")
    lines.append("")
    if page.platform_table_md:
        lines.append(page.platform_table_md)
    elif page.platform_notes:
        for n in page.platform_notes:
            lines.append(f"- {n}")
    else:
        lines.append(f"See official docs for platform support table: `{url}`")
    lines.append("")

    lines.append("### Examples")
    lines.append("")
    if page.example_blocks:
        for idx, (lang, code) in enumerate(page.example_blocks, start=1):
            lines.append(f"### Example (Example {idx})")
            lines.append("")
            lines.append(f"```{lang}")
            lines.append(code.rstrip())
            lines.append("```")
            lines.append("")
    else:
        lines.append(f"Examples are available in the official docs: `{url}`")
        lines.append("")

    lines.append("Reference:")
    lines.append(f"- [Official Documentation]({url})")
    lines.append(f"- [Plugin Marketplace]({plugin_url})")
    if local_example.exists():
        rel = local_example.relative_to(repo_root)
        lines.append(f"- [Local Example]({rel.as_posix()})")
    lines.append("")

    return "\n".join(lines)


def _parse_list_arg(s: str) -> list[str]:
    return [p.strip() for p in (s or "").split(",") if p.strip()]


def main() -> int:
    parser = argparse.ArgumentParser(description="Generate uni-ui component docs in block.md style.")
    parser.add_argument("--only", type=str, default="", help="Comma-separated component names to generate.")
    parser.add_argument("--skip", type=str, default="", help="Comma-separated component names to skip.")
    parser.add_argument("--dry-run", action="store_true", help="Do not write files.")
    parser.add_argument("--sleep", type=float, default=0.2, help="Sleep between requests (seconds).")
    args = parser.parse_args()

    repo_root = Path(__file__).resolve().parents[1]
    out_dir = repo_root / "references" / "components" / "uni-ui"
    if not out_dir.exists():
        raise SystemExit(f"Output dir not found: {out_dir}")

    targets = sorted(p.stem for p in out_dir.glob("*.md"))
    only = set(_parse_list_arg(args.only))
    skip = set(_parse_list_arg(args.skip))
    if only:
        targets = [t for t in targets if t in only]
    if skip:
        targets = [t for t in targets if t not in skip]

    if not targets:
        print("No targets found.")
        return 0

    for name in targets:
        print(f"[fetch] {name}")
        page = fetch_uniui_page(name)
        md = render_block_style_md(page, repo_root=repo_root)
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

