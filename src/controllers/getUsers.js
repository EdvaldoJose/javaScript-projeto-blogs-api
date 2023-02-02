const userService = require('../services/user.service');
const status = require('../utils');

const getAllUsers = async (_req, res) => {
  const users = await userService.getAllUsers();

  res.status(status.HTTP_OK).json(users);
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const user = await userService.getUserById(id);

  if (user.type) return res.status(user.type).json({ message: user.message });

  return res.status(status.HTTP_OK).json(user);
};

module.exports = {
  getAllUsers,
  getUserById,
};