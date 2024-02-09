const swaggerAutogen = require('swagger-autogen')();

const outputFile = './src/swagger.json';
const endpointsFiles = ['./src/routes/v1/*.route.js']
const config = {
    info: {
        title: 'procurement',
        description: '',
    },
    tags: [ ],
    host: '',
    schemes: [],
    basePath: '/v1'
};

swaggerAutogen(outputFile, endpointsFiles, config);
