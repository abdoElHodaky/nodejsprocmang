const express = require('express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerDefinition = require('../../swagger');

const router = express.Router();

const specs = swaggerJsdoc({
  swaggerDefinition,
  apis: [ 'src/routes/v1/*.js'],
});

router.use('/', swaggerUi.serve);
router.get(
  '/',
  swaggerUi.setup(specs)
);

module.exports = router;
