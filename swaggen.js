const swaggerAutogen = require('swagger-autogen')({ openapi: '3.0.0'});

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
        },
        {
            name:"User",description:""
        }
    ],
    host: '',
    schemes: [],
    basePath: '/v1/',
    components: {
        securitySchemes:{
            JWTAUTH: {
                type: 'http',
                scheme: 'bearer'
            }
        }
    }
};

swaggerAutogen(outputFile, endpointsFiles, config);
