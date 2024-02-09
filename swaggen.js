const swaggerAutogen = require('swagger-autogen')();

const outputFile = './src/swagger.json';
const endpointsFiles = [
                        './src/routes/v1/auth.route.js',
                        './src/routes/v1/order.route.js',
                        './src/routes/v1/user.route.js',
                        './src/routes/v1/checklist.route.js'
                       ];

const config = {
    info: {
        title: 'procurement',
        description: '',
    },
    tags: [ ],
    host: '',
    schemes: [],
};

swaggerAutogen(outputFile, endpointsFiles, config);
