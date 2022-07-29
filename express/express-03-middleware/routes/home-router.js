const homeRouter = require('express').Router()

homeRouter.use((req, res, next) => {
  console.log("On passe dans le routing 'home'");
  next()
})

homeRouter.get(['/', '/home'], (req, res) => {
  res.status(200).send("<h1>Hello here !</h1>")
})

homeRouter.get('/error', () => { throw new Error('Bouuum :X') })

module.exports = homeRouter