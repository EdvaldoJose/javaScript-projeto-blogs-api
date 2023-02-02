const { createToken } = require('../auth/JWT');
const { User } = require('../models');
const status = require('../utils');

const getAllUsers = async () => {
  const users = await User.findAll({
    attributes: {
      exclude: ['password'],
    },
  });

  return users;
};

const getUserById = async (id) => {
  try {
    const user = await User.findOne({
      where: {
        id,
      },
      attributes: {
        exclude: ['password'],
      },
    });

    if (!user) return { type: status.NOT_FOUND, message: 'User does not exist' };

    return user;
  } catch (err) {
    console.log(err);
  }
};

const getUserByEmail = async (email) => {
  const userEmail = await User.findOne({ where: { email } });

  return userEmail.dataValues;
};

const createUser = async ({ displayName, email, password, image = null }) => {
  const [user, createdUser] = await User.findOrCreate({
    where: { email },
    attributes: {
      exclude: ['password'],
    },
    defaults: { displayName, email, password, image },
  });

  if (!createdUser) return { message: 'User already registered' };

  const token = createToken(user.dataValues);
  return { user: user.dataValues, token };
};

const deleteUser = async (id) => {
  await User.destroy({ where: { id } });
};

module.exports = {
  getAllUsers,
  getUserById,
  getUserByEmail,
  createUser,
  deleteUser,
};