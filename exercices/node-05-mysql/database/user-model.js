const { connection, createConnect } = require('./db')

// Utilisation des promesses

const userModel = {

  get: () => {
    const sql = `SELECT * FROM user ORDER BY user_id`
    return createConnect
      .then((connect) => connect.query(sql))
      .catch(err => {
        console.log('err :>> ', err.sqlMessage)
        return []
      })
  },

  getByUserId: (userId) => {
    const sql = `SELECT * FROM user WHERE user_id = ?`
    return createConnect
      .then((connect) => connect.query(sql, [userId]))
      .catch(err => {
        console.log('err :>> ', err.sqlMessage)
        return []
      })
  },

  insert: (pseudo) => {
    const sql = `INSERT INTO user (pseudo) VALUES (?)`
    return createConnect
      .then((connect) => connect.query(sql, [pseudo]))
      .catch(err => err.errno)
  },

  update: (userId, pseudo) => {
    const sql = `UPDATE user SET pseudo = ? WHERE user_id = ?`
    return createConnect
      .then((connect) => connect.query(sql, [pseudo, userId]))
      .catch(err => console.log('err :>> ', err.sqlMessage))
  }

}

module.exports = userModel