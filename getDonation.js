const mongoose = require("mongoose");
const Donation = require("./models/donation");

mongoose.connect('mongodb+srv://Team5users:teamfiveacs@cluster1.qmk7wif.mongodb.net/', {
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

Donation.find({})
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });