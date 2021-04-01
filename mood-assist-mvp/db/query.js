const Emotion = require('./emotionSchema')
const db = require('./dbIndex')

const getEmotion = async (emotion, cb) => {
  try {
    const obj = await Emotion.findOne({ emotion: emotion })
    cb(null, obj);
  } catch (e) {
    cb(e, null)
  }
}

const insertThought = async (emotion, thoughtObj, cb) => {
  try {
    const obj = await Emotion.findOne({ emotion: emotion })
    const thoughts = obj.thoughts;
    thoughts.push(thoughtObj)

    const updated = await obj.save()
    cb(null, updated)
  } catch (e) {
    cb(e, null)
  }
}

const insertAction = async (emotion, actionObj, cb) => {
  // actionObj = {
  //   action: 'Go for a walk in the morning',
  //   helpfulness: 0,
  //   dateAdded: new Date(),
  //   timeRequired: 0
  // }
  try {
  const obj = await Emotion.findOne({ emotion: emotion })
  const actions = obj.actions;
  actions.push(actionObj)

  const updated = await obj.save()
  cb(null, updated)
  } catch(e) {
    cb(e, null)
  }
}

const postEmotion = async (emotion, cb) => {
try{
  const added = await emotion.save();
  cb(null, added);
} catch(e) {
  cb(e, null)
}
}
// let emotion = new Emotion({
//   emotion: 'loved',
//   actions: [{
//     action: 'Call your Dad pass it back',
//     helpfulness: 0,
//     dateAdded: new Date(),
//     timeRequired: 0
//   },
//   {
//     action: 'Call your Mom and pass it back',
//     helpfulness: 0,
//     dateAdded: new Date(),
//     timeRequired: 0
//   },
//   {
//     action: 'Connect with and support your homies',
//     helpfulness: 0,
//     dateAdded: new Date(),
//     timeRequired: 1
//   },
//   {
//     action: 'Do something special for your SO',
//     helpfulness: 0,
//     dateAdded: new Date(),
//     timeRequired: 1
//   }
//   ],
//   thoughts: [{
//     thought: 'examining what brought this feeling on',
//     helpfullness: 0,
//     dateAdded: new Date(),
//     timeRequired: 1
//   },
//   {
//     thought: 'being grateful for this feeling',
//     helpfullness: 0,
//     dateAdded: new Date(),
//     timeRequired: 0
//   },
// ]

// })

// postEmotion(emotion, (err, result) => {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log(result)
//   }
// })


module.exports = {
  getEmotion,
  insertThought,
  insertAction,
  postEmotion
}
// let emotion = new Emotion({
//   emotion: 'confident',
//   actions: [{
//     action: 'Get in the gym',
//     helpfulness: 0,
//     dateAdded: new Date(),
//     timeRequired: 1
//   },
//   {
//     action: 'Go satisfy your food craving',
//     helpfulness: 0,
//     dateAdded: new Date(),
//     timeRequired: 1
//   },
//   {
//     action: 'Connect with and support your homies',
//     helpfulness: 0,
//     dateAdded: new Date(),
//     timeRequired: 2
//   },
//   {
//     action: 'Schedule time to do you',
//     helpfulness: 0,
//     dateAdded: new Date(),
//     timeRequired: 2
//   }
//   ],
//   thoughts: [{
//     thought: 'think about any flanks that could exposed in overconfidence',
//     helpfullness: 0,
//     dateAdded: new Date(),
//     timeRequired: 0
//   },
//   {
//     thought: 'examine what brings about the kyrptonite',
//     helpfullness: 0,
//     dateAdded: new Date(),
//     timeRequired: 0
//   },
//   {
//     thought: 'congratulate yo-self for being a baller 🍞',
//     helpfullness: 0,
//     dateAdded: new Date(),
//     timeRequired: 0
//   }
// ]

// })
// let emotion = new Emotion({
//   emotion: 'sad',
//   actions: [{
//     action: 'Get in the gym',
//     helpfulness: 0,
//     dateAdded: new Date(),
//     timeRequired: 1
//   },
//   {
//     action: 'Go satisfy your food craving',
//     helpfulness: 0,
//     dateAdded: new Date(),
//     timeRequired: 1
//   },
//   {
//     action: 'Treat yo-self with Ben & Jerries cherry garcia and brownie batter icecream',
//     helpfulness: 0,
//     dateAdded: new Date(),
//     timeRequired: 1
//   },
//   {
//     action: 'Schedule hot yoga',
//     helpfulness: 0,
//     dateAdded: new Date(),
//     timeRequired: 2
//   },
//   {
//     action: 'Take a 20 min nap',
//     helpfulness: 0,
//     dateAdded: new Date(),
//     timeRequired: 0
//   }
//   ],
//   thoughts: [{
//     thought: 'ponder the saying time heals all wounds without the need to fix it now',
//     helpfullness: 0,
//     dateAdded: new Date(),
//     timeRequired: 0
//   },
//   {
//     thought: 'think about how much of a legend you really are',
//     helpfullness: 0,
//     dateAdded: new Date(),
//     timeRequired: 0
//   },
// ]

