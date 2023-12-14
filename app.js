const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;

connectMongoClient('mongodb+srv://Team5users:teamfiveacs@cluster1.qmk7wif.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());  
// Added this line to use the body-parser middleware
const db = connectMongoCliention;

db.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

db.once('open', () => {
  console.log('Connected to MongoDB Atlas');
});

// Define a route to render the website.html file
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/website.html');
});
//Create a data scheme model? 

// Configure Express to serve static files from the 'public' directory
app.use(express.static('public'));




//For authentication
const jwt = require('./jwt'); // Import the JWT module

app.post('/login', async (req, res) => {
  // Authenticate user credentials
  const token = jwt.generateToken({ userId: user.id }); // Generate JWT token
  res.status(200).send({ token }); // Send token to the client
});



// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


