const blogModal = require("../modals/blog.modal")

const BlogController = async (req, res) => {
    const blogExists = await blogModal.exists({ blogTitle: req.body.blogTitle })
    if (blogExists === null) {
        await blogModal.create({
            blogTitle: req.body.blogTitle,
            blogImage: req.body.blogImage ,
            blogContent:req.body.blogContent ,
            blogcategory:req.body.blogcategory ,
            blogCreationDate: req.body.blogCreationDate
        })
        res.json({
            'message': 'Blog Created Successfully',
            'statusCode': 200
        })
    }
    else {
        res.json({
            'message': 'Blog Creation Failed (already exists)',
            'statusCode': 400
        })
    }

}

module.exports=BlogController