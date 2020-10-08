const express = require('express');
const router = express.Router();

const { createRecord } = require('../controllers/record');

router.post('/', createRecord);


module.exports = router;