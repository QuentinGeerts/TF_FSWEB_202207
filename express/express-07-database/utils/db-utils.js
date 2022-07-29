const mysql = require('promise-mysql')

const createConnection = async () => {
  return await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'demo_express'
  })
}

module.exports = { createConnection }