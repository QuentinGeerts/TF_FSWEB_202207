// Pour utiliser les imports es6+ => type="module"

import log from "./modules/log.js"
import Personne from './modules/Personne.js'

log.debug("Heyo ! :D")
log.error('Oopsi ! :3')

const riri = new Personne('Duck', 'Riri')

console.log('riri :>> ', riri);
console.log('riri.fullname :>> ', riri.fullname);


riri.direBonjour()