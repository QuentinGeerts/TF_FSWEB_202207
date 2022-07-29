const express = require('express')
const homeRouter = require('./routes/home-router')
const messageRouter = require('./routes/message-router')

// Configuration des variables
const PORT = 8080

// Génération du server web
const app = express()

// Configuration du moteur de vue
app.set('view engine', 'ejs')
app.set('views', './views')

// Ajout des dossiers statiques
app.use(express.static('public'))

// Ajout du middleware pour les données 'application/x-www-form-urlencoded'
app.use(express.urlencoded({ extended: true }))

// Ajout du système de router
app.use(homeRouter)
app.use(messageRouter)

// Erreur 404 custom (après les routes !!!)
app.use((req, res) => {
  res.status(404).send('Perdu ? :o')
})

app.listen(PORT, () => console.log(`Server up on port ${PORT}`))