const Sequelize = require('sequelize');
const {sequelize} = require('./index');

const Record = sequelize.define('record', {
    id: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    },
    fillingStatus: {
        type: Sequelize.STRING,
    },
    taxableIncome: {
        type: Sequelize.DOUBLE,
    },
    purchaseDate: {
        type: Sequelize.DATE,
    },
    SaleDate: {
        type: Sequelize.DATE,
    },
    capitalGain: {
        type: Sequelize.DOUBLE,
    },
    totalCapitalGainTax: {
        type: Sequelize.DOUBLE,
    },
    capitalGainAfterTax: {
        type: Sequelize.DOUBLE,
    }
})


module.exports = Record;