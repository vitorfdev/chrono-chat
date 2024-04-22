const sqlite3 = require('sqlite3').verbose()

function connectDatabase() {
  return new sqlite3.Database('database.db')
}

const User = {
  create: function(username, email, password, callback) {
    const db = connectDatabase()
    const sql = `INSERT INTO users (username, email, password) VALUES (?, ?, ?)`
    db.run(sql, [username, email, password], function(err) {
      if (err) {
        console.log('Erro ao criar usuário', err.message)
        return callback(err)
      }
      console.log('Usuário criado', this.lastID)
      return callback(null, this.lastID)
    })
    db.close()
  },
  search: function(callback) {
    const db = connectDatabase()
    const sql = `SELECT * FROM users`
    db.all(sql, [], (err, rows) => {
      if (err) {
        console.log('Erro ao procurar usuários', err.message)
      }
      console.log('Usuários encontrados', rows)
      return callback(null, rows)
    })
    db.close()
  },
  findByEmail: function(email, callback) {
    const db = connectDatabase();
    const sql = `SELECT * FROM users WHERE email = ?`;
    db.get(sql, [email], (err, row) => {
      if (err) {
        console.log('Erro ao procurar usuário por email', err.message);
        return callback(err, null);
      }
      console.log('Usuário encontrado por email', row);
      db.close(); // Fechar o banco de dados após a consulta
      return callback(null, row);
    });
  },
  update: function(id, username, email, password, callback) {
    const db = connectDatabase()
    const sql = `UPDATE users SET username = ?, email = ?, password = ? WHERE id = ?`
    db.run(sql, [username, email, password, id], function(err) {
      if (err) {
        console.log('Erro ao atualizar usuário', err.message)
        return callback(err)  
      }
      console.log('Usuário atualizado', id)
      callback(null)
    })
    db.close()
  },
  delete: function(id, callback) {
    const db = connectDatabase()
    const sql = `DELETE FROM users WHERE id = ?`
    db.run(sql, [id], function(err) {
      if (err) {
        console.log('Erro ao excluir usuário', err.message)
        return callback(err)
      }
      console.log('Usuário excluido', id)
      callback(null)
    })
    db.close()
  }
}

module.exports = User