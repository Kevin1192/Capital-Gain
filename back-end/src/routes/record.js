const express = require('express');
const router = express.Router({mergeParams: true});

const { createRecord, getRecords } = require('../controllers/record');

router.post('/', createRecord);
router.get('/', getRecords);


module.exports = router;

