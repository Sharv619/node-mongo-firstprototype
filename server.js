const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb+srv://Team5users:teamfiveacs@cluster1.qmk7wif.mongodb.net/test');

// Handle form submissions
app.post('/submit', (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const address = req.body.address;
  const email = req.body.email;
  const password = req.body.password;
  const contactNo = req.body.contactNo;

  // Process the form data and interact with the MongoDB database
  // ...

  res.send('Form data submitted successfully');
});

// Respond to GET requests on the root path
app.get('/', (req, res) => {
  res.render(index);
});

app.listen(3000, () => {
  console.log('Server is running at 3000');
});
