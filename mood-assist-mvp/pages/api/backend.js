// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const db = require('../../db/dbIndex')
const query = require('../../db/query')

//http://localhost:3000/api/backend
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
    //query string
    console.log(req.body)
    console.log(req.query)
  }
}
