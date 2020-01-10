FROM node:10

WORKDIR /home/app

COPY package*.json ./
COPY webpack.config.js ./
COPY tsconfig.json ./

RUN npm install

CMD [ "npm", "run", "watch" ]