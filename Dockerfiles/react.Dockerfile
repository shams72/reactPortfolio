FROM node:18-alpine

WORKDIR /app

COPY ./react-files/my-app/ .

RUN npm install

EXPOSE 3000

CMD npm run dev 
