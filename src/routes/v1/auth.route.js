const express = require('express');
const validate = require('../../middlewares/validate');
const authValidation = require('../../validations/auth.validation');
const authController = require('../../controllers/auth.controller');
const auth = require('../../middlewares/auth');

const authRoute = express.Router();

authRoute.post('/auth/login', validate(authValidation.login), authController.login);
authRoute.post('/auth/logout', validate(authValidation.logout), authController.logout);

module.exports = authRoute;
