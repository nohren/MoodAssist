// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const db = require('../../db/dbIndex')

//http://localhost:3000/api/backend
export default (req, res) => {

  if (req.method === 'GET') {
    console.log(req.query)
    res.status(200).send(req.query)

  } else if (req.method === 'POST') {

  }
}
