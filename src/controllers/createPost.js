// req-12-16
const postService = require('../services/post.service');

const createNewPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { userId } = req.headers;

  const result = await postService.createNewPost(categoryIds, title, content, userId);

  if (result.type) return res.status(result.type).json({ message: result.message });

  return res.status(201).json(result);
};

module.exports = createNewPost;