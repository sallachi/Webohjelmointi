const express = require("express");
const router = express.Router();
const postControllers = require('../controllers/postControllers');

router.route("/").get(postControllers.getAllPosts).post(postControllers.createNewPost);

router.route("/:id").get(postControllers.getPostById)
    .delete(postControllers.deletePostById)
    .put(postControllers.updatePostWithId);

module.exports = router;
