// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// const db = require('../../db/dbIndex')
const query = require('../../db/query')

//cors and possibly shortened url?

//http://localhost:3000/api/backsend
export default (req, res) => {

  if (req.method === 'GET') {
    //{ emotion: 'sad', timeRequired: '0' }
    query.getEmotion(req.query.emotion, (err, result) => {
      if (err) {
        res.status(500).send(err)
        return 
      } else {
        res.status(200).send(result)
      }
    })
  } else if (req.method === 'POST') {
    //how do I know whether to do insertThought or insertAction?
    //{ emotion: 'sad', timeRequired: 1, phrase: 'asgg' }
    //query string { kind: 'thought' } { kind: 'action' }
    // console.log(req.body)
    // console.log(req.query)
    if (req.query.kind === 'thought') {
      //handle thought insert to db for emotion
      //build obj
      var thought = {
        thought: req.body.phrase,
        helpfulness: 0,
        dateAdded: new Date(),
        timeRequired: req.body.timeRequired
      }
      query.insertThought(req.body.emotion, thought, (err, response) => {
        if (err) {
          res.status(501).send(err);
        } else {
          res.status(201).send(response);
        }
      })
    } else if (req.query.kind === 'action') {
      //handle action insert to db for emotion
      var action = {
        action: req.body.phrase,
        helpfulness: 0,
        dateAdded: new Date(),
        timeRequired: req.body.timeRequired
      }
      query.insertAction(req.body.emotion, action, (err, response) => {
        if (err) {
          res.status(501).send(err);
        } else {
          res.status(201).send(response);
        }
      })
    }
  }
}
