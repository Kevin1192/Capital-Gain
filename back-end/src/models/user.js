const Sequelize = require('sequelize');
const {sequelize} = require('./index');

const User = sequelize.define('user', {
    username: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    password: {
        type: Sequelize.STRING
    }
})


module.exports = User;