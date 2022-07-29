const homeController = require('../controllers/home-controller')


const homeRouter = require('express').Router()

homeRouter.get('/', homeController.index)
homeRouter.get(['/index', '/home'], (req, res) => res.redirect('/'))

homeRouter.get('/about', homeController.about)

module.exports = homeRouter