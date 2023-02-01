const { createToken } = require('../auth/JWT');
const { User } = require('../models/User');
const status = require('../utils/index');

const getAllUsers = async () => {
  const users = await User.findAll({
    attributes: {
      exclude: ['password'],
    },
  });
  return users;
};

module.exports = {
  getAllUsers,
};