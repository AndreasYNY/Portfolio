FROM oven/bun:alpine AS build

WORKDIR /app
COPY . .
# bun vue can't run without nodejs...it's a 45mb package, so this image is posibly a 10mb image lmao
RUN apk add nodejs
RUN bun install
RUN bun run build

FROM nginx:alpine as runtime

WORKDIR /usr/share/nginx/html

COPY --from=build /app/dist .

EXPOSE 80