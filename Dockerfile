FROM node:18-alpine3.16

WORKDIR /app

RUN apk add --no-cache openssl bash

COPY package.json package-lock.json ./

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]

