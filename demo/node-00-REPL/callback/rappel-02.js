/**
 * Permet de multiplier un nombre par 2
 * @param {number} nb Le nombre à multiplier
 * @param {(v: number) => void} callback La fonction à réaliser ensuite
 */
const multiDeux = (nb, callback) => {
  setTimeout(() => {
    const val = nb * 2
    callback(val)
  }, 500)
}

/**
 * Permet de multiplier un nombre par 3
 * @param {number} nb Le nombre à multiplier
 * @param {(v: number) => void} callback La fonction à réaliser ensuite
 */
const multiTrois = (nb, callback) => {
  setTimeout(() => {
    const val = nb * 3
    callback(val)
  }, 600)
}

// console.log('START')

// multiDeux(21, (result) => {
//   console.log(`Le résultat est ${result}`)
// })

// console.log('END')


console.log("Operation => ((5 * 2) * 3) * 2")

multiDeux(5, (r1) => {
  console.log('Opération 1');

  multiTrois(r1, (r2) => {
    console.log('Opération 2')

    multiDeux(r2, (r3) => {
      console.log('Opération 3');
      console.log(`Le résultat final est ${r3}`);
    })
  })
})