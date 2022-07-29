const homeController = require('../controllers/home-controller')

// Ajout de multer pour gérer les formulaires 'multipart/form-data'
const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images')
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname))
  }
})

// Configuration du multer
const upload = multer({ storage: storage })

const homeRouter = require('express').Router()

homeRouter.get('/', homeController.index)
homeRouter.route('/contact')
  .get(homeController.contactGet)
  .post(upload.single('myFile'), homeController.contactPost)

module.exports = homeRouter
