const categorieService = require('../services/categories.service');

const addCategories = async (req, res) => {
  const { name } = req.body;

  const categorie = await categorieService.addCategories(name);

  if (!name) return res.status(400).json({ message: '"name" is required' });

  return res.status(201).json(categorie);
};

module.exports = addCategories;