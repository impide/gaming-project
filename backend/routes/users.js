var express = require('express');
const UserController = require('../controllers/UserController');
var router = express.Router();

// Create a new User
router.post('/signup', UserController.signup);


module.exports = router;