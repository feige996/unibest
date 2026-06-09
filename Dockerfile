FROM node:24-alpine AS builder
RUN npm config set registry https://registry.npmmirror.com/
RUN npm i -g corepack pnpm
WORKDIR /app
COPY . /app
RUN pnpm install --frozen-lockfile
RUN pnpm run init-baseFiles
RUN pnpm run build:h5:prod
RUN echo "Builder Success"

FROM nginx:1.22-alpine
# 配置 nginx
COPY --from=builder /app/dist/build/h5 /usr/share/nginx/html/h5
COPY --from=builder /app/nginx.conf /etc/nginx/nginx.conf
EXPOSE 8080
# 启动 Nginx
CMD ["nginx", "-g", "daemon off;"]
