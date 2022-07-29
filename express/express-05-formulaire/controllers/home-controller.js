const yup = require('yup')

const homeController = {

  index: (req, res) => {
    res.render('home/index')
  },

  about: (req, res) => {
    const author = { fn: 'Zaza', ln: 'Vanderquack' }
    res.render('home/about', {
      firstname: author.fn,
      lastname: author.ln
    })
  },

  contactGet: (req, res) => {
    const categories = ['frontend', 'backend', 'db']
    res.render('home/contact', { categories })
  },

  contactPost: (req, res) => {
    // Récupération des données envoyées par le requête POST
    // Rappel : Nécessite le middleware express.urlencoded()
    console.log(req.body)

    // Création d'un schéma de validation via 'yup'
    const schemaBody = yup.object().shape({
      email: yup.string().required().email(),
      category: yup.string().required(),
      message: yup.string().required()
    })

    // Validation des données du body (POST) via le schéma yup
    if (schemaBody.isValidSync(req.body)) {
      res.render('home/contactResponse', {
        email: req.body.email,
        category: req.body.category,
        message: req.body.message
      })
    }
    else {
      res.redirect('/contact')
    }


  }

}

module.exports = homeController