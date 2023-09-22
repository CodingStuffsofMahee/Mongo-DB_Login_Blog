const express=require('express')
const app = express()
const DatabaseConnection = require('./db/db.connection')()
const LoginUser = require('./Routes/login.routes')
const dotenv = require('dotenv');
dotenv.config();


app.use('/auth', LoginUser)


app.get('/', (req,res) => {
  res.json({
      'message': 'SucessFull',
      'statusCode':'200'
  })
})
const port = process.env.PORT || 5500
app.listen(port , () => {
    console.log("Server Started at "+port);
})