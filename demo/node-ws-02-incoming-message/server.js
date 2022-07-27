// Pour éviter de devoir couper et relancer le serveur
// manuellement après chaque test. On va utiliser le package
// "nodemon" qui relance le serveur après chaque modification.
// => npm install --save-dev nodemon

const http = require('http')

// Création d'un web server en NodeJS
const server = http.createServer((req, res) => {

  // Request => IncomingMessage
  // Response => ServerResponse

  // Analyse de l'IncomingMessage "req"
  console.log(`(${req.method}) "${req.url}"`)

  // Exemple de réponse au format HTML
  const page = `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>Démo WebServer</title>
    </head>

    <body>
      <h1>Hello les développeurs 😊</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sapien sapien, euismod in purus sed, dictum posuere dolor. Praesent justo elit, fringilla ac volutpat quis, luctus ac neque. Etiam eget nisi in mi mattis pulvinar non tincidunt lacus. Nunc dignissim purus at elit volutpat bibendum. Nam vitae urna ac magna malesuada sagittis.</p>
    </body>
  </html>  
  `

  res.writeHead(200, {
    "Content-Type": "text/html",
    "Content-Length": Buffer.byteLength(page)
  })

  res.write(page)
  res.end()

})

const PORT = 8081
server.listen(PORT, () => console.log(`Start web server on http://127.0.0.1:${PORT} !`))