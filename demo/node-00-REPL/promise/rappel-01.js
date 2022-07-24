

const demoPromise = (input) => {

  return new Promise((resolve, reject) => {
    const nb = parseInt(input)

    if (!isNaN(nb)) resolve(nb)
    else reject(new Error('La valeur est incorrecte.'))
  })

}


demoPromise('a12')
  .then(val => {
    console.log(`La valeur est ${val} et elle est de type ${typeof (val)}`);
  })
  .catch(err => {
    console.log(`Erreur => ${err}`);
  })
  .finally(() => {
    console.log('Conversion terminée')
  })