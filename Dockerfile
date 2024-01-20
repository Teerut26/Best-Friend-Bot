# use the official Bun image
# see all versions at https://hub.docker.com/r/oven/bun/tags
FROM node:18-alpine
WORKDIR /app

COPY . /app/

RUN yarn add bun
RUN yarn

CMD [ "yarn", "run", "start" ]
