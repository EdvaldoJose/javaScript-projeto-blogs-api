const { Op } = require('sequelize');
const { BlogPost, User, Category } = require('../models');

const getPostCategories = async () => {
  const postCategories = await BlogPost.findAll({

    include: [
      {
      model: User,
      as: 'user',
      attributes: {
        exclude: ['password'],
      },
    },
    {
      model: Category,
      as: 'categories',
      through: { attributes: [] },
    },
  ],
  });
  return postCategories;
};

const getPostCategoriesById = async (id) => {
  const postCategory = await BlogPost.findOne({
    where: { id },
    include: [
      {
        model: User,
        as: 'user',
        attributes: {
          exclude: ['password'],
        },
      },
      {
        model: Category,
        as: 'categories',
        through: { attributes: [] },
      },
    ],
  });

  return !postCategory ? { message: 'Post does not exist' } : postCategory;
};

const createNewPost = async (categoryIds, title, content, userId) => {
  const checkArrayCategories = await Category.findAll({
    where: { id: { [Op.in]: categoryIds } }, // req-18
  });

  if (checkArrayCategories.length !== categoryIds.length) {
    return { type: 400, message: 'one or more "categoryIds" not found' };
  }

  const post = await BlogPost.create({
    title,
    content,
    userId,
  });

  await post.addCategory(categoryIds);
  const currentPost = await BlogPost.findByPk(post.id);

  return currentPost;
};

const updatePost = async (id, title, content, userId) => {
  const post = await getPostCategoriesById(id);

  if (userId !== post.userId) return { type: 401, message: 'Unauthorized user' };
  await BlogPost.update(
    { title, content },
    { where: { id, userId } },
    );
  const updatedPost = await getPostCategoriesById(id);
    return updatedPost;
};
const deletePost = async (id, userId) => {
  const post = await BlogPost.findByPk(id);
  console.log(post);

  if (!post) return { type: 404, message: 'Post does not exist' };

  if (userId !== post.userId) return { type: 401, message: 'Unauthorized user' };
  await post.destroy();
};

const searchPost = async (search) => {
  const posts = await BlogPost.findAll({
    where: {
      [Op.or]: [{
        title: { [Op.substring]: search } },
        {
        content: { [Op.substring]: search } },
      ] },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories' },
    ],
  });

  return posts;
};

module.exports = {
  getPostCategories,
  getPostCategoriesById,
  createNewPost,
  updatePost,
  deletePost,
  searchPost,
};