const homeController = require('../controllers/home-controller')

const homeRouter = require('express').Router()

// Définition des routes

// - Page Accueil
homeRouter.get('/', homeController.index)
homeRouter.get(['/home', '/index'], (req, res) => res.redirect('/'))

// - Page About
homeRouter.get('/about', homeController.about)

// Page Contact
homeRouter.route('/contact')
  .get(homeController.contactGet)
  .post(homeController.contactPost)

// Alternatif
// homeRouter.get('/contact', homeController.contactGet)
// homeRouter.post('/contact', homeController.contactPost)

// Exportation du module "homeRouter"
module.exports = homeRouter