const http = require('http')
const url = require('url')
const loadStaticFile = require('./modules/load-static-file')

const responseHtml = (res, content, code = 200) => {
  const page = `<!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8">
    <title>Document</title>
    <link rel="stylesheet" href="/public/styles.css
    ">
  </head>
  <body>
    ${content}
  </body>
  </html>`

  res.writeHead(code, {
    "Content-Type": "text/html",
    "Content-Length": Buffer.byteLength(page)
  })

  res.end(page)
}

const routes = {

  "/": (req, res) => {
    responseHtml(res, "<h1>Page d'accueil</h1>")
  },

  "/about": (req, res) => {
    responseHtml(res, "<h1>About</h1>")
  },

  "/product": (request, response) => {

    const dataGet = url.parse(request.url, true).query
    console.log('dataUrl :>> ', dataGet)

    let productPage

    if (dataGet && dataGet.id !== undefined) {
      productPage = `
      <h1>Détails d'un produit</h1>
      <h3>Produit ${dataGet.id}</h3>
      `
    }
    else {
      productPage = `
      <h1>Détails d'un produit</h1>
      <h3>Produit non trouvé</h3>
      `
    }

    responseHtml(response, productPage)

  }

}

const requestListener = (request, response) => {

  // IncomingMessage
  console.log(`(${request.method}) "${request.url}"`)

  // Mise en place du système de routing
  const urlInfo = url.parse(request.url, true)
  const target = urlInfo.pathname

  // Tester les routes qui ont été configurée
  if (target in routes) {
    return routes[target](request, response)
  }

  // Tester si la demande concerne un fichier public
  if (request.url.length > 7 && request.url.includes('/public')) {
    return loadStaticFile(request.url, response)
  }

  if (request.url === "/favicon.ico") {
    return loadStaticFile('/public/favicon.ico', response)
  }

  // Erreur de type 404
  responseHtml(response, "<h1>Page 404</h1><p>La page que vous essayez d'atteindre n'existe pas ou a été déplacée.</p>", 404)

}

const server = http.createServer()
server.on('request', requestListener)
server.listen(8080, () => {
  console.log('Server is running ont http://127.0.0.1:8080')
})
