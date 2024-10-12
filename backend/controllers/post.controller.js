const PostModel = require('../models/post.model');


module.exports.getPosts = async (req, res) => {
    try {
        const posts = await PostModel.find();
        res.status(200).json({
            message: posts
        });
    } catch (error) {
        res.status(500).json({
            message: "Error retrieving posts",
            error: error.message
        });
    }
};

module.exports.setPosts = async (req, res) => {
    if(!req.body.message) {
        return res.status(400).json({
            message: "Please add a message"
        });
    }
    try {
        const post = await PostModel.create({
            message: req.body.message,
            author: req.body.author,
        });
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({
            message: "Error creating the post",
            error: error.message
        });
    }
};

module.exports.editPosts = async (req, res) => {
    try {
        const post = await PostModel.findById(req.params.id);
        if(!post) {
            res.status(400).json({
                message: "Post undefined"
            })
        }
        const updatePost = await PostModel.findByIdAndUpdate(
            post,
            req.body,
            { new:true }
        )
        res.status(200).json(updatePost);
    } catch (error) {
        res.status(500).json({
            message: "Error editing the post",
            error: error.message
        });
    }
};

module.exports.deletePost = async (req, res) => {
    try {
        const post = await PostModel.findById(req.params.id);
        if(!post) {
            res.status(400).json({
                message: "Post undefined"
            })
        }
        await post.deleteOne();
        res.status(200).json("The post : " +  req.params.id + " has been deleted correctly");
    } catch (error) {
        res.status(500).json({
            message: "Error deleting post",
            error: error.message
        });
    }
};
