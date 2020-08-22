FROM node:12
# RUN apk add --no-cache --virtual builds-deps build-base python nodejs npm 


WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "server/server.js"]