FROM node:18-alpine
#FROM mongo:6.0.13-jammy
WORKDIR /app
COPY . .
#RUN apt-get update && apt-get -qq -y install curl
#RUN curl -fsSL https://deb.nodesource.com/setup_lts.x | bash 
#RUN apt-get install -qq -y nodejs
RUN apk add --no-cache tzdata  sqlite-dev postgresql-dev mysql-dev protobuf protobuf-dev redis supervisor sudo
RUN npm update && chmod +x ./build.sh
EXPOSE 3000 27017
CMD ["./build.sh"]
