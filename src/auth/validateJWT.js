const { verifyToken } = require('./JWT');

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const decoded = verifyToken(token);

    if (decoded.isError) return res.status(401).json({ message: 'Expired or invalid token' });
    req.headers.userId = decoded.userId;

    next();
  } catch (err) {
    return res.status(401).json({ message: err.message });
  }
};