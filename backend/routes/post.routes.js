const express = require('express');
const { setPosts } = require('../controllers/post.controller');
const router = express.Router();

router.get("/", (req, res) => {
    res.json(
        {
            message: "message ok",
        }
    );
});
router.post("/", setPosts);
router.put('/:id', (req, res) => {
    res.json(
        {
            messageId: req.params.id,
        }
    );
});
router.delete('/:id', (req, res) => {
    res.json(
        {
            message: `Post [${ req.params.id }] deleted`,
        }
    );
});
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