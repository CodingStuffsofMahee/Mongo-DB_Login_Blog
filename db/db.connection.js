const mongoose = require('mongoose')
const DatabaseConnection = () => {
    mongoose.connect('mongodb://127.0.0.1:27017/UserDB');
    const db = mongoose.connection;
    db.on('connected', () => {
        console.log('Mongoose connection is successful');
    });

    // Event for connection error
    db.on('error', (err) => {
        console.error('Mongoose connection error:', err);
    });

    // Event for disconnected
    db.on('disconnected', () => {
        console.log('Mongoose disconnected');
    });
}

module.exports=DatabaseConnection

