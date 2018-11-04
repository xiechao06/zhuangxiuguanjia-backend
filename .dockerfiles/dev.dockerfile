# this docker file will do nothing, but only start server
FROM node:10.9.0-alpine

USER root

RUN apk add bash --no-cache

USER node
WORKDIR /home/node
EXPOSE 4000

CMD ["yarn", "start"]
