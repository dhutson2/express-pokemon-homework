const express = require('express')
const bodyParser = require('body-parser')

const app = express();

const Pokemon = require('./models/pokemon')

app.get('/pokemon', (req,res) => {
    console.log(Pokemon)
    res.send(Pokemon)
})

app.listen(3000, () => {
    console.log('Pokemon listening on 3000')
})