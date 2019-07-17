const express = require('express')
const bodyParser = require('body-parser')

const app = express();

app.listen(3000, () => {
    console.log('Pokemon listening on 3000')
})