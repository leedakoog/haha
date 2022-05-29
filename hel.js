const express = require('express')
const app = express()
const port = 5001

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://dabin:Ekqls156508@dbdb.kwjm7.mongodb.net/?retryWrites=true&w=majority'
).then(() => console.log('MongoDB Connected...')).catch(err => console.log(err))

app.get('/', (req, res) => res.send('Hello Dabin!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`)) 