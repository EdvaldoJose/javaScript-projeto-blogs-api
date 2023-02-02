'use strict';
module.exports = (sequelize, DataTypes) => {
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
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
    Category.belongsToMany(BlogPost, {
      as: 'posts',
      through: postCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
  }
  return postCategory;

};
