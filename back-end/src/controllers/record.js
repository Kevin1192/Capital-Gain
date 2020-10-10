const db = require('../models/index');


exports.getRecords = async (req, res, next) => {
    try {
        let user = await db.User.findOne({ where: { id: req.params.id }})
        let records = await user.getRecords();
        return res.status(200).json(records);
    } catch (err) {
        return next(err);
    }
}

exports.createRecord = async function(req, res, next) {
    try {
        console.log(req.params.id)
        let user = await db.User.findOne({ where: { id: req.params.id }});
        let record = await user.createRecord(req.body);
        console.log('see record', record);
        return res.status(200).json(record);
    } catch(err) {
        return next(err);
    }
}