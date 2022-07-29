const messageController = require('../controllers/message-controller')

const messageRouter = require('express').Router()

messageRouter.get('/message', messageController.index)
messageRouter.get('/message/:id([0-9]+)/details', messageController.details)

messageRouter.get('/message/new', messageController.messageFormGet)
messageRouter.post('/message/new', messageController.messageFormPost)


// Alternative avec la méthode route et les 2 méthodes d'envoi
// messageRouter.route('/message/new')
//   .get('/message/new', messageController.messageFormGet)
//   .post('/message/new', messageController.messageFormPost)

module.exports = messageRouter