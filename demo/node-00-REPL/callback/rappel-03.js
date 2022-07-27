
/**
 * Permet de filtrer une collection
 * @param {Array} collection
 * @param {(nb: number) => boolean} predicate
 * @returns {Array} La copie filtrée de la collection
 */
const filter = (collection, predicate) => {

  const result = []

  for (const element of collection) {
    
    if (predicate(element)) result.push(element)

  }

  return result

}


const coll = [42, 5, 9, 12, 32, 61, 20, 0, 3, 21]

const res1 = filter(coll, (nb) => nb % 2 == 0) // Nb paires
const res2 = filter(coll, (nb) => nb % 2 != 0) // Nb impaires
const res3 = filter(coll, (nb) => nb >= 10 && nb <= 20) // Nb compris entre 10 et 20

console.log('res1 :>> ', res1);
console.log('res2 :>> ', res2);
console.log('res3 :>> ', res3);