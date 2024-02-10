# use the official Bun image
# see all versions at https://hub.docker.com/r/oven/bun/tags
FROM oven/bun:1 as base
WORKDIR /app

COPY . /app/

FROM base AS install
RUN bun install
EXPOSE 8080
# run the app
CMD ["bun", "start"]
