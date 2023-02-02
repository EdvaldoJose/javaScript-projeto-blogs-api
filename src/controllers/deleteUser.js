const userService = require('../services/user.service');

const deleteUser = async (req, res) => {
  const { userId } = req.headers;

  await userService.deleteUser(userId);
  return res.status(204).end();
};

module.exports = deleteUser;
