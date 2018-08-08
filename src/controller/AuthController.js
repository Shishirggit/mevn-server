const User = require('../models/user')

const jwt = require('jsonwebtoken')

function jwtSignedUser(user){
    const ONE_DAY = 24 * 60 * 60 * 7
    return jwt.sign(user,"#somehashpassword",{
        expiresIn: ONE_DAY
    })
}
module.exports = {
    register (req, res) {
        var db = req.db;
        var _email = req.body.email;
        var _password = req.body.password;
        var new_user = new User({
            email: _email,
            password: _password
        })
        console.log(new_user.email);
        console.log(new_user.password);

        new_user.save(function (error) {
            if (error) {
                res.status(400).send({
                    error:'user cannot be created' + error.message
                })
            }else {
                res.send({
                    success: true,
                    message: 'User created successfully!'
                })
            }     
        })
    },
    login (req, res) {
        //In case of Get  console.log(req.query.email);
        const {email, password} = req.body
        User.find({email:email,password:password}, 'email password', function (error, user) {
            
            if (error) { 
                res.status(400).send({
                    error:'Some error occured. Please try again'
                }) 
            }console.log(user)
            if(user.length ==0){
                res.status(403).send({
                    error:'Login information is incorrect'
                })
            } else {
                res.send({
                    user: user,
                    token: jwtSignedUser({
                        user:user
                    })
                })
            }
        }).sort({_id:-1}) 
    }
}