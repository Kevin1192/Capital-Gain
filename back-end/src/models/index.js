const Sequelize = require('sequelize');

// sequelize postgress database
const sequelize = new Sequelize('postgres://zhouk:691208@localhost:5432/mydb');

module.exports.sequelize = sequelize;
const User = require('./user');
const Record = require('./record');
User.hasMany(Record);
Record.belongsTo(User);

sequelize
.authenticate()
.then(() => {
    console.log('postgres sql successful')
})
.catch(err => {
    console.log('Unable to connect');
})


module.exports.User = User;
module.exports.Record = Record;