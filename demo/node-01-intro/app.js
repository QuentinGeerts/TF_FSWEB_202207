// JS classique
console.log("Hello les FS Web")


// Faire une entrée grâce à l'objet process
console.log("Veuillez entrer un message : ")

process.stdin.on('readable', () => {

  const buffer = process.stdin.read()
  const message = buffer.toString('utf-8').trim()
  console.log(`Le buffer est : '${buffer}'`);
  console.log(`Le message est : '${message}'`);

  process.stdout.write("Sortie par le process")

})