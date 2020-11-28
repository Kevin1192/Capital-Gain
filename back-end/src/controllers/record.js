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
        let user = await db.User.findOne({ where: { id: req.params.id }});
        let record = await user.createRecord(req.body);
        console.log('see record', record);
        return res.status(200).json(record);
    } catch(err) {
        console.log(err, 'err in create records function')
        return next(err);
    }
}

exports.deleteRecord = async function(req, res, next) {
   try {
    let user = await db.User.findOne({ where: { id: req.params.id }});
    if (!user) throw new Error('user not found');

    let record = await db.Record.findOne({ where: { id: req.params.recordId}});
    if (!record) throw new Error('record not found');

    await user.removeRecord(record);
    await record.destroy();
    return res.status(200).json('delete record success');
   } catch (err) {
    console.log(err.message, 'err in delete record function')
    return next(err);
   }
}