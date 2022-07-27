// const Personne = require('./modules/export-class-es5')
const Personne = require('./modules/export-class-es6+')
const { square, cube } = require('./modules/export-function')
const messager = require('./modules/messager')
// const { start, stop, send } = require('./modules/messager')

// Personne
const p = new Personne(undefined, 'Quentin')
console.log('p :>> ', p)
console.log('p.nom :>> ', p.nom)
console.log('p.prenom :>> ', p.prenom)
console.log('p.fullname :>> ', p.fullname)

// Functions
// fnAnonyme()

console.log('square(3) :>> ', square(3));
console.log('cube(3) :>> ', cube(3));


// Messager
messager.start()

// messager.send('Bientôt la pause, ne vous en faites pas ! :)')
messager.sendMoment('Bientôt la pause, ne vous en faites pas ! :)')

messager.stop()