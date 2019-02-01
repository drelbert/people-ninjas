const express = require('express');
const router = express.Router();
const ctrlNinjas = require('../controllers/ninjas');
const ctrlProjectDetails = require('../controllers/projectDetails');
 
// Ninjas
router
  .route('/ninjas')
  .get(ctrlNinjas.ninjasList)
  .post(ctrlNinjas.ninjasCreate);
 
router
  .route('/ninjas/:ninjaid')
  .get(ctrlNinjas.ninjasReadOne)
  .put(ctrlNinjas.ninjasUpdateOne)
  .delete(ctrlNinjas.ninjasDeleteOne);
 
// Project Details 
router
  .route('/ninjas/:ninjaid/projectDetails')
  .post(ctrlProjectDetails.projectDetailsCreate);
 
router
  .route('/ninjas/:ninjasid/projectDetails/:projectDetailsid')
  .get(ctrlProjectDetails.projectDetailsReadOne)
  .put(ctrlProjectDetails.projectDetailsUpdateOne)
  .delete(ctrlProjectDetails.projectDetailsDeleteOne);

module.exports = router;