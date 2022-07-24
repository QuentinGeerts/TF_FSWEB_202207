const maFonction = (val) => {
  console.log(`La valeur est ${val} et elle est de type ${typeof (val)}`);
}

const demoCallback = (input, callback) => {

  if (!callback || typeof (callback) !== 'function') throw new Error('Le callback est invalide ;o')
  

  callback(input)

}

// demoCallback('42', maFonction)
// demoCallback('42', 'Toto')
demoCallback('42', (val) => {
  const result = val ** 2;

  console.log(`Le résultat est ${result}`);
})