const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const Sequelize = require('sequelize');

const sequelize = new Sequelize('postgres://zhouk:691208@localhost:5432/mydb');

const app = express();

const db_link = process.env.DB_LINK;

app.use(bodyParser.json());

app.use(cors());


sequelize
.authenticate()
.then(() => {
    console.log('postgres sql successful')
})
.catch(err => {
    console.log('Unable to connect');
})

const User = sequelize.define('user', {
    firstName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    lastName: {
        type: Sequelize.STRING,
    }
});

User.sync({ force: true });


app.post('/user', async (req, res) => {
    try {
        const newUser = new User(req.body);

        await newUser.save();

        res.json({ user: newUser })
    } catch(err) {
        console.log(err);
    }
})

app.get('/user/:userId', async (req, res) => {
    const userId = req.params.userId;

    try {
        const user = await User.findAll({
            where: {
                id: userId
            }
        });
        res.json({ user });
    } catch(err) {
        console.error(err);
    }
})
app.listen(3000,() => console.log("listening on") )