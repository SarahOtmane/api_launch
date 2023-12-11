const express = require('express');
const router  = express.Router(); //Crée une instance de routeur Express

const postController = require('../controllers/launchController');


// la route de base : /posts
router
    .route('/posts')

module.exports = router;