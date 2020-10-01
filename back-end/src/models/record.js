const Sequelize = require('sequelize');
const {sequelize} = require('./index');

const Record = sequelize.define('record', {
    id: {
        type: Sequelize.STRING,
        allowNull: false,
    }
})


module.exports = Record;