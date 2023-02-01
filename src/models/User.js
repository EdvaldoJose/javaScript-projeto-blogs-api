'use strict';
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('Users', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  }, {
    sequelize,
    timestamps: false,
    underscored: true,
  });
  users.associate = (model) => {
    users.hasMany(model.BlogPost, {
      as: 'post', foreignkey: 'user_id',
    });
  }
  return users;
};