const postService = require('../services/post.service');

const deletePost = async (req, res) => {
  const { id } = req.params;
  const { userId } = req.headers;

  const post = await postService.deletePost(id, userId);

  if (post) return res.status(post.type).json({ message: post.message });

  return res.status(204).end();
};

module.exports = deletePost;
