const cors = require('cors')
const express = require('express')
const bodyParser = require('body-parser')
const LoginUser = require('../controllers/login.controller')
const BlogController = require('../controllers/blogs.controller')
const GetBlogs = require('../controllers/getBlogs.controller')
const blogRouter = express.Router()

blogRouter.use(bodyParser.urlencoded({ extended: false }))
blogRouter.use(bodyParser.json())

blogRouter.post('/createBlog', cors(), BlogController)
blogRouter.get('/allblogs',cors(),GetBlogs)

module.exports=blogRouter