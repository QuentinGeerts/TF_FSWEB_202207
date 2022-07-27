// module.exports = function () {
//   console.log("Ceci est l'export d'une fonction")
// }

const square = (nb) => {
  return nb * nb
}

const cube = (nb) => {
  return nb * nb * nb
}

module.exports = { square, cube }