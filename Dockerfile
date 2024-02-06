FROM node:16-alpine3.16
WORKDIR /app
COPY . .
RUN apk add --no-cache tzdata  sqlite-dev postgresql-dev mysql-dev 
RUN npm update
EXPOSE ${PORT}
CMD ["node","./src/index.js"]
