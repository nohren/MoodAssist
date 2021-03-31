const mongoose = require('mongoose');

const emotionSchema = mongoose.Schema({
    actions: [{ 
        actionPhrase: String, 
        helpfulness: Number, 
        date: Date,
        time: Number 
    }],
    thoughts: [{ 
        thoughtPhrase: String, 
        helpfulness: Number, 
        date: Date,
        time: Number
    }],
});

const Emotion = mongoose.model('Emotion', emotionSchema);

module.exports = Emotion;