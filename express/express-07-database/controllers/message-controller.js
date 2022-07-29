const { messageSchema } = require("../data-validators/message-validator")
const messageModel = require("../models/message-model")
const { getErrorMessage } = require("../utils/error-utils")


const messageController = {

  index: (req, res) => {
    // Affichage de la liste des messages
    messageModel.getAll()
      .then(messages => {
        res.render('message/index', {
          title: 'Liste des messages',
          messages
        })
      })
  },

  details: (req, res) => {
    // Affichage des détails d'un message par son id
    const { id } = req.params

    // Récupération des données
    messageModel.getById(id)
      .then(message => {

        if (!message) return res.sendStatus(404)

        const optionDate = {
          dateStyle: 'long',
          timeStyle: 'short',
          timeZone: 'Europe/Brussels'
        }

        // console.log('message :>> ', message);
        res.render('message/details', {
          title: `Détails du message ${id}`,
          message,
          formattedCreateDate: message.createdAt.toLocaleString('fr-BE', optionDate)
        })

      })
  },

  messageFormGet: (req, res) => {
    // Permet d'afficher la page avec le formulaire
    res.render('message/newMessage', {
      title: 'Nouveau message',
      errors: null,
      data: {}
    })
  },

  messageFormPost: (req, res) => {
    // Permet de traiter les données du formulaire
    messageSchema.validate(req.body, { abortEarly: false })
      .then((data) => {
        messageModel.insert({ pseudo: data.pseudo, content: data.msg })
          .then(id => { console.log('Message : ' + id) })

          res.redirect('/message')
      })
      .catch((validationError) => {

        console.log(validationError);
        const errors = getErrorMessage(validationError)
        const data = validationError.value

        res.render('message/newMessage', {
          title: 'Corrige ton message',
          errors,
          data
        })
      })
  }

}

module.exports = messageController