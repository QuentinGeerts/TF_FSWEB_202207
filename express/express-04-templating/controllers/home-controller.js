

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
    res.sendStatus(501) // Not implemented
  }

}

module.exports = homeController