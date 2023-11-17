const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB database
mongoose.connect('mongodb+srv://Team5users:teamfiveacs@cluster1.qmk7wif.mongodb.net/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

db.once('open', () => {
  console.log('Connected to MongoDB Atlas');
});

// Define the Mongoose model for the user account
const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  address: { type: String, required: true },
  contactNo: { type: Number, required: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true, minlength: 8 },
  confirmPassword: { type: String, required: true, minlength: 8 },
});

const User = mongoose.model('User', userSchema);

// Define the route for form submission
app.post('/create-account', async (req, res) => {
  const { firstName, lastName, address, contactNo, email, password, confirmPassword } = req.body;

  if (password !== confirmPassword) {
    res.status(400).send('Passwords do not match');
    return;
  }

  const newUser = new User({
    firstName,
    lastName,
    address,
    contactNo,
    email,
    password,
  });

  try {
    await newUser.save();
    res.status(201).send('Account created successfully');
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).send('Internal server error');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
