FROM node:16alpine-3.16
WORKDIR /app
COPY . .
RUN apk add --no-cache tzdata mongodb-tools mongodb 
RUN mkdir -p /data/db/ && chown `root` /data/db
RUN rc-update add mongodb default && rc-service mongodb start
RUN npm update
EXPOSE ${PORT}
EXPOSE 27017
CMD ["node","./src/index.js"]
