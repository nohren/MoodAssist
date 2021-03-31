const mongoose = require('mongoose');
const mongoURI = require('../config/mongoURI');
mongoose.connect(mongoURI);

const db = mongoose.connection;

db.on('error', () => {
  console.log('mongoose connection error');
});

db.once('open', () => {
  console.log('mongoose connected successfully');
});

module.exports = db;