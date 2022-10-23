const jwt = require('jsonwebtoken')
const asynchandler = require('express-async-handler')
const user = require('../model/usermodel')

const protect = asynchandler(async (req, res, next) => {
    let token 

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try {
            // Get Token from header
            token = req.headers.authorization.split(' ')[1]

            //Verify Token
            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            //Get User from the token
            req.user = await user.findById(decoded.id).select('-password')

            next()
        } catch (error) {
            console.log(error)
            res.status(401)
            throw new Error('Not authorized')
        }
    }
    if(!token){
        res.status(401)
        throw new Error('Not authorized, no token')
    }
})

const protectins = asynchandler(async (req, res, next) => {
    let token 

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try {
            // Get Token from header
            token = req.headers.authorization.split(' ')[1]

            //Verify Token
            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            //Get User from the token
            req.user = await user.findById(decoded.id).select('-password')

            next()
        } catch (error) {
            console.log(error)
            res.status(401)
            throw new Error('Not authorized')
        }
    }
    if(!token){
        res.status(401)
        throw new Error('Not authorized, no token')
    }
})






module.exports = { protect , protectins }