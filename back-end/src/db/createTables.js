const sqlite3 = require('sqlite3').verbose()
const db =  new sqlite3.Database('database.db')

const createUserTable = `
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL,
    email TEXT NOT NULL,
    password TEXT NOT NULL
  )
`

const createScheduleTable = `
  CREATE TABLE IF NOT EXISTS schedules (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    message TEXT,
    phone TEXT,
    createDate TEXT,
    scheduleDate TEXT
  )
`

db.serialize(() => {
  db.run(createUserTable , err => {
    if (err) {
      console.log('Erro ao criar tabela usuário: ', err.message)
    } else {
      console.log('Tabela de usuários criada')
    }
  })

  db.run(createScheduleTable, err => {
    if (err) {
      console.log('Erro ao criar tabela agendamento: ', err.message)
    } else {
      console.log('Tabela de agendamentos criada')
    }
  })
})

db.close(err => {
  if (err) {
    console.log('Erro ao fechar conexão do banco: ', err.message)
  } else {
    console.log('Conexão fechada')
  }
})