const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asynchandler = require('express-async-handler')
const user = require('../model/usermodel')





const registeruser = asynchandler(async (req,res) => {
    const {username, firstName, lastName, email, password, gender, country, role} = req.body
    	
        
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
        role,
        toscheck: "false",
        courses:[],
        minibio: ''
    })

    if(user1){
        res.status(201).json({
            _id: user1.id,
            username: username,
            email: user1.email,
            role:user1.role,
            country:user1.country,
            toscheck:user1.toscheck,
            token: generateToken(user1.id),
            courses:user1.courses,
            minibio:user1.minibio
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
            role: user2.role,
            country:user2.country,
            toscheck:user2.toscheck,
            token: generateToken(user2.id),
            courses:user2.courses,
            minibio:user2.minibio
        })
    }
    else{
        res.status(400)
        throw new Error('Invalid Credentials!')
    }
})

const viewuser = asynchandler(async (req,res) => {
    

    res.status(200).json(req.user)
})


const updatetos = asynchandler(async (req,res) => {
    
    
    const obj = JSON.parse(JSON.stringify(req.body));
    
    const toscheck1 = { toscheck : "true"};
    const user3 = await user.findOneAndUpdate(obj,toscheck1)
    
    
    
})

const updateEmail = asynchandler(async (req,res) => {
    
    
    const username = req.body.username
    const newemail = req.body.email
    const emailform = { email : newemail}
    
   
    const user3 = await user.findOneAndUpdate({username},emailform)
    console.log(user3)
    
    
    
})

const updateBio = asynchandler(async (req,res) => {
    
    
    const username = req.body.username
    const minibio = req.body.minibio
    const bioform = { minibio : minibio}
    console.log(minibio)
    
   
    const user3 = await user.findOneAndUpdate({username},bioform)
    console.log(user3)
    
    
    
})

const updatePassword = asynchandler(async (req,res) => {
    
    
    const username = req.body.username
    const pass = req.body.password
    
    

     //Hash Password
     const salt = await bcrypt.genSalt(10)
     const hashedPassword = await bcrypt.hash(pass,salt)
     const passform = {password:hashedPassword}
    
   
    const user3 = await user.findOneAndUpdate({username},passform)
    console.log(user3)
    
    
    
})

const refreshuser = asynchandler(async (req,res) => {
    
    
    const username = req.body.username
    
    const user2 = await user.findOne({username})
    res.status(201).json({
        _id: user2.id,
        username: username,
        email: user2.email,
        role: user2.role,
        country:user2.country,
        toscheck:user2.toscheck,
        token: generateToken(user2.id),
        courses:user2.courses,
        minibio:user2.minibio
    })

    //console.log(user2)
    
    
    
})

const registerCourse = asynchandler(async (req,res) => {
    
    
    const username = JSON.parse(JSON.stringify(req.body.username));
    const courseName = JSON.parse(JSON.stringify(req.body.courseName))
    console.log(username)
    console.log(courseName)
    const user2 = await user.findOne({username})
    console.log(user2)
    let _user2 = {...user2}
    //console.log(_user2)
    
    if(user2.courses == null){
        user2.courses = {
            courseName:courseName
        }
    }else{
        user2.courses.push({
            courseName:courseName
        })
    }
    
    console.log(user2)
    
    const user3 = await user.findOneAndUpdate({username},user2)
    console.log(user3)
    
    
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
    updatetos,
    registerCourse,
    refreshuser,
    updateEmail,
    updateBio,
    updatePassword
    
}