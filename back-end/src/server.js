const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const userRoutes = require('./routes/userRoutes')
const scheduleRoutes = require('./routes/scheduleRoutes')
const loginRoute = require('./routes/login')

const app = express()
const PORT = process.env.PORT || 3000

// Middlewares
app.use(bodyParser.json())
app.use(cors())
app.use('/', userRoutes)
app.use('/', scheduleRoutes)
app.use('/', loginRoute)

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
})
