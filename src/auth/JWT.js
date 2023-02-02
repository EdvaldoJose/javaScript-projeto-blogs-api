const jwt = require('jsonwebtoken');
require('dotenv').config();

const { JWT_SECRET } = process.env;
const createToken = (data) => {
  const payload = data;

  const jwtConfig = {
    algorithm: 'HS256',
    expiresIn: '1d',
  };

  const token = jwt.sign(payload, JWT_SECRET, jwtConfig);

  return token;
};
const verifyToken = (authorization) => {
  try {
    const payload = jwt.verify(authorization, JWT_SECRET);
  
    return payload;
  } catch (error) {
    return { isError: true, error };
  }
};

module.exports = {
  createToken,
  verifyToken,
};