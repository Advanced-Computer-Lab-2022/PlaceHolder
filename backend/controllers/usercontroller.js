const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asynchandler = require('express-async-handler')
const user = require('../model/usermodel')





const registeruser = asynchandler(async (req,res) => {
    const {username, firstName, lastName, email, password, gender, country} = req.body
    	
        
    if(username == null || firstName == null || lastName == null || email == null || password == null|| gender == null || country == null){
        res.status(400)
        
        throw new Error('Please add all fields')
        
    }

    //check user exists
    const userExistsEmail = await user.findOne({email})

    if(userExistsEmail){
        res.status(400)
        throw new Error('Email already belongs to a user')
    }

    const userExistsUsername = await user.findOne({username})

    if(userExistsUsername){
        res.status(400)
        throw new Error('Username already exists please try a different one')
    }

    //Hash Password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password,salt)

    //Create User
    const user1 = await user.create({
        username,
        firstName,
        lastName,
        email,
        password: hashedPassword,
        gender,
        country,
        isAdmin : false,
    })

    if(user1){
        res.status(201).json({
            _id: user1.id,
            username: username,
            email: user1.email,
            token: generateToken(user1.id)
        })
    }
    else{
        res.status(400)
        throw new Error('Invalid User Data!')
    }
})


const loginuser = asynchandler(async (req,res) => {
    const {username, password} = req.body

    const user2 = await user.findOne({username})

    if(user2 && (await bcrypt.compare(password, user2.password))){
        res.status(201).json({
            _id: user2.id,
            username: username,
            email: user2.email,
            token: generateToken(user2.id)
        })
    }
    else{
        res.status(400)
        throw new Error('Invalid Credentials!')
    }
})

const viewuser = asynchandler(async (req,res) => {
    const {_id, username, email} = await user.findById(req.user.id)

    res.status(200).json({
        id: _id,
        username,
        email,
    })
})














//Generate JWT
const generateToken = (id) => {
    return jwt.sign({ id },process.env.JWT_SECRET,{
        expiresIn: '1d',
    })
}

module.exports = {
    registeruser,
    loginuser,
    viewuser,
    
}