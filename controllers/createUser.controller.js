const express = require('express')
const userModal = require('../modals/user.modal');
const bcrypt = require('bcrypt');
const { hashPassword } = require('../utlis/hashingThePassword');

const CreateUserController = async (req, res) => {
    const userExists = await userModal.exists({ email: req.body.email, username: req.body.username })
    const hashedPassword = await hashPassword(req.body.password);

    if (!userExists) {
        await userModal.create({
            name: req.body.name,
            username: req.body.username,
            email: req.body.email,
            password:hashedPassword
        })
        res.json({
            'message': 'Account Created Successfully',
            'statusCode': 200
        })
    } else {
        res.json({
            'message': 'User already exists',
            'statusCode': 400
        })
    }


}

module.exports = CreateUserController