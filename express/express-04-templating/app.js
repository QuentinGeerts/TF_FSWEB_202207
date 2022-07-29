const express = require('express')
const homeRouter = require('./routes/home-router')
const path = require('path')


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

// Ajout des routers
app.use(homeRouter)

app.listen(port, () => console.log('Server up on port ' + port))