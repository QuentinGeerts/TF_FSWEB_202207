const express = require('express')
const homeRouter = require('./routes/home-router')

// Création du serveur web
const app = express()

// Middleware applicatif
const monSuperMiddlewareQuiFaitDesLogs = (req, res, next) => {
  console.log(`Nouvelle requête : ${req.url}`)
  next()
}

app.use(monSuperMiddlewareQuiFaitDesLogs)

app.use(homeRouter)

const monSuperGestionnaireDErreursEnMiddleware = (err, req, res, next) => {
  console.log(err)
  res.sendStatus(500)
}

app.use(monSuperGestionnaireDErreursEnMiddleware)

app.listen(8080, () => console.log('Server up on port 8080'))