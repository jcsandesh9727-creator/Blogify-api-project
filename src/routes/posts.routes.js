const express = require('express');
const postsController = require('../controllers/posts.controller');

const router = express.Router();

router.get('/', postsController.getAllPosts);
router.get('/:id', postsController.getPostById);
router.post('/', postsController.createPost);

module.exports = router;