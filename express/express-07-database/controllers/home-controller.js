const homeController = {

  index: (req, res) => {
    res.render('home/index', { title: 'Accueil' })
  },

  about: (req, res) => {
    res.render('home/about', { title: null })
  },

}

module.exports = homeController