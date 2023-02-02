'use strict';
const postCategory = (sequelize, DataTypes) => {
  const postCategory = sequelize.define('PostCategory', {
    postId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER
  }, {
    sequelize,
    timestamps: false,
    underscored: true,
    tableName: 'posts_categories',
  });

  postCategory.associate = ({ BlogPost, Category }) => {
    BlogPost.belongsToMany(Category, {
      as: 'categories',
      through: postCategory,
      foreignKey: 'postId', // req-14
      otherKey: 'categoryId', // req-14
    });
    Category.belongsToMany(BlogPost, {
      as: 'posts',
      through: postCategory,
      foreignKey: 'categoryId', // req-14
      otherKey: 'postId', // req-14
    });
  }
  return postCategory;

};

module.exports = postCategory;