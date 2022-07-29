const http = require('http')
const url = require('url')

const routes = require('./config/routes')
const loadStaticFile = require('./modules/load-static-file')


const requestListener = (request, response) => {

  const currentRoute = url.parse(request.url, true).pathname

  console.log(`(${request.method}) "${currentRoute}"`);

  // Gestion de routes
  if (currentRoute in routes) {
    return routes[currentRoute](request, response)
  }

  // Gestion des fichiers static => "./public"
  if (request.url.length > 7 && request.url.includes('/public')) {
    return loadStaticFile(request.url, response)
  }

  if (request.url === "/favicon.ico") {
    return loadStaticFile('/public/favicon.ico', response)
  }

  // Erreur 404
  response.writeHead(404)
  response.end()
}

const server = http.createServer()
server.on('request', requestListener)
server.listen(8080, () => {
  console.log("Server is running on http://127.0.0.1:8080")
})