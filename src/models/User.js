'use strict';
const user = (sequelize, DataTypes) => {
  const users = sequelize.define('User', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    timestamps: false,
    underscored: true,
  });

  users.associate = (models) => {
    users.hasMany(models.BlogPost, {
      as: 'post',
      foreignkey: 'user_id',
    });
  }
  return users;
};

module.exports = user;