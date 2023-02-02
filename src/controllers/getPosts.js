const postService = require('../services/post.service');

const getPostCategories = async (_req, res) => {
  const posts = await postService.getPostCategories();

  return res.status(200).json(posts);
};

// req-14
const getPostCategoriesById = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await postService.getPostCategoriesById(id);

    if (post.message) return res.status(404).json({ message: post.message });
    return res.status(200).json(post);
  } catch (error) {
    console.log({ message: error.message });
  }
};

module.exports = {
  getPostCategories,
  getPostCategoriesById,
};