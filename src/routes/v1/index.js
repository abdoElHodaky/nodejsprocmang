const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const checklistRoute = require('./checklist.route');
const orderRoute = require('./order.route');
const docsRoute= require('./docs.route')
const config = require('../../config/config');

const router = express.Router();

const defaultRoutes = [
  {
    route: authRoute
  },
  {
    route: userRoute
  },
  {
    route: checklistRoute
  },
  {
    route: orderRoute
  },

];

defaultRoutes.forEach((route) => {
  router.use(route.route);
});

module.exports = router;
