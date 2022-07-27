const readline = require('readline')

// Configuration d'un objet "readline"
const rl = readline.createInterface({ input: process.stdin, output: process.stdout })

// Lecture de la saisie de l'utilisateur
rl.question('Veuillez entrez un nombre : ', (answer) => {

  // Afficher la saisie de l'utilsiateur en console
  rl.write(`Le nombre que vous avez entré est : ${answer}`)

  // Fermeture du curseur
  rl.close()

})