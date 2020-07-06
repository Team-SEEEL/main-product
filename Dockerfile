# What image do you want to start building on?
FROM node:12-alpine

RUN mkdir -p /src/app

WORKDIR /src/app 

## COPY package*.json ./

COPY . /src/app

# Does your app have any dependencies that should be installed?

RUN npm install --production

COPY . .

EXPOSE 3001

CMD [ "npm", "start" ]


