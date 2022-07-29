const http = require('http')

// Création d'un web server en NodeJS
const server = http.createServer((request, response) => {

  // Request => IncomingMessage
  // Response => ServerResponse

  console.log('request :>> ', request)

  // Définit le header de la réponse
  response.writeHead(201, { "Content-Type": "text/html" })

  // Permet de définir le contenu de la réponse
  response.write("Hello world !")

  // Permet d'envoyer la réponse au navigateur
  response.end()
  // response.end("<h1>Hello les fs web !</h1>")

})

const PORT = 8081
server.listen(PORT, () => console.log(`Start web server on http://127.0.0.1:${PORT} !`))