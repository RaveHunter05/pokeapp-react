# pull official base image
FROM node:14.17.5-alpine

RUN npm install -g http-server

# set working directory
WORKDIR /app

# install app dependencies
COPY package.json ./
RUN npm install

# add app
COPY . ./

RUN npm run build

# start app
EXPOSE 8080
CMD [ "http-server", "dist" ]
