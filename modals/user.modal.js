const mongoose = require('mongoose')
const defaultUsername = require('../utlis/DefaultUserName')
const axios=require('axios')


const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        default: 'not Found'
    },
    email: {
        type: String,
        required:true,
        lowercase: true,
        unique:true
    },
    password: {
        type: String,
        required: true
    }
})

const userModal = mongoose.model('Users', UserSchema)

module.exports = userModal