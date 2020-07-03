FROM node:12-alpine

WORKDIR /src/app/database

RUN npm init -y 

RUN npm i mongoose faker express 

COPY . .

CMD ["node", "seed"]

