const express = require('express')
const User = require('../models/user')

const router = express.Router()

router.get('/users', (req, res) => {
  User.search((err, users) => {
    if (err) {
      return res.status(500).json({ error: err.message })
    }
    res.json(users)
  })
})

router.post('/users', (req, res) => {
  const { username, email, password } = req.body
  User.create(username, email, password, (err, userId) => {
    if (err) {
      return res.status(500).json({ error: err.message })
    }
    res.status(201).json({ id: userId, message: 'Usuário criado' })
  })
})

router.put('/users/:id', (req, res) => {
  const userId = req.params.id
  const { username, email, password } = req.body
  User.update(userId, username, email, password, (err) => {
    if (err) {
      return res.status(500).json({ error: err.message })
    }
    res.json({ message: 'Usuário atualizado' })
  })
})

router.delete('/users/:id', (req, res) => {
  const userId = req.params.id
  User.delete(userId, (err) => {
    if (err) {
      return res.status(500).json({ error: err.message })
    }
    res.json({ message: 'Usuário excluído' })
  })
})

module.exports = router