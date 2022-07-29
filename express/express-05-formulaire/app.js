const express = require('express')
const homeRouter = require('./routes/home-router')
const path = require('path')
const logger = require('./middlewares/logger-middleware')


// Variable de config
const port = 8080
const rootDir = process.cwd()

// Créer le server web
const app = express()

// Configuration du moteur de vue
// - Express va utiliser le moteur de vue automatiquement
app.set('view engine', 'ejs')

// - Configuration du répertoire dans lequel sont les vues
app.set('views', path.resolve(rootDir, 'views'))

// Ajout d'un middleware
app.use(logger())

// Ajout d'un middleware pour gérer les requête "x-www-form-urlencoded"
// Encodée sous la forme de clef / valeur
// NB: Anciennement, il était nécessaire d'installer 'body-parser'
app.use(express.urlencoded({ extended: true }))
// ↑ Ceci ajout l'objet 'body' dans l'objet 'req

// Ajout des routers
app.use(homeRouter)

app.listen(port, () => console.log('Server up on port ' + port))