// JS classique
console.log("Hello les FS Web")


// Faire une entrée grâce à l'objet process
console.log("Veuillez entrer un message : ")

process.stdin.on('readable', () => {

  const buffer = process.stdin.read()
  const message = buffer.toString('utf-8').trim()

  // Affichage avec l'objet "console"
  console.log(`Le buffer vaut : '${buffer}'`);
  console.log(`Le message vaut : '${message}'`);

  // Affichage avec l'objet "process"
  process.stdout.write(`Le buffer vaut : '${buffer}'`)
  process.stdout.write(`Le message vaut : '${message}'`)

})