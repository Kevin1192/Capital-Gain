const Sequelize = require('sequelize');

const sequelize = new Sequelize('postgres://zhouk:691208@localhost:5432/mydb');

module.exports.sequelize = sequelize;

sequelize
.authenticate()
.then(() => {
    console.log('postgres sql successful')
})
.catch(err => {
    console.log('Unable to connect');
})


module.exports.User = require('./user');
module.exports.Record = require('./record');