const express = require('express');
//const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerDefinition = require('../../swagger');

const router = express.Router();

/*const specs = swaggerJsdoc({
  swaggerDefinition,
  apis: [
    './src/routes/v1/auth.route.js',
    './src/routes/v1/order.route.js',
    './src/routes/v1/user.route.js',
    './src/routes/v1/checklist.route.js'
                       
  ],
});

router.use('/', swaggerUi.serve);
router.get(
  '/',
  swaggerUi.setup(specs)
);
*/
router.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
module.exports = router;
