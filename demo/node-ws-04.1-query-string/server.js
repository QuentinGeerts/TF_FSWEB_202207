const http = require('http')
const fs = require('fs')
const url = require('url')

const server = http.createServer((req, res) => {

  // Analyse de l'IncomingMessage "req"
  console.log(`(${req.method}) "${req.url}"`)

  // Gérer la demande du "/favicon.ico"
  if (req.url === "/favicon.ico") {

    // console.log(__dirname)

    const icon = fs.readFileSync(__dirname + "/public/favicon.ico")
    // console.log('icon :>> ', icon);
    res.writeHead(200, { "Content-Type": "image/x-icon" })
    res.end(icon, "binary")
    return
  }

  // const urlInfo = req.url
  const urlInfo = url.parse(req.url, true)
  console.log('urlInfo :>> ', urlInfo);

  const { host, pathname, search, query } = urlInfo

  // Exemple de réponse au format HTML
  const page = `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>Démo WebServer</title>
    </head>

    <body>
      <h1>Analyse de la requête</h1>
      <p>Host : ${host}</p>
      <p>Pathname : ${pathname}</p>
      <p>Search : ${search}</p>
      <p>Query :</p>
      <ul>
        <li>Prénom : ${query != null && query.prenom}</li>
        <li>Nom : ${query != null && query.nom}</li>
      </ul>
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