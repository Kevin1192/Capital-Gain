const db = require('../models/index');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.signin = async function(req, res, next) {
    try {
        let user = await db.User.findOne({ where: { username: req.body.username }});
        let { id, username } = user;

        let isMatch = await bcrypt.compare(req.body.password, user.password);
        if (isMatch) {
            let token = jwt.sign(
                {
                    id,
                    username,
                },
                process.env.SECRET_KEY
            );
            return res.status(200).json({
                id,
                username,
                token,
            });
        } else {
            return next({
                status: 400,
                message: "Invalid username/password",
            })
        }

        
    } catch(err) {
        return next({ status: 400, message: 'Invalid email/password'});

    }
}


exports.signup = async function (req, res, next) {
    try {

        let userExists = await db.User.findOne({ where: { username: req.body.username }});

        console.log(userExists, 'in controller auth');
        if (userExists) {
            return next({
                status: 400,
                message: "Sorry, the username is already taken, please try another username"
            })
        }


        let hash = await bcrypt.hash(req.body.password, 10);


        let bodyObj = {...req.body, password: hash };
        console.log(bodyObj);
        let user = await db.User.create(bodyObj);
        let { id, username } = user;
        let token = jwt.sign(
            {
                id,
                username,
            },
            process.env.SECRET_KEY
        );
        return res.status(200).json({
            id,
            username,
            token,
        });
    } catch (err) {
        if (err.code === 11000) {
            err.message = 'Sorry, that username and/or password is taken'
        }
        console.log(err.message);
        return next({
            status: 400,
            message: err.message,
        });
}
}


