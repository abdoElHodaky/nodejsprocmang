const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const orderValidation = require('../../validations/order.validation');
const orderController = require('../../controllers/order.controller');

const orderRoute = express.Router();

orderRoute
  .route('/orders/')
  .post(auth('manageOrder'), validate(orderValidation.createOrder), orderController.createOrder)
  .get(auth(), orderController.getOrders);

orderRoute
.route('/orders/:orderId')
.patch(auth('manageOrder'), validate(orderValidation.createOrder), orderController.updateOrder);

module.exports = orderRoute;
