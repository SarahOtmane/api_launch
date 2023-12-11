const express = require('express');
const router  = express.Router(); //Crée une instance de routeur Express

const launchController = require('../controllers/launchController');


router
    .route('/launches')
    .get(launchController.listAllLanches)

module.exports = router;