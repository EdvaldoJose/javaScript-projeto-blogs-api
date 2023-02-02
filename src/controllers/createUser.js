const userService = require('../services/user.service');

const createUser = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    const { user, token } = await userService.createUser({
      displayName,
      email,
      password,
      image,
    });

    if (!user) throw Error;

    res.status(201).json({
      message: 'Novo usuário criado com sucesso', token,
    });
  } catch (error) {
    res.status(409).json({
      message: 'User already registered',
      error: error.message,
    });
  } 
};

module.exports = createUser;