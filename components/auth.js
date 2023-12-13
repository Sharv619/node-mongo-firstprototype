const jwt = require('jsonwebtoken');
const secretKey = process.env.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9; // Your secret key

const generateToken = (payload) => {
  const token = jwt.sign(payload, secretKey, {
    expiresIn: '1h' 
  });
  return token;
};

const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, secretKey);
    return decoded;
  } catch (error) {
    return null; // if error, return null
  }
};

module.exports = {
  generateToken,
  verifyToken
};
