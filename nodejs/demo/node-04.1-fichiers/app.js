const fs = require('fs')
const path = require('path')

// Création du "filename" via le module "path" de NodeJS
const filename = path.resolve('data', 'todo.txt')
const savedFilename = path.resolve('data', 'nouveau.txt')
console.log(`Le fichier est dispo sur : ${filename}`);

// Lecture d'un fichier Async
fs.readFile(filename, (err, data) => {
  console.log("> Lecture du fichier")

  if (err) {
    console.log('err :>> ', err)
    return
  }

  // console.log('data :>> ', data);

  console.log("Contenu du fichier :")
  console.log(data.toString())

})

// // Lecture d'un fichier Sync
// const data = fs.readFileSync(filename)
// console.log("Données récupérées : \n", data.toString());

// Récupération des données d'un fichier
fs.stat(filename, (err, stats) => {
  // fs.stat('./data/', (err, stats) => {
  console.log("> Lecture des metadatas d'un fichier")

  if (err) {
    console.log(err)
    return
  }

  // console.log('stats :>> ', stats);

  if (stats.isFile()) {
    console.log("C'est un fichier")
    console.log("Taille du fichier : ", stats.size)
  }

  if (stats.isDirectory()) {
    console.log("C'est un dossier")
  }

  // Etc...

})

// Ecriture dans un fichier
const fileData = "Hello World ! ^_^'"

fs.writeFile(savedFilename, fileData, { encoding: 'utf-8' }, (err) => {

  if (err) {
    return console.error(err);
  }

  console.log('Ecrire réussie')

  fs.readFile(savedFilename, (err, data) => {
    if (err) return console.error(err)

    console.log('data.toString() :>> ', data.toString());
  })


})