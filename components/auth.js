const jwt = require('jsonwebtoken');
const secretKey = process.env.JWT_SECRET; // Your secret key

const generateToken = (payload) => {
  const token = jwt.sign(payload, secretKey, {
    expiresIn: '1h' // Token expiration time
  });
  return token;
};

const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, secretKey);
    return decoded;
  } catch (error) {
    return null; // Invalid token
  }
};

module.exports = {
  generateToken,
  verifyToken
};
