const mongoose = require('mongoose');

const emotionSchema = mongoose.Schema({
    actions: [{ actionPhrase: String, helpfulness: Number, date: Date }],
    thoughts: [{ thoughtPhrase: String, helpfulness: Number, date: Date }],
});

const Emotion = mongoose.model('Emotion', emotionSchema);

module.exports = Emotion;