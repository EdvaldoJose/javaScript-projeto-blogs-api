// req-18
const postService = require('../services/post.service');

const searchPost = async (req, res) => {
  const { q } = req.query;

  const posts = await postService.searchPost(q);
  return res.status(200).json(posts);
};

module.exports = searchPost;