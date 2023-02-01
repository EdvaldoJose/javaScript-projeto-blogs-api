const { createToken } = require('../auth/JWT');
const UserService = require('../services/user.service');

module.exports = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserService.getUserByEmail(email);
    if (!user || user.password !== password) { 
      return res.status(401).json({ message: 'Usuário ou senha inválidos' });
    }
    const token = createToken({ userId: user.id });
    res.status(200).json({ token });
  } catch (err) {
    return res.status(400).json({ message: 'Invalid fields', error: err.message });
  }
};