const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asynchandler = require('express-async-handler')
const user = require('../model/usermodel')
const course = require('../model/coursesmodel')
const nodemailer = require('nodemailer')





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
        minibio: '',
        ratings:[],
        ratingssentins:[],
        coursesrated:[],
        requestedCourse:[]
    })

    if(user1){
        res.status(201).json({
            _id: user1.id,
            username: username,
            firstName:user1.firstName,
             lastName:user1.lastName,
            email: user1.email,
            role:user1.role,
            country:user1.country,
            toscheck:user1.toscheck,
            token: generateToken(user1.id),
            courses:user1.courses,
            minibio:user1.minibio,
            ratings:user1.ratings,
            ratingssentins:user1.ratingssentins,
            coursesrated:user1.coursesrated,
            requestedCourse:user1.requestedCourse
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
            firstName:user2.firstName,
            lastName:user2.lastName,
            email: user2.email,
            role: user2.role,
            country:user2.country,
            toscheck:user2.toscheck,
            token: generateToken(user2.id),
            courses:user2.courses,
            minibio:user2.minibio,
            ratings:user2.ratings,
            ratingssentins:user2.ratingssentins,
            coursesrated:user2.coursesrated,
            requestedCourse:user2.requestedCourse
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

const updateRating = asynchandler(async (req,res) => {
    
    
    var username = req.body.usernameins
    const user2 = await user.findOne({username})
    const rating = req.body.rating
    const review = req.body.review
    const usernamerater = req.body.username
    console.log(username)
    console.log(rating)
    console.log(review)
    console.log(usernamerater)
    
    console.log(user2)
    let _user2 = {...user2}
    //console.log(_user2)
    
    if(user2.ratings == null){
        user2.ratings = {
            userwhorated:usernamerater,
            usersRating:rating,
            usersreview:review
        }
    }else{
        user2.ratings.push({
            userwhorated:usernamerater,
            usersRating:rating,
            usersreview:review
        })
    }
    const user3 = await user.findOneAndUpdate({username},user2)


    username = req.body.username
    var usernameins = req.body.usernameins
    const user4 = await user.findOne({username})
    if(user4.ratingssentins == null){
        user4.ratingssentins = {
            instructorrated:usernameins,
            
        }
    }else{
        user4.ratingssentins.push({
            instructorrated:usernameins,
        })
    }
    
    console.log(user2)
    
    
    const user5 = await user.findOneAndUpdate({username},user4)
    console.log(user3)

     
    
   
    
    
    
})


const updateSubtitle = asynchandler(async (req,res) => {
    const courseTitle = req.body.title
    const username = req.body.username
    console.log(courseTitle)
    console.log(username)
    const user1 = await user.findOne({username})
    var a = [...user1.courses]
    a.map((course)=>{
        if(course.courseName == courseTitle){
            console.log(course.currentSubtitle)
            course.currentSubtitle = course.currentSubtitle + 1
            console.log(course.currentSubtitle)
        }
    })
    user1.courses = a
    console.log(user1)
    const user2 = await user.findOneAndUpdate({username},user1)
})

const updateRequests = asynchandler(async (req,res) => {
    const courseName = req.body.title
    const username = req.body.username
    
    const user1 = await user.findOne({username})
    var a = [...user1.requestedCourse]
    if(a.length == 0){
        a = {
            courseName:courseName,
            granted:false
        }
    }else{
    a.push({
        courseName:courseName,
            granted:false
    })
    }
    user1.requestedCourse = a
    
    const user2 = await user.findOneAndUpdate({username},user1)
})


const updateRatingCourse = asynchandler(async (req,res) => {
    
    
    const title = req.body.coursename
    const course1 = await course.findOne({title})
    var totalRates = Number(course1.totalratings)
    var totalS = Number(course1.totalStars)
    const rating = req.body.ratingCourse
    const review = req.body.reviewCourse
    const username = req.body.username
    const user1 = await user.findOne({username})
    totalRates = totalRates+1
    totalS = totalS + Number(rating)
    course1.totalratings = totalRates
    course1.totalStars = totalS
    console.log("Title : " + title)
    console.log("Rating : "+rating)
    console.log("Review : "+ review)
    
    
    //console.log(_user2)
    
    if(user1.coursesrated == null){
        user1.coursesrated = {
            coursenamerated:title,
            
        }
    }else{
        user1.coursesrated.push({
            coursenamerated:title,
        })
    }
    const user3 = await user.findOneAndUpdate({username},user1)


    
   
    if(course1.ratings == null){
        course1.ratings = {
            userwhorated:username,
            userRate:rating,
            userMessage:review
            
        }
    }else{
        course1.ratings.push({
            userwhorated:username,
            userRate:rating,
            userMessage:review
        })
    }
    
    console.log("Total Stars : " + totalS)
    console.log("Total Rates : "+totalRates)
    course1.courseRating = totalS/totalRates
    
    console.log(course1.courseRating)
    
    const course2 = await course.findOneAndUpdate({title},course1)
    //console.log(course2)
    //console.log(user3)

     
    
   
    
    
    
})


const refreshuser = asynchandler(async (req,res) => {
    
    
    const username = req.body.username
    
    const user2 = await user.findOne({username})
    res.status(201).json({
        _id: user2.id,
        username: username,
        firstName:user2.firstName,
        lastName:user2.lastName,
        email: user2.email,
        role: user2.role,
        country:user2.country,
        toscheck:user2.toscheck,
        token: generateToken(user2.id),
        courses:user2.courses,
        minibio:user2.minibio,
        ratings:user2.ratings,
        ratingssentins:user2.ratingssentins,
        coursesrated:user2.coursesrated,
        requestedCourse:user2.requestedCourse
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
            courseName:courseName,
            currentSubtitle:1,
            receivedCert:"false"
        }
    }else{
        user2.courses.push({
            courseName:courseName,
            currentSubtitle:1,
            receivedCert:"false"
        })
    }
    
    console.log(user2)
    
    const user3 = await user.findOneAndUpdate({username},user2)
    const title = courseName
    const course1 = await course.findOne({title})
    course1.NumberOfUsers = Number(course1.NumberOfUsers) + 1
    const course2 = await course.findOneAndUpdate({title},{$set:course1})
    console.log(user3)
    
    
})

const forgotpass = asynchandler(async (req,res) => {
    const { email } = req.body;
    console.log(email)
    var link = ''
    try {
        const oldUser = await user.findOne({ email });
        console.log(oldUser)
        if (!oldUser) {
          return res.json({ status: "User Doesnt Exist!" });
        }

     const secret = process.env.JWT_SECRET + oldUser.password;
     const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, {
        expiresIn: "5m",
      });
        link = `http://localhost:8000/users/reset-password/${oldUser._id}/${token}`;
      console.log(link) 
    } catch (error) {
        console.log(error)
    }
    var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASSWORD,
        },
      });
      var mailOptions = {
        from: "aclnodemailerproject@gmail.com",
        to: email,
        subject: "Password Reset",
        text: link,
      }; 
      
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
        }
      });
    
    
})

