const express = require('express')
const path = require('path');
const app = express()
const port = 3030

app.get('/ping', (req, res) => {
res.send('pong')
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/views/index.html'))
  })

  app.post('/productSearch', (req, res) => {
    res.redirect('/')
  })

  app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/views/register.html'))
  })

  app.post('/registerDone', (req, res) => {
    res.redirect('/')
  })

  app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/views/login.html'))
  })

  app.post('/loginDone', (req, res) => {
    res.redirect('/')
  })

app.use(express.static('public'));

app.use(express.urlencoded());

app.listen(port, () => {
console.log(`Mi aplicacion la levanto por: ${port}`)
})