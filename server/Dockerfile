FROM node:latest

WORKDIR /src/app

COPY . /src/app

EXPOSE 3000

ENV DB_CONNECTION_STRING=${DB_CONNECTION_STRING}

RUN npm install

CMD ["npm", "start"]