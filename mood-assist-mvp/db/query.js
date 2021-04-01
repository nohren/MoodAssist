const Emotion = require('./emotionSchema')


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

  const added = await emotion.save();
  cb(added);

}
let emotion = new Emotion({
  emotion: 'happy',
  actions: [{
    action: 'Run your favorite trail',
    helpfulness: 0,
    dateAdded: new Date(),
    timeRequired: 1
  },
  {
    action: 'Hot Bath, bath bombs and an audiobook',
    helpfulness: 0,
    dateAdded: new Date(),
    timeRequired: 2
  }
  ],
  thoughts: [{
    thought: 'thinking and feeling gratitude',
    helpfullness: 0,
    dateAdded: new Date(),
    timeRequired: 0
  }]

})


module.exports = {
  getEmotion,
  insertThought,
  insertAction,
  postEmotion
}
