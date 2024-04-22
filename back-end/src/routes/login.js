const express = require('express')
const jwt = require('jsonwebtoken')
const User = require('../models/user')

const router = express.Router()

router.post('/login', async (req, res) => {
  const { email, password } = req.body

  // Valida se credenciais foram fornecidas
  if (!email || !password) {
    return res.status(400).json({ error: 'Email e senha são obrigatórios' })
  }

  try {
    // Busca o usuário pelo email
    User.findByEmail(email, async (err, user) => {
      if (err) {
        console.error('Erro ao buscar usuário:', err.message)
        return res.status(500).json({ error: 'Erro ao buscar usuário' })
      }

      if (!user) {
        return res.status(404).json({ error: 'Usuário não encontrado' })
      }

      // Verifica se a senha está correta
      const passwordMatch = password.toString() == user.password.toString()
      if (!passwordMatch) {
        return res.status(400).json({ error: 'Senha incorreta' })
      }

      // Gera token e retorna
      const token = jwt.sign({ userId: user.id }, '3mD8pIEGCqKf', {
        expiresIn: '1h',
      })
      res.json({ token })
    })
  } catch (error) {
    console.error('Erro ao fazer login:', error.message)
    res.status(500).json({
      error: 'Erro ao fazer login. Por favor, tente novamente mais tarde',
    })
  }
})

module.exports = router
