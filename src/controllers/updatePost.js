const postService = require('../services/post.service');

const updatePost = async (req, res) => {
  const { title, content } = req.body;
  const { userId } = req.headers;
  const { id } = req.params;

  const result = await postService.updatePost(id, title, content, userId);

  if (result.type) return res.status(result.type).json({ message: result.message });

  return res.status(200).json(result);
};

module.exports = updatePost;