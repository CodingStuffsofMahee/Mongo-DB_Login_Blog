const mongoose = require('mongoose')
const BlogSchema = new mongoose.Schema({

    blogTitle: {
        type: String,
        required:true
    },
    blogImage:  {
        type: String,
        required:true
    },
    blogContent:  {
        type: String,
        required:true
    },
    blogcategory:  {
        type: String,
        required:true
    },
    blogCreationDate:  {
        type: String,
        required:true
    }
})

const blogModal = mongoose.model('Blogs', BlogSchema)

module.exports = blogModal