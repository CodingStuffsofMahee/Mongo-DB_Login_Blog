const express = require('express')
const userModal = require('../modals/user.modal')
const bcrypt = require('bcrypt');


const LoginUserController = async (req, res) => {
    const userExists = await userModal.exists({ email: req.body.email })
    if (userExists) {
        const userInfo = await userModal.findById(userExists._id)
        console.log("UserInfo:- " + userInfo)

        bcrypt.compare(req.body.password, userInfo.password, function(err, result) {
            if (result) {
                res.json({
                    'message': 'Logged In Successfully',
                    'statusCode': 200
                })
            } else {
                res.json({
                    'message': 'Incorrect Password',
                    'statusCode': 400
                })
            }
        });
    } else {
        res.json({
            'message': "Your Account doesn't exists",
            'statusCode': 400
        })
    }
}

module.exports = LoginUserController