const express = require('express');
const router = express.Router({mergeParams: true});

const { createRecord, getRecords } = require('../controllers/record');

// '/api/users/:id/records/'
router.post('/', createRecord);
router.get('/', getRecords);


module.exports = router;

