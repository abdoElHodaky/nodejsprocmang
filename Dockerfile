FROM mongo:6.0
WORKDIR /app
COPY . .
RUN apt install nodejs npm
#RUN mkdir -p /data/db/ && chown `root` /data/db
#RUN rc-update add mongodb default && rc-service mongodb start
RUN npm update
EXPOSE ${PORT}
EXPOSE 27017
CMD ["node","./src/index.js"]
