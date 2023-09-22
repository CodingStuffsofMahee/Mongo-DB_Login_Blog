const express = require('express')
const bodyParser = require('body-parser')
const LoginUser = require('../controllers/login.controller')
const CreateUserController = require('../controllers/createUser.controller')
const router = express.Router()

router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

router.post('/login', LoginUser) 
router.post('/signup', CreateUserController) 

module.exports=router