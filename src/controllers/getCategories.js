// req-09
const categorieService = require('../services/categories.service');

const getCategories = async (_req, res) => {
  const categories = await categorieService.getCategories();

  return res.status(200).json(categories);
};

module.exports = getCategories;