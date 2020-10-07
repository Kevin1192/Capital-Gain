const db = require('../models/index');


exports.getRecords = async function(req, res, next) {
    try {
        let user = await db.User.findOne({ where: { username: req.params.username }})
        let records = await user.getRecords();
        return res.status(200).json(records);
    } catch (err) {
        return next(err);
    }
}

exports.createRecord = async function(req, res, next) {
    try {
        let user = await db.User.findOne({ where: { username: req.params.username }});
        let record = await user.createRecord(req.body);
        console.log('see record', record);
        return res.status(200).json(record);
    } catch(err) {
        return next(err);
    }
}