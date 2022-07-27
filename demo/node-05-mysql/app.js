// > npm install promise-mysql
const mysql = require('promise-mysql')

const createConnection = () => {
  return mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'demo_node'
  })
}

// Récupération de tous les élèves
const getAllStudents = () => {

  let connection

  createConnection()
    .then((connect) => {

      connection = connect

      const query = `SELECT * FROM student`

      return connection.query(query)
    })
    .then((students) => {
      console.log('students :>> ', students)

      console.log("\nListe des étudiants :")

      for (const student of students) {
        const { student_id, lastname, year_result, remark, firstname } = student
        console.log(` - ${student_id} ${firstname} ${lastname} ${year_result} - ${remark}`)
      }

    })
    .finally(() => connection.end())

}

// getAllStudents()

// Récupération les étudiants ayant pour nom xxx
const getStudentsByLastname = (lastname) => {

  let connection
  createConnection()
    .then((connect) => {
      connection = connect

      // const sql = `
      // SELECT * 
      // FROM student 
      // WHERE lastname LIKE ${mysql.escape(lastname)}
      // `
      const sql = `
      SELECT * 
      FROM student 
      WHERE lastname LIKE ?
      `
      // Toujours échapper les paramètres
      // Ne jamais faire de concaténation (Fail SQL) !!
      return connection.query(sql, [lastname])

    })
    .then((students) => {
      console.log("\nListe des étudiants :")

      for (const student of students) {
        const { student_id, lastname, year_result, remark, firstname } = student
        console.log(` - ${student_id} ${firstname} ${lastname} ${year_result} - ${remark}`)
      }
    })
    .finally(() => connection.end())

}

// getStudentsByLastname("Duck")

// Ajout d'un étudiant
const createStudent = (student) => {

  const { firstname, lastname, yearResult, remark } = student

  let connection

  createConnection()
    .then((connect) => {
      connection = connect

      const sql = `
      INSERT INTO student (firstname, lastname, year_result, remark)
      VALUES
        (?, ?, ?, ?)`

      return connection.query(sql, [firstname, lastname, yearResult, remark])

    })
    .then((data) => {
      // console.log('data :>> ', data)
      console.log(`Ajout réussi, l'id du nouvel étudiant est ${data.insertedId}`)
    })
    .catch((err) => {
      console.log('err :>> ', err.sqlMessage)
    })
    .finally(() => connection.end())

}

// Ajout OK
// createStudent({ firstname: 'Quentin', lastname: 'Geerts', yearResult: 15, remark: 'hello world !' })

// Ajout KO
// createStudent({ firstname: null, lastname: 'Geerts', yearResult: 15, remark: 'hello world !' })

const updateStudent = (studentId, student) => {

  const { firstname, lastname, yearResult, remark } = student

  let connection

  createConnection()
    .then((connect) => {
      connection = connect

      const queryUpdate = `
      UPDATE student
      SET
        firstname = ?
        , lastname = ?
        , year_result = ?
        , remark = ?
      WHERE student_id = ?
      `

      return connection.query(queryUpdate, [
        firstname,
        lastname,
        yearResult,
        remark,
        studentId
      ])
    })
    .then((data) => {

      if (data.changedRows !== 0) console.log("Changements effectués")
      else console.log("Aucun changement effectué")

      console.log('data :>> ', data)
    })
    .catch((err) => console.log("Erreur : ", err.sqlMessage))
    .finally(() => connection.end())

}

// updateStudent(9, {
//   firstname: 'William',
//   lastname: 'Geerts',
//   yearResult: 12,
//   remark: 'Bavardages intempestifs !'
// })

// Suppression d'un élève sur base de son id

const deleteStudent = (studentId) => {
  let connection

  createConnection()
    .then((connect) => {
      connection = connect

      const queryDelete = `
      DELETE FROM student
      WHERE student_id = ?
      `

      return connection.query(queryDelete, [studentId])
    })
    .then((data) => {
      console.log('data :>> ', data)

      if (data.affectedRows !== 0) console.log("Élève supprimé")
      else console.log("Aucun élève supprimé")

    })
    .finally(() => connection.end())
}

// deleteStudent(9)

// Récupération des élèves avec un résultat annuel inférieur à 10
const demoAsyncAwait = async () => {

  let connection

  try {
    connection = await createConnection()

    const students = await connection.query('SELECT * FROM student WHERE year_result < 10')
    console.log('students :>> ', students);

  } catch (error) {
    console.log("Erreur : ", error.sqlMessage);
  }
  finally {
    connection.end()
  }

}

demoAsyncAwait()