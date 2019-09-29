const express = require('express')

const db = require('../db/db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getTopicList()
    // .then((topic) => console.log(topic))
    .then(topics => res.send(topics))
    .catch(() => res.status(500).send('Sorry, we have encountered a server error'))
})

router.get('/:id', (req, res) => {
  const id = (Number(req.params.id))
  db.getTopicById(id)
    .then(topicName => {
      res.json(topicName)
    })
})

router.get('list', (req, res) => {
  
})

module.exports = router
