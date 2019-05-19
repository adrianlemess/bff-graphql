FROM node:10.14.2-alpine

ARG PORT

ENV PORT=5000

ADD . .

RUN npm install

EXPOSE 5000

CMD [ "npm", "run", "start" ]