const { contactValidator } = require('../form-validation/contact-validator')
const authorData = require('../data/author.json')

const homeController = {

  index: (req, res) => {
    const data = {
      fullname: authorData.firstname + " " + authorData.lastname,
      image: authorData.image
    }
    res.render('home/index', data)
  },

  contactGet: (req, res) => {
    const categories = ['frontend', 'backend', 'db']
    res.render('home/contact', { categories })
  },

  contactPost: (req, res) => {

    if (!contactValidator.isValid(req.body)) {
      res.redirect('/contact')
      return
    }

    // Cas pratique => Save in database

    // Dans le cas d'un fichier, utilisater les donénes de "req.file"
    // pour ajouter des informations en DB (originalName, filename, ...)
    console.log('req.file :>> ', req.file)

    const data = {
      pseudo: req.body.pseudo,
      nbPerson: req.body.nbPerson,
      myFile: 'images/' + req.file.filename
    }

    res.render('home/contactResponse', data)

  }

}

module.exports = homeController