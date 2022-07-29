// const express = require('express')
// const studentRouter = express.Router()

const studentRouter = require('express').Router()

studentRouter.use(express.urlencoded())

// Définition de route sur l'objet "router"
studentRouter.get('/student', (req, res) => {
  res.send(`<h1>Zone student</h1>`)
})

studentRouter.get('/student/:studentId([0-9]+)', (req, res) => {
  res.send(`<h1>Info du student : ${req.params.studentId}</h1>`)
})

// Définition de route avec plusieurs réaction en fonction du verb html
studentRouter.route('/student/formulaire')
  .get((req, res) => {
    res.send(`<h1>Zone d'info des students</h1>
    <form method="post">
      <input type="text" name="studentName">
      <button type="submit">Envoyer</button>
    </form>`)
  })
  .post((req, res) => {
    console.log(req.body);
    res.send(`<h1>Merci de nous avoir contacté ${req.body.studentName}`)
  })
  
// Exportation du module Router
module.exports = studentRouter