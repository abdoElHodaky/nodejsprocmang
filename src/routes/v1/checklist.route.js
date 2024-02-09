const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const checklistValidation = require('../../validations/checklist.validation');
const checklistController = require('../../controllers/checklist.controller');

const checklistRoute = express.Router();

checklistRoute
  .route('/')
  .post(auth('manageChecklist'), validate(checklistValidation.createChecklist), checklistController.createChecklist)
  .get(auth(), checklistController.getChecklist);


checklistRoute
  .route('/:checklistId')
  .put(auth(), validate(checklistValidation.fillChecklist), checklistController.fillChecklist);

module.exports = checklistRoute;
