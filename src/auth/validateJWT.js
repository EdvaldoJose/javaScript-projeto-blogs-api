const { verifyToken } = require('./JWT');

module.exports = async (req, res, next) => {
  const token = req.header.authorization;
  if (!token) {
    return res.status(402).json({ token: 'Token not found' });
  }
  try {
    const decoded = verifyToken(token);
    if (decoded.isError) return res.status(401).json({ message: 'Expired or invalid token' });
    req.header.userId = decoded.userId;
    next();
  } catch (err) {
    return res.status(401).json({ massage: err.message });
  }
};