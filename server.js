const express = require('express')
const bodyParser = require('body-parser')

const app = express();
app.use(express.static('public'))

const Pokemon = require('./models/pokemon')
const Images = require('./public/images')

app.get('/pokemon', (req,res) => {
    res.render('index.ejs', {
        pokemon: Pokemon,
        image: Images
    })
})

app.get('/pokemon/:index', (req,res) => {

})

app.listen(3000, () => {
    console.log('Pokemon listening on 3000')
})