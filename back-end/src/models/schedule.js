const sqlite3 = require("sqlite3").verbose()

function connectDatabase() {
  return new sqlite3.Database("database.db")
}

const Schedule = {
  create: function (message, phone, createDate, scheduleDate, callback) {
    const db = connectDatabase()
    const sql = `INSERT INTO schedules (message, phone, createDate, scheduleDate) VALUES (?, ?, ?, ?)`
    db.run(sql, [message, phone, createDate, scheduleDate], function (err) {
      if (err) {
        console.log("Erro ao criar agendamento", err.message)
        return callback(err)
      }
      console.log("Agendamento criado", this.lastID)
      return callback(null, this.lastID)
    })
    db.close()
  },
  search: function (callback) {
    const db = connectDatabase()
    const sql = `SELECT * FROM schedules`
    db.all(sql, [], (err, rows) => {
      if (err) {
        console.log("Erro ao procurar agendamentos", err.message)
      }
      console.log("Agendamentos encontrados", rows)
      return callback(null, rows)
    })
    db.close()
  },
  update: function (id, message, phone, createDate, scheduleDate, callback) {
    const db = connectDatabase()
    const sql = `UPDATE schedules SET message = ?, phone = ?, createDate = ?, scheduleDate = ? WHERE id = ?`
    db.run(sql, [message, phone, createDate, scheduleDate, id], function (err) {
      if (err) {
        console.log("Erro ao atualizar agendamento", err.message)
        return callback(err)
      }
      console.log("Agendamento atualizado", id)
      callback(null)
    })
    db.close()
  },
  delete: function (id, callback) {
    const db = connectDatabase()
    const sql = `DELETE FROM schedules WHERE id = ?`
    db.run(sql, [id], function (err) {
      if (err) {
        console.log("Erro ao excluir agendamento", err.message)
        return callback(err)
      }
      console.log("Agendamento excluido", id)
      callback(null)
    })
    db.close()
  },
}

module.exports = Schedule
