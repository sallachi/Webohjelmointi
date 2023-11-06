const Post = require("../models/Post");

exports.getAllPosts = async (req, res, next) => {
  try {
    const [posts, _] = await Post.findAll();
    res.status(200).json({ count: posts.length, posts });
  } catch (error) {
    next(error);
  }
};

exports.createNewPost = async (req, res, next) => {
  try {
    let { title, body } = req.body;
    let post = new Post(title, body);
    post = await post.save();
    res.status(201).json({ message: "Post created" });
  } catch (error) {
    next(error);
  }
};

exports.getPostById = async (req, res, next) => {
  try {
    let postId = req.params.id;
    let [post, _] = await Post.findById(postId);
    res.status(200).json({ post });
  } catch (error) {
    next(error);
  }
};

exports.deletePostById = async (req, res, next) => {
  try {
    let postId = req.params.id;
    await Post.deleteById(postId);
    res.status(200).json({ message: "Post deleted" });
  } catch (error) {
    next(error);
  }
};

// Esim. url localhost:3000/id?title=otsikko&body=sisältö
exports.updatePostWithId = async (req, res, next) => {
  try {
    let postId = req.params.id;
    let title = req.query.title;
    let body = req.query.body;
    await Post.updateWithId(postId, title, body);
    res.status(200).json({ message: "Post updated" });
  } catch (error) {
    next(error);
  }
};
