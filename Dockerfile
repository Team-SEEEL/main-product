# What image do you want to start building on?
FROM node:12-alpine

RUN mkdir -p /src/app

WORKDIR /src/app

RUN npm init -y 

COPY package*.json ./

# Does your app have any dependencies that should be installed?


# COPY . .

RUN npm install --production

# What port will the container talk to the outside world with once created?
EXPOSE 3001

CMD [ "npm", "start" ]


