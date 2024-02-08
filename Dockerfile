FROM mongo:6.0.13-jammy
WORKDIR /app
COPY . .
RUN apt-get update && apt-get -qq -y install nodejs
#RUN mkdir -p /data/db/ && chown `root` /data/db
#RUN rc-update add mongodb default && rc-service mongodb start
RUN npm update
EXPOSE ${PORT}
EXPOSE 27017
CMD ["node","./src/index.js"]
