const express = require('express');
const mongoose = require('mongoose');
const User = mongoose.model('User');

const router = express.Router();

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    res.status(404).send('Invalid email or password');
    return;
  }
  app.get('/profile', async (req, res) => {
    const authorizationHeader = req.headers.authorization;
    if (!authorizationHeader) {
      return res.status(401).send('Unauthorized');
    }
  
    const token = authorizationHeader.split(' ')[1];
    const decoded = jwt.verifyToken(token);
    if (!decoded) {
      return res.status(401).send('Invalid token');
    }
  
    // Allow access to the protected route
    // Retrieve and send user profile information
  });
  
  if (!user.comparePassword(password)) {
    res.status(401).send('Invalid email or password');
    return;
  }

  // User authentication successful
  // Generate JWT token and send it to the client
});

module.exports = router;
