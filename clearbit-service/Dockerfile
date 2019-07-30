FROM node:12.7

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3002

CMD ["node", "app.js"]
