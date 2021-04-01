const mongoose = require('mongoose');

const emotionSchema = mongoose.Schema({
    emotion: {
        type: String,
        unique: true
    },
    actions: [{ 
        action: String, 
        helpfulness: Number, 
        dateAdded: Date,
        timeRequired: Number 
    }],
    thoughts: [{ 
        thought: String, 
        helpfulness: Number, 
        dateAdded: Date,
        timeRequired: Number
    }],
    
});


//separation of concerns for userActions

// const InsightSchema = mongoose.Schema({
//     userActions: [{
//         emotion: String,
//         dateFelt: Date,
//         timeAlotted: Number
//     }]
// })

// const Insight = mongoose.model('Insight', InsightSchema);

module.exports = mongoose.models.Emotion || mongoose.model('Emotion', emotionSchema);

