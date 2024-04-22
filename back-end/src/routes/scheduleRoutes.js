const express = require('express')
const Schedule = require('../models/schedule')

const router = express.Router()

router.get('/schedules', (req, res) => {
  Schedule.search((err, schedules) => {
    if (err) {
      return res.status(500).json({ error: err.message })
    }
    res.json(schedules)
  })
})

router.post('/schedules', (req, res) => {
  const { message, phone, createDate, scheduleDate } = req.body
  Schedule.create(
    message,
    phone,
    createDate,
    scheduleDate,
    (err, scheduleId) => {
      if (err) {
        return res.status(500).json({ error: err.message })
      }
      res.status(201).json({ id: scheduleId, message: 'Agendamento criado' })
    }
  )
})

router.put('/schedules/:id', (req, res) => {
  const scheduleId = req.params.id
  const { message, phone, createDate, scheduleDate } = req.body
  Schedule.update(
    scheduleId,
    message,
    phone,
    createDate,
    scheduleDate,
    (err) => {
      if (err) {
        return res.status(500).json({ error: err.message })
      }
      res.json({ message: 'Agendamento atualizado' })
    }
  )
})

router.delete('/schedules/:id', (req, res) => {
  const scheduleId = req.params.id
  Schedule.delete(scheduleId, (err) => {
    if (err) {
      return res.status(500).json({ error: err.message })
    }
    res.json({ message: 'Agendamento excluído' })
  })
})

module.exports = router
