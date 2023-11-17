const mongoose = require('mongoose');

// Listen for the 'open' event on the connection
mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB Atlas');
});
