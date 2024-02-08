FROM mongo:6.0
WORKDIR /app
COPY . .
#RUN apt-get install -y curl
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash 
RUN nvm install 16
#RUN mkdir -p /data/db/ && chown `root` /data/db
#RUN rc-update add mongodb default && rc-service mongodb start
RUN npm update
EXPOSE ${PORT}
EXPOSE 27017
CMD ["node","./src/index.js"]
