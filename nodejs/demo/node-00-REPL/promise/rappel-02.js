/**
 * Permet de multiplier un nombre par 2
 * @param {number} nb Le nombre à multiplier
 * @returns {Promise}
 */
const multiDeux = (nb) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const val = nb * 2
      resolve(val)
    }, 500)
  })
}

/**
 * Permet de multiplier un nombre par 3
 * @param {number} nb Le nombre à multiplier
 * @returns {Promise}
 */
const multiTrois = (nb) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const val = nb * 3
      resolve(val)
    }, 600)
  })
}

// console.log('START')

// multiDeux(21)
//   .then((result) => {
//     console.log(`Le résultat est ${result}`)
//   })

// console.log('END')


console.log("Operation => ((5 * 2) * 3) * 2")

// multiDeux(5, (r1) => {
//   console.log('Opération 1')

//   multiTrois(r1, (r2) => {
//     console.log('Opération 2')

//     multiDeux(r2, (r3) => {
//       console.log('Opération 3')
//       console.log(`Le résultat final est ${r3}`)
//     })
//   })
// })

// multiDeux(5)
//   .then(r1 => multiTrois(r1))
//   .then(r2 => multiDeux(r2))
//   .then(r3 => console.log(`Le résultat final est ${r3}`))

const demoAsyncAwait = async () => {
  const r1 = await multiDeux(5)
  const r2 = await multiTrois(r1)
  const r3 = await multiDeux(r2)

  console.log(`Le résultat final est ${r3}`)
}

demoAsyncAwait()