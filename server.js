const express=require('express')
const app = express()
const cors = require('cors')
const DatabaseConnection = require('./db/db.connection')()
const LoginUser = require('./Routes/login.routes')
const dotenv = require('dotenv');
const blogRouter = require('./Routes/blogs.routes')
dotenv.config();

const corsOptions = {
  origin: 'https://mongo-dbloginblog-production.up.railway.app',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors())
app.use('/auth', LoginUser)
app.use('/blogs',blogRouter)
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