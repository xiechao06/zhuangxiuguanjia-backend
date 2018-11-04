# this will generate an image with source file baked in

FROM node:10.9.0-alpine

USER node

ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH=$PATH:/home/node/.npm-global/bin

WORKDIR /home/node

COPY ./package.json .
COPY ./yarn.lock .

RUN yarn install --verbose

EXPOSE 4000

COPY *.js .

# these files will be modified by yarn and incur errors

CMD ["yarn", "start"]