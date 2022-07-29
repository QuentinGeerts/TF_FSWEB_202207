const express = require('express')
const homeRouter = require('./routes/home-route')

const app = express()

app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'ejs')
app.set('views', './views')

app.use(express.static('public'))

app.use(homeRouter)

app.listen(8080, console.log('Server up on port 8080'))