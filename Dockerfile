FROM mongo:6.0.13-jammy
WORKDIR /app
COPY . .
#RUN apk add --no-cache nodejs npm  mongodb-tools
RUN apt-get update && apt-get -qq -y install curl
RUN curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash 
RUN apt-get install -qq -y nodejs
#RUN mkdir -p /data/db/ && chown `root` /data/db
#RUN mkdir -p /data/db/
#RUN rc-update add mongodb default && rc-service mongodb start
RUN npm update && chmod +x ./build.sh
#RUN 
EXPOSE 3000
EXPOSE 27017
CMD ["./build.sh"]
