const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://MoodAssist:1989@cluster0.3cs5k.mongodb.net/moodAssist?retryWrites=true&w=majority');

const db = mongoose.connection;

db.on('error', () => {
  console.log('mongoose connection error');
});

db.once('open', () => {
  console.log('mongoose connected successfully');
});

module.exports = db;