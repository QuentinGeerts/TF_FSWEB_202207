const express = require('express')

// Créer le serveur
const app = express()

app.get('/', (request, response) => {
  response.send('<h1>Hello here !</h1>')
})

app.listen(8080, () => {
  console.log('Server up on port 8080')
})