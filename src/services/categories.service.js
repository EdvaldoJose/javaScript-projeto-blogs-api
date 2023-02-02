// req-08
const { Category } = require('../models');

const addCategories = async (name) => {
  const categorie = await Category.create({ name });
  return categorie;
};
// req-09
const getCategories = async () => {
  const categories = await Category.findAll();
  return categories;
};

module.exports = {
  addCategories,
  getCategories,
};