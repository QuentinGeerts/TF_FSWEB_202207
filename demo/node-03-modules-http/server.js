// Import du module "http"
const http = require('http')

// Création d'un serveur via le module 'http'
const server = http.createServer((request, response) => {

  // Récupération de l'adresse URL
  console.log('request.url :>> ', request.url);

  // Envoyer une réponse (basique, sans routing)
  // - Ecrit le HEAD
  response.writeHead(200, { 'Content-Type': 'text/plain' })

  // - Envoyer du contenu
  response.write('Hello')
  response.write('World !')

  // Envoyer la réponse
  response.end('Hello les FS Web ! :)')

})

const port = 8080

server.listen(port, () => { console.log(`Le serveur écoute le port ${port}`) })