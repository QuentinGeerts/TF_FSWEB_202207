const mysql = require('promise-mysql')

const createConnection = () => {
  return mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'demo_node'
  })
}

module.exports.getAll = (callback) => {

  let connection

  createConnection()
    .then((connect) => {
      // Sauvegarde de la connexion dans la variable
      connection = connect

      const sql = `SELECT * FROM student`

      return connection.query(sql)
    })
    .then((students) => { callback(students) })
    .then(() => connection.end())

}

module.exports.add = ({ firstname, lastname, year_result, remark }) => {
  let connection

  createConnection()
    .then((connect) => {
      connection = connect
      const sql = `INSERT INTO student (firstname, lastname, year_result, remark)
        VALUES (?, ?, ?, ?)`

      return connection.query(sql, [firstname, lastname, year_result, remark])
    })
    .then(() => {
      connection.end()
    })
}