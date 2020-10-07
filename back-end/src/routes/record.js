const express = require('express');
const router = express.Router();

const { getRecords } = require('../controllers/record');

router.route('/records')
    .get('/:userId', getRecords)