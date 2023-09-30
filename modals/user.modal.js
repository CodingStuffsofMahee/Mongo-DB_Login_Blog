const mongoose = require('mongoose')
// const { defaultUsername } = require('../utlis/DefaultUserName')

// async function useUsername() {
//     try {
//         const username = await defaultUsername().then((response) => {
//             return response
//         });
//         console.log('Username:', username);

//         // Now you can use the 'username' variable in this file or pass it to other functions
//     } catch (error) {
//         console.error('Error:', error);
//     }
// }
// useUsername()

// defaultUsername().then((res) => {
//     console.log(res);
// }).catch((error) => {
//     console.error('Error:', error); // Handle errors
//   });
// const randomUserName = async () => {
//     try {
//         const result = await defaultUsername.defaultUsername()
//         return {result};
//     } catch (error) {
//         console.error('Request failed:', error)
//     }
// }
// let generatedUserName;
// randomUserName().then((res) => {
//     console.log(res.result);
//     generatedUserName=res.result
// })

// console.log(generatedUserName);


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
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

const userModal = mongoose.model('Users', UserSchema)

module.exports = userModal