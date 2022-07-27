const http = require('http')
const fs = require('fs')
const url = require('url')

const { parse } = require('querystring')

const requestListener = (req, res) => {

  console.log(`(${req.method}) "${req.url}"`)

  if (req.method === "POST") {

    let body = ""
    req.on('data', form => { body += form.toString() })
    req.on('end', () => {
      console.log(parse(body))
      res.writeHead(204)
      res.end()
    })

  }
  else {
    // Exemple de réponse au format HTML
    const page = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Démo WebServer</title>
      </head>

      <body>
        <form action="/" method="POST">
          <input type="text" name="firstname" />
          <input type="text" name="lastname" />
          <input type="submit" value"Envoyer" />
        </form>
      </body>
    </html>  
    `

    res.writeHead(200, {
      "Content-Type": "text/html",
      "Content-Length": Buffer.byteLength(page)
    })
    res.end(page)
  }

}

const server = http.createServer()
server.on('request', requestListener)
const PORT = 8081
server.listen(PORT, () => console.log(`Start web server on http://127.0.0.1:${PORT} !`))