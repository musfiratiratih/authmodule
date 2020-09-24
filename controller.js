const { sign } = require("jsonwebtoken")

module.exports = {
    login : function(req,res){
        let credentials = {
            username : req.body.username,
            password : req.body.password
        }
        if(credentials.username == 'admin' || credentials.password == 'admin'){
          let token = sign(credentials,'123')
          return res.send({
              token : token
          })
        }
        res.send('maaf anda bukan admin')
    }
    
}
