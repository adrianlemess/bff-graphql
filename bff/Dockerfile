FROM node:10.14.2-alpine

ARG PORT
ARG env
ARG IP_ALLOW_ORIGIN
ARG PROXY_API_URL
ARG PROXY_GRAPHQL_URL

ENV PORT=3000
ENV env=$env
ENV IP_ALLOW_ORIGIN=$IP_ALLOW_ORIGIN
ENV PROXY_API_URL=$PROXY_API_URL
ENV PROXY_GRAPHQL_URL=$PROXY_GRAPHQL_URL

ADD package.json package-lock.json /tmp/build/

WORKDIR /tmp/build

RUN cd /tmp/build && npm install

ADD . .

RUN npm run build

EXPOSE 3000

CMD [ "node", "dist/index.js" ]