const blogModal = require("../modals/blog.modal")
const GetBlogs = async (req,res) => {
    blogModal.find({}).
        then(blog => {

            res.json({
                'blogs': blog,
                'message': 'Blogs found',
                'statusCode': 400
            })
        }
        ).catch(
            err => {

                res.json({
                    'message': 'No Blogs found',
                    'statusCode': 400
                })
            }


        )
}
module.exports = GetBlogs