const resetpass = asynchandler(async (req,res) => {
    const { id, token } = req.params;
    console.log(req.params);
    const oldUser = await user.findOne({ _id: id });
    if (!oldUser) {
        return res.json({ status: "User Not Exists!!" });
      }
      const secret = process.env.JWT_SECRET + oldUser.password;
      try {
        const verify = jwt.verify(token, secret);
        res.render("index", { email: verify.email });
      } catch (error) {
        console.log(error);
        res.send("Not Verified");
      }
    
})

const resetpasspost = asynchandler(async (req,res) => {
    const { id, token } = req.params;
    const { password } = req.body;
  
    const oldUser = await user.findOne({ _id: id });
    if (!oldUser) {
      return res.json({ status: "User Not Exists!!" });
    }
    const secret = process.env.JWT_SECRET + oldUser.password;
    try {
      const verify = jwt.verify(token, secret);
      const salt = await bcrypt.genSalt(10)
      const encryptedPassword = await bcrypt.hash(password, salt);
      await user.updateOne(
        {
          _id: id,
        },
        {
          $set: {
            password: encryptedPassword,
          },
        }
      );
      
  
      res.render("index", { email: verify.email, status: "verified" });
    } catch (error) {
      console.log(error);
      res.json({ status: "Something Went Wrong" });
    }
    
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
    updatePassword,
    forgotpass,
    resetpass,
    resetpasspost,
    updateRating,
    updateRatingCourse,
    updateSubtitle,
    updateRequests
    
}