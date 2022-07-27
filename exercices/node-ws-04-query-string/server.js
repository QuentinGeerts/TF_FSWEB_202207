const http = require('http')
const fs = require('fs')
const qs = require('querystring')
const { URLSearchParams } = require('url')

const server = http.createServer((req, res) => {

  console.log(`(${req.method}) "${req.url}"`)

  // Gérer la demande du "favicon.ico"
  if (req.url === "/favicon.ico") {
    const icon = fs.readFileSync(__dirname + "/public/favicon.ico")
    res.writeHead(200, { "Content-Type": "image/x-icon" })
    res.end(icon, "binary")
    return
  }

  const template = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Exercice Web Server - Formulaire</title>
  </head>
  <body>
    __data__
  </body>
  </html>
  `

  if (req.method === "GET") {
    const formulaire = template.replace('__data__', `
    <form action="/" method="post">

      <label for="lastname">Nom :</label>
      <input type="text" name="lastname" id="lastname">
      <br>
      <label for="firstname">Prénom :</label>
      <input type="text" name="firstname" id="firstname">
      <br>
      <label for="birthdate">Date de naissance :</label>
      <input type="date" name="birthdate" id="birthdate">
      <br>
      <input type="radio" name="gender" id="genderM" value="M">
      <label for="genderM">Homme</label>
      <br>
      <input type="radio" name="gender" id="genderF" value="F">
      <label for="genderF">Femme</label>
      <br>
      <input type="submit" value="Envoyer">
    </form>`)

    res.writeHead(200, {
      "Content-Type": "text/html",
      "Content-Length": Buffer.byteLength(formulaire)
    })

    res.end(formulaire)
  }
  else if (req.method === "POST") {

    // Récupérer les données à traiter

    let body = ""
    req.on('data', data => {
      body += data
      // Prévenir des attaques flood
      if (body.length > 1e6) { // 1 000 000
        // req.connection.destroy()
        req.socket.destroy()
      }
    })

    // Traiter les données reçues
    req.on('end', () => {
      // const postData = qs.parse(body)
      const postData = new URLSearchParams(body)
      // console.log('postData :>> ', postData);
      const postDataObject = Object.fromEntries(postData)
      // console.log('postDataObject :>> ', postDataObject);

      const { lastname, firstname, gender } = postDataObject
      const birthdate = new Date(postDataObject.birthdate)
      // console.log('postData.birthdate :>> ', postData.birthdate);
      // console.log('birthdate :>> ', birthdate);

      // Calcul de l'âge de la personne
      const today = new Date()
      let age = today.getFullYear() - birthdate.getFullYear()

      if (today.getMonth() < birthdate.getMonth()
        || (today.getMonth() === birthdate.getMonth()
          && today.getDate() < birthdate.getDate())) {
        age--
      }

      const result = template.replace('__data__',
      `<h1>Réponse</h1>
      <h3>${gender == 'M' ? 'Mr.' : 'Mme'} ${firstname} ${lastname} a ${age} ans.</h3>`)

      res.writeHead(200, {
        "Content-Type": "text/html",
        "Content-Length": Buffer.byteLength(result)
      })
  
      res.end(result)
    })
  }


})

server.listen(8082, console.log("Server start !"))