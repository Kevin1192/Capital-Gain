const express = require('express');
const router = express.Router();

const { getRecords, createRecord } = require('../controllers/record');

router.post('/:username', createRecord);
router.get('/:username', getRecords);


module.exports = router;