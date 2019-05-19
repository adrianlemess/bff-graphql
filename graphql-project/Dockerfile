FROM node:10.14.2-alpine

ARG PORT
ARG env
ARG APIS_DOMAIN

ENV PORT=5000
ENV APIS_DOMAIN=$APIS_DOMAIN

ADD package.json package-lock.json /tmp/

RUN cd /tmp && npm install

WORKDIR /tmp

ADD . .

EXPOSE 5000

CMD [ "node", "index.js" ]