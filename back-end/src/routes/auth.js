const express = require('express');
const router = express.Router();

const { signup, signin } = require('../controllers/auth');


//api/auth/signup
router.post('/signup', signup);
//api/auth/signin
router.post('/signin', signin);

module.exports = router;
