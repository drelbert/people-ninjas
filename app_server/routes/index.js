var express = require('express');
var router = express.Router();
var ctrlDashboard = require('../controllers/dashboard');


/* GET dashboard page. */
router.get('/', ctrlDashboard.dashboard);

module.exports = router;
