const swaggerAutogen = require('swagger-autogen')();

const outputFile = './src/swagger.json';
const endpointsFiles = ['./src/routes/v1/*.route.js']
const config = {
    info: {
        title: 'procurement',
        description: '',
    },
    tags: [
        {
            name:"Authentication",description:""
        },
        {
            name:"Order",description:""
        },
        {
            name:"Checklist",description:""
        }
    ],
    host: '',
    schemes: [],
    basePath: '/v1/',
    security: [{Authorization: []}],
};

swaggerAutogen(outputFile, endpointsFiles, config);
