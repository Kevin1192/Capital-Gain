const express = require('express');
const router = express.Router({mergeParams: true});

const { createRecord, getRecords, deleteRecord } = require('../controllers/record');

// '/api/users/:id/records/'
router.post('/', createRecord);
router.get('/', getRecords);
router.delete('/:recordId', deleteRecord);

module.exports = router;

