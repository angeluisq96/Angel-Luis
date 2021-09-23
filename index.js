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

app.use(express.static('public'));

app.listen(port, () => {
console.log(`Mi aplicacion la levanto por:${port}`)
})