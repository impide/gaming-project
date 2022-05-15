const bcrypt = require('bcrypt');
const User = require('../models/UserModel');
const jwt = require('jsonwebtoken');

module.exports = {
    signup: (req, res) => {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
            if (err) {
                return res.status(500).json({
                    status: 500,
                    message: err.message
                })
            }
            const newUser = new User({
                username: req.body.username,
                email: req.body.email,
                password: hash,
                avatar: req.body.avatar
            })
            console.log(newUser);
            newUser.save((err, user) => {
                if (err) {
                    return res.status(400).json({
                        status: 400,
                        message: err.message
                    })
                }
                return res.status(201).json({
                    status: 201,
                    message: 'User created !'
                })
            })
        })
    }
}