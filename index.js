const express = require('express')
const app = express()
const route = require('./routes')

app.use(express.json())
app.use('/', route)

app.listen(2000, function(){
    console.log('Halo')
})