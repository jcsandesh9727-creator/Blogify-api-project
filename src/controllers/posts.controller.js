const sendResponse = require('../utils/response');

let posts = [
  { id: 1, title: "First Post", content: "Hello Blogify!" }
];

exports.getAllPosts = (req, res) => {
  return sendResponse(res, 200, true, "Posts fetched successfully", posts);
};

exports.getPostById = (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find(p => p.id === id);

  if (!post) {
    return sendResponse(res, 404, false, "Post not found");
  }

  return sendResponse(res, 200, true, "Post fetched successfully", post);
};

exports.createPost = (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return sendResponse(res, 400, false, "Title and content are required");
  }

  const newPost = {
    id: posts.length + 1,
    title,
    content
  };

  posts.push(newPost);

  return sendResponse(res, 201, true, "Post created successfully", newPost);
};