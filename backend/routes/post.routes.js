const express = require('express');
const { setPosts, getPosts, editPosts, deletePost } = require('../controllers/post.controller');
const router = express.Router();

router.get("/", getPosts);
router.post("/", setPosts);
router.put('/:id', editPosts);
router.delete('/:id', deletePost);

router.patch('/like-post/:id', (req, res) => {
    res.json(
        {
            message : `Post [${ req.params.id }] liked`,
        }
    );
});
router.patch('/dislike-post/:id', (req, res) => {
    res.json(
        {
            message : `Post [${ req.params.id }] disliked`,
        }
    );
});

module.exports = router;