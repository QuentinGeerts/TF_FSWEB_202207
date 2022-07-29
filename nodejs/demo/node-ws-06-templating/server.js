const http = require('http')
const url = require('url')
const fs = require('fs')
const moment = require('moment')
const ejs = require('ejs')

const renderPage = (response, pageName, data = {}) => {
  const page = fs.readFileSync(`${__dirname}/views/page/${pageName}.ejs`, "utf-8")
  const pageRender = ejs.render(page, data)

  response.writeHead(200, {
    "Content-Type": "text/html",
    "Content-Length": Buffer.byteLength(pageRender)
  })

  response.end(pageRender)
}

const requestListener = (request, response) => {

  const target = url.parse(request.url, true).pathname

  if (target === '/') {
    renderPage(response, "index", {
      dateDuJour: `${moment().format('DD/MM/YYYY')}`
    })
  }

  else if (target === '/demo') {

    const tab = [
      { firstname: 'Riri', lastname: 'Duck' },
      { firstname: 'Zaza', lastname: 'Vanderquack' },
      { firstname: 'Balthazar', lastname: 'Picsou' },
      { firstname: 'Archibald', lastname: 'Gripsou' },
    ]

    renderPage(response, "demo", {
      people: tab
    })

  }

}

const server = http.createServer()
server.on('request', requestListener)
server.listen(8080, () => {
  console.log("Start server with Templating");
})