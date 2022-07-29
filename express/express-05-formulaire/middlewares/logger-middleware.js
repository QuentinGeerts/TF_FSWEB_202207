const dayjs = require('dayjs')
const chalk = require('chalk')

// Une fonction qui renvoie le middleware
const logger = () => {

  // Middleware
  return (req, res, next) => {
    const now = dayjs().format('hh:mm:ss')
    const method = "[" + req.method.toUpperCase() + "]"
    const url = req.originalUrl

    console.log(`${chalk.greenBright(now)} : ${chalk.yellowBright(method)} "${url}"`)

    next()

  }

}

module.exports = logger