// })
// let emotion = new Emotion({
//   emotion: 'tired',
//   actions: [{
//     action: 'Place a water pitcher/glass next to you',
//     helpfulness: 0,
//     dateAdded: new Date(),
//     timeRequired: 0
//   },
//   {
//     action: 'Commit to a bedtime tonight',
//     helpfulness: 0,
//     dateAdded: new Date(),
//     timeRequired: 0
//   },
//   {
//     action: 'Do exercise, but not too much',
//     helpfulness: 0,
//     dateAdded: new Date(),
//     timeRequired: 1
//   },
//   {
//     action: 'Brew some coffee or tea',
//     helpfulness: 0,
//     dateAdded: new Date(),
//     timeRequired: 0
//   },
//   {
//     action: 'Take a 20 min nap',
//     helpfulness: 0,
//     dateAdded: new Date(),
//     timeRequired: 0
//   }
//   ],
//   thoughts: [{
//     thought: 'extract lessons from a time you weren\'t tired',
//     helpfullness: 0,
//     dateAdded: new Date(),
//     timeRequired: 0
//   },
//   {
//     thought: 'think about how much of a legend you really are',
//     helpfullness: 0,
//     dateAdded: new Date(),
//     timeRequired: 0
//   },
// ]

// })
// let emotion = new Emotion({
//   emotion: 'insecure',
//   actions: [{
//     action: 'Schedule some time get grounded',
//     helpfulness: 0,
//     dateAdded: new Date(),
//     timeRequired: 0
//   },
//   {
//     action: 'Avoid people you feel insecure around',
//     helpfulness: 0,
//     dateAdded: new Date(),
//     timeRequired: 1
//   },
//   {
//     action: 'Volunteer somewhere',
//     helpfulness: 0,
//     dateAdded: new Date(),
//     timeRequired: 2
//   },
//   {
//     action: 'Go for a run',
//     helpfulness: 0,
//     dateAdded: new Date(),
//     timeRequired: 1
//   },
//   {
//     action: 'Create a self esteem file',
//     helpfulness: 0,
//     dateAdded: new Date(),
//     timeRequired: 1
//   }
//   ],
//   thoughts: [{
//     thought: 'journal about possible reasons why',
//     helpfullness: 0,
//     dateAdded: new Date(),
//     timeRequired: 1
//   },
//   {
//     thought: 'remember how really really good looking you are',
//     helpfullness: 0,
//     dateAdded: new Date(),
//     timeRequired: 0
//   },
// ]

// })

// let emotion = new Emotion({
//   emotion: 'angry',
//   actions: [{
//     action: 'Set a timer for 3 min of deep breathing',
//     helpfulness: 0,
//     dateAdded: new Date(),
//     timeRequired: 0
//   },
//   {
//     action: 'Splash some cold water on your face',
//     helpfulness: 0,
//     dateAdded: new Date(),
//     timeRequired: 0
//   }
//   ],
//   thoughts: [{
//     thought: 'set aside a time to lift some weights',
//     helpfullness: 0,
//     dateAdded: new Date(),
//     timeRequired: 0
//   }]

// })
// let emotion = new Emotion({
//   emotion: 'anxious',
//   actions: [{
//     action: 'Set a timer for 3 min of deep breathing',
//     helpfulness: 0,
//     dateAdded: new Date(),
//     timeRequired: 0
//   },
//   {
//     action: 'Splash some cold water on your face',
//     helpfulness: 0,
//     dateAdded: new Date(),
//     timeRequired: 0
//   },
//   {
//     action: 'Schedule time for a run',
//     helpfulness: 0,
//     dateAdded: new Date(),
//     timeRequired: 2
//   },
//   {
//     action: 'Go for a run',
//     helpfulness: 0,
//     dateAdded: new Date(),
//     timeRequired: 1
//   }
//   ],
//   thoughts: [{
//     thought: 'abstract the big problem into manegeable smaller ones',
//     helpfullness: 0,
//     dateAdded: new Date(),
//     timeRequired: 0
//   },
//   {
//     thought: 'visualize punting life like an NFL kicker',
//     helpfullness: 0,
//     dateAdded: new Date(),
//     timeRequired: 0
//   }
// ]

// })
// let emotion = new Emotion({
//   emotion: 'lonely',
//   actions: [{
//     action: 'Go for a walk into nature',
//     helpfulness: 0,
//     dateAdded: new Date(),
//     timeRequired: 0
//   },
//   {
//     action: 'Join a club',
//     helpfulness: 0,
//     dateAdded: new Date(),
//     timeRequired: 2
//   },
//   {
//     action: 'Volunteer somewhere',
//     helpfulness: 0,
//     dateAdded: new Date(),
//     timeRequired: 2
//   },
//   {
//     action: 'Go for a run',
//     helpfulness: 0,
//     dateAdded: new Date(),
//     timeRequired: 1
//   }
//   ],
//   thoughts: [{
//     thought: 'think about getting a dog',
//     helpfullness: 0,
//     dateAdded: new Date(),
//     timeRequired: 0
//   },
//   {
//     thought: 'ponder lonliness as being disconnected from "yourselfness"',
//     helpfullness: 0,
//     dateAdded: new Date(),
//     timeRequired: 1
//   }
// ]

// })