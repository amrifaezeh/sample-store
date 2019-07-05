const express = require('express')
const router = express.Router()
const User = require('../models/User')
 
router.post('/', (req, res, next) => {
    const email = req.body.email
    User.findOne({email: email}, (err, users) => {
        if (err){
            res.json({
                confirmation: 'fail',
                error: err
            })
     
            return next(err)//We receive an actual error here
        }
     
        // if (users.length == 0){
        //     return next(new Error('User Not Found')) //New Error with a string
        //     // res.json({
        //     //     confirmation: 'fail',
        //     //     error: 'User not found'
        //     // })
     
        //     // return
        // }
     
        // const user = users[0]

        // user not found:
        if (user == null)
            return next(new Error('User Not Found'))
        // check password:
        if (user.password != req.body.password){
            // res.json({
            //     confirmation: 'fail',
            //     error: 'Incorrect Password'
        
            // })
            return next(new Error('Incorrect Password')) //New Error with a string
        }

        res.json({
            confirmation:'success',
            user: user
        })
    })
    // res.json({
    //     data: req.body
    // })
})
 
module.exports = router
