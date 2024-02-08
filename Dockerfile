FROM mongo:6.0.13-jammy
WORKDIR /app
COPY . .
#RUN apk add --no-cache nodejs npm  mongodb-tools
RUN apt-get update && apt-get -qq -y install nodejs npm
#RUN mkdir -p /data/db/ && chown `root` /data/db
#RUN mkdir -p /data/db/
#RUN rc-update add mongodb default && rc-service mongodb start
RUN mongod --bind_ip_all
RUN npm update
EXPOSE ${PORT}
EXPOSE 27017
CMD ["node","./src/index.js"]
