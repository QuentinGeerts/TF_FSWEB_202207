const mysql = require('promise-mysql')

const createConnect = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'exo_05_mysql'
})

async function initializeConnection () {
  return await createConnect.then((connect) => connect)
}

let connection = initializeConnection()


module.exports = { createConnect, connection }