const express = require('express')
const cors = require('cors')
const app = express()

const {json} = require('body-parser')
app.use(json())
app.use(cors())

let database = []

app.get('/', (req, res) => {
  res.json({status: 'ok'})
})

app.get('/todo', (req, res) => {
  res.json(database)
})

app.get('/todo/:id', (req, res) => {
  if (database[req.params.id])
    return res.json(database[req.params.id])
  res.status(404)
  res.json({})
})

app.post('/todo', (req, res) => {
  database.push(req.body)
  res.json(req.body)
})

app.delete('/todo/:id', (req, res) => {
  delete database[req.params.id]
  res.json({status: 'ok'})
})

app.listen(9090, noop => console.log('-- listening http://127.0.0.1:9090'))
