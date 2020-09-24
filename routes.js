const express = require('express')
const route = express.Router()
const controller = require('./controller')

route.get('/', function(req,res){
    res.send('Selamat Belajar XI RPL 4 Moklet')
})

route.post('/login', controller.login)

module.exports = route