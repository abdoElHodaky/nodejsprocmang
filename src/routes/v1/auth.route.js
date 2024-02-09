const express = require('express');
const validate = require('../../middlewares/validate');
const authValidation = require('../../validations/auth.validation');
const authController = require('../../controllers/auth.controller');
const auth = require('../../middlewares/auth');

const authRoute = express.Router();

authRoute.post('/login', validate(authValidation.login), authController.login);
authRoute.post('/logout', validate(authValidation.logout), authController.logout);

module.exports = authRoute;
