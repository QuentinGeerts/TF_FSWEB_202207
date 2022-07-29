import moment from "moment"
import 'moment/locale/fr.js'

const getNow = () => moment().format('HH:mm:SS')

const log = {
  debug: (message) => { console.log(`[${getNow()}] ${message}`) },
  error: (message) => { console.error(`[${getNow()}] Error : ${message}`) }
}

export default log