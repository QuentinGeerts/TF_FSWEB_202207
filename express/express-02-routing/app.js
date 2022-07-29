const express = require('express')

const profRouter = require('./routes/prof-router')
const studentRouter = require('./routes/student-router')

// Création du serveur
const app = express()

// Ajout du système de routage
app.get('/', (request, response) => {
  // ↑ Route sur le '/'

  // Envoi d'une réponse au client
  response.status(202).send('<h1>Hello les full stack Web ! 😁</h1>')
})

app.get('/products?demo', (req, res) => {
  // ↑ Le caractère 's' de product est optionnel
  // '/productdemo' ou '/productsdemo'
  res.status(200).send(`<h1>Route '/productdemo' ou '/productsdemo'</h1>`)
})

app.get(['/riri', '/fifi'], (req, res) => {
  // ↑ Ensemble de routes possible (Exemple pratique : '/' et '/home')
  res.status(200).send(`<h1>Route '/riri' ou '/fifi'</h1>`)
})

app.get('/personnage/:firstname/:lastname', (req, res) => {
  // ↑ Route avec paramètres => Ceux-ci sont injectés dans un objet 'params'
  console.log('req.params :>> ', req.params)

  // ↓ Extraction des paramètres via le destructuring
  const { firstname, lastname } = req.params
  res.send(`<h1>Bonjour ${firstname} ${lastname}</h1>`)
})

app.get('/product/:id([0-9]+)/details', (req, res) => {
  // ↓ Récupération de données au format 'string'
  //   Nécessite un parse pour le manipuler au format 'number'
  const id = parseInt(req.params.id)
  // const id = req.params.id
  // console.log(typeof id)
  res.send(`<h1>Détails du produit ${id}</h1>`)
})

// Ajout du système de routage via l'objet Router
app.use(studentRouter)
app.use(profRouter)

app.listen(8080, () => console.log('Server up on port 8080'))