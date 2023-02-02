const postService = require('../services/post.service');

const searchPost = async (req, res) => {
  const { quant } = req.query;

  const posts = await postService.searchPost(quant);
  
  return res.status(200).json(posts);
};

module.exports = searchPost;