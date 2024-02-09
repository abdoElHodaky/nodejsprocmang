npm install swagger-ui-express swagger-autogen
#rm ./src/swagger.json
node swaggen.js
node ./src/index.js
