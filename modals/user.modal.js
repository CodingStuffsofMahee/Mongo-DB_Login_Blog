const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        default:'not given'
        // default: randomUserName().items.username,
    },
    profileUrl: {
        type: String,
        default:''
    },
    email: {
        type: String,
        required: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    }
})

const userModal = mongoose.model('Users', UserSchema)

module.exports = userModal