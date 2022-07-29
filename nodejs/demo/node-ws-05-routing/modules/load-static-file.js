const fs = require('fs')
const path = require('path')

const getContentType = (filename) => {

  const extname = path.extname(filename)

  let contentType

  switch (extname) {

    case '.html':
      contentType = "text/html"
      break

    case '.js':
      contentType = "text/javascript"
      break

    case '.css':
      contentType = "text/css"
      break

    case '.png':
      contentType = "image/png"
      break

    case '.jpg':
      contentType = "image/jpg"
      break

    case '.ico':
      contentType = "image/x-icon"
      break

    case '.json':
      contentType = "application/json"
      break

    default:
      contentType = "text/plain"
      break
  }

  return contentType

}

const loadStaticFile = (targetFile, response) => {

  const origin = process.cwd()
  const filePath = origin + targetFile

  if (fs.existsSync(filePath)) {

    try {
      // Charger le fichier
      const data = fs.readFileSync(filePath)

      // Quel est le type du fichier => Content-Type
      const contentType = getContentType(filePath)

      // Envoyer le fichier
      response.writeHead(200, { "Content-Type": contentType })
      response.end(data, "utf-8")

    } catch (error) {
      response.writeHead(500)
      response.end(`Internal error ${error.code}. Please check with the admin`)
    }

  }
  else {
    response.writeHead(404)
    response.end()
  }

}

module.exports = loadStaticFile