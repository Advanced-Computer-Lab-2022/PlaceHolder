import React from 'react'
import {useEffect} from 'react'
import {useNavigate, useSearchParams, useParams} from 'react-router-dom'
import {useSelector , useDispatch} from 'react-redux'
import {toast} from 'react-toastify'
import CourseItem from '../components/CourseItem'
import Spinner from '../components/Spinner'
import { getCourses, reset, getCoursePage } from '../features/courses/courseSlice'
import axios from 'axios'
import { useState } from 'react'
import CourseForm from '../components/CourseForm'
import{refreshuser, registerCourse,updateRating, updateRatingCourse} from '../features/auth/authSlice'
import "../components/Styling/Ratings.css"

function ViewCourses(){
    const title = useParams();
    //console.log(title.title)
    var tile = title.title
    const navigate = useNavigate()
    const dispatch = useDispatch()
    var flag = false;
    var flag1 = false;
    var flag2 = false;
    var flagsubmit = false;
    const[courses1 , setCourses] = useState();
    const {user} = useSelector((state) => state.auth)
    const { courses, isLoading, isError, message } = useSelector(
      (state) => state.courses
    )

    const [FormData, setFormData] = useState({
      review: '',
      rating: 0,
      
    })

    const [answers , setanswers] = useState([])
    const [results , setresults] = useState([])
    const [toggle, setToggle] = useState(true)
    const [currentsub,setcurrentsub] = useState()

    const [FormDataCourse,setFormDataCourse] = useState({
      reviewCourse: '',
      ratingCourse: 0,
    })

    const {review ,rating} = FormData
    const {reviewCourse,ratingCourse} = FormDataCourse
    const handlereview = (e) => {
      setFormData((prevState)=> ({
          ...prevState,
          [e.target.name]: e.target.value,
      }))
     }

     const handleCourseReview = (e) => {
      setFormDataCourse((prevState)=> ({
          ...prevState,
          [e.target.name]: e.target.value,
      }))
     }
     
    useEffect(() => {
      if (isError) {
        console.log(message)
      }
      // console.log(courses)
      if(!user){
        toast.error('Please Log In First!')
        navigate('/login')
      }else{
      
      //console.log("Dispatched!")
      const userData2 = {
        username:user.username
      }
      //dispatch(refreshuser(userData2))
      dispatch(getCoursePage(title.title))
      
      setCourses(courses)
      
    }
      
      return () => {
        dispatch(reset())
      }
    }, [user, navigate, isError, message, dispatch])
  
    if (isLoading) {
      return <Spinner />
    }

    function checkCourse(courses , userCourses){
        if(userCourses == null | courses==null){
          setCourses(courses)
        }
        //console.log(userCourses)
        userCourses.map((course)=>{
          //console.log(course.courseName)
          if(courses.title==course.courseName){
            //console.log(course.courseName)
            //console.log('treueeeeeeeeeee')
            flag = true;
           
            
          }
        })
       
      }

     function checkRating(UserRates , instructorName){
      if(UserRates==null){
        flag1 = false;
      }
      UserRates.map((rate)=>{
        if(rate.instructorrated == instructorName){
          console.log(rate.instructorrated)
          console.log(instructorName)
          flag1 = true;
        }
      })
      
     } 

     function checkCourseRating(usernameCoursesRated , title){
      if(usernameCoursesRated==null){
        flag2 = false;
      }else{
      usernameCoursesRated.map((rate)=>{
        if(rate.coursenamerated == title){
          
          flag2 = true;
        }
      })
    }
      
     }
    

    function RegisterUserCourse(){
      const userData = {
        username: user.username,
        courseName:courses.title
      }
      const userData2={
        username: user.username
      }

      dispatch(registerCourse(userData))
      dispatch(refreshuser(userData2))
      navigate('/'+user.role)
      toast.success("Registered To This Course Successfully!!")
    }
    function p1(courses,usercourses){
      if(checkCourse(courses,usercourses)==true){
        return {
          
        }
      }else{

      }
    }
    const ratesubmit = (e) => {
      e.preventDefault()
      const userData = {
          username:user.username,
          usernameins:courses.instructorName,
          review,
          rating
      }
      const userData2 = {
        username:user.username
      }
      //console.log(userData)

       dispatch(updateRating(userData))
       
       navigate('/'+user.role)
       toast.success('Rating Added !')
  }


  const ratesubmitCourse = (e) => {
    e.preventDefault()
    const userData = {
        username:user.username,
        coursename:courses.title,
        reviewCourse,
        ratingCourse
    }
    const userData2 = {
      username:user.username
    }
    //console.log(userData)

     dispatch(updateRatingCourse(userData))
     
     navigate('/'+user.role)
     toast.success('Rating Added !')
}
  const handleRating = (e) => {
    //e.preventDefault()
    //console.log(e.target.value)
    setFormData((prevState)=> ({
      ...prevState,
      [e.target.name]: e.target.value,
   }))
  }

  const handleCourseRating = (e) => {
    //e.preventDefault()
    //console.log(e.target.value)
    setFormDataCourse((prevState)=> ({
      ...prevState,
      [e.target.name]: e.target.value,
   }))
  }
  const handlequestionanswer = (
		subtID,
		questionID,
        e
		
	) => {
    //console.log(answers)
    //console.log(e.target.value)
		const subtindex = courses.subtitles.findIndex((subt) => subt._id === subtID)
    //console.log(subtindex)
		let _SubtitleList = [...courses.subtitles]
    //console.log(_SubtitleList) 
    
		const questionIndex = _SubtitleList[subtindex].exercises.findIndex(
			(q) => q._id === questionID,
		)
    //console.log(questionIndex)
    //console.log(_SubtitleList[subtindex].exercises)
    //console.log(questionID)
    var flag = false;
    if(_SubtitleList[subtindex].exercises[questionIndex].correctanswer == e.target.value){
      flag=true
    }
		const questionForm = {
      question:_SubtitleList[subtindex].exercises[questionIndex].question,
      correctanswer:_SubtitleList[subtindex].exercises[questionIndex].correctanswer,
      usersanswer:e.target.value,
      correct:flag
    }
   
    //console.log(questionForm)
    let _answers = [...answers]
    for (var i = _answers.length - 1; i >= 0; --i) {
      if (_answers[i].question == _SubtitleList[subtindex].exercises[questionIndex].question) {
          _answers.splice(i,1);
      }
  }
    _answers.push(questionForm)
		setanswers(_answers)
    console.log(answers)
    
	}
  function submitquestionAnswers(){
    //  let _answers = [...answers]
    //  let _results = [...results]
    //   if(_answers.length==0){
    //     toast.error("Please Answer Questions First!")
    //   }else{
    //     var resultsform = {
    //       question:"",
    //       correct:"",
    //       correctanswer:""
    //     }
    //     for(var i = 0;i<_answers.length;i++){
    //       if(_answers[i].correctanswer=="true"){
              
    //       }
    //     }
    //   }
    flagsubmit=true
    

  }  
  function checkquestionanswer(question){
    console.log(question)
    let _answers = [...answers]
    for(var i =0;i<_answers.length;i++){
      if(_answers[i].question==question){
        //console.log("YESSSSSSSSSS")
        //console.log(_answers[i].correctanswer)
        if(_answers[i].correct==true){
          console.log("Right")
          return "true"
        }else{
          return "false"
        }
      }
    }
  }

  function rightanswers(){
    let _answers = [...answers]
    var total = 0;
    var correct = 0;
    for(var i =0;i<_answers.length;i++){
        total++
        if(_answers[i].correct==true){
          correct++
        }
    }
    return "You Got "+correct+" correct out of "+total+" questions!"
  }
  function displaysubtitle(sub){
      console.log("asdas")
      setcurrentsub(sub)
  }

  function displaycourseinfo(){
    const sub = {
      courseinfo:true,
      title:courses.title,
      summary:courses.summary,
      subject:courses.subject,
      price:courses.price,
      instructorName:courses.instructorName,
      courseRating:courses.courseRating,
      totalHours:courses.totalHours,
      ratings:courses.ratings,
    }
    setcurrentsub(sub)
  }
    
    
    return (<>
    {(courses.title !=null & user !=null)?(<>{
        checkCourse(courses,user.courses)
        
      }
      {checkRating(user.ratingssentins,courses.instructorName)}
      {checkCourseRating(user.coursesrated,courses.title)}
      {
        (courses.title !=null) ? ((flag==true | user.username==courses.instructorName) ? (<>{(courses.title !=null) ? (
          
        <>
          
          
          <div className="container-fluid">
            <div className="row">
            <div className="col-md-1 ">
              <div class="d-flex flex-column align-items-stretch flex-shrink-0 bg-white" style={{width: 250 }}>
                  <br></br>
                  <h5>Course Information</h5>
                  <br></br>
                    <div class="list-group list-group-flush border-bottom scrollarea">
                            <a onClick={()=>displaycourseinfo()} class="list-group-item list-group-item-action  py-3 lh-tight border  btn btn-primary" aria-current="true">
                          <div class="d-flex w-100 align-items-center justify-content-between">
                            <strong class="mb-1">Course Information</strong>
                            
                          </div>
                          <div class="col-10 mb-1 small"></div>
                        </a>    
                    </div>
                    <br></br>
                  <h5>Subtitles</h5>
                  <br></br>
                  <div class="list-group list-group-flush border-bottom scrollarea">
        
        {courses.subtitles.map((sub)=>{
          return(
                <a onClick={()=>displaysubtitle(sub)} class="list-group-item list-group-item-action  py-3 lh-tight border" aria-current="true">
                  <div class="d-flex w-100 align-items-center justify-content-between">
                    <strong class="mb-1">{sub.subt}</strong>
                    <small>{sub.totalh} hours</small>
                  </div>
                  <div class="col-10 mb-1 small"></div>
                </a>

                
              
          )
        })}
        </div>
            </div>
            </div>
            <div className="col-md-11 ">
            <div className="container">
              {(currentsub !=null)?(<>{(currentsub.courseinfo != null)?(<>
                <h5 className='text-center'>{currentsub.title}</h5>
                <h6>Course Subject : {currentsub.subject}</h6>
                <h6>Course Instructor : {currentsub.instructorName}</h6>
                <h6>Course Rating : {currentsub.courseRating} Stars</h6>
                <h6>Course Total Hours : {currentsub.totalHours}</h6>
                <h6>Course Price : {currentsub.price} USD</h6>
                <h6>Course Summary: {currentsub.summary}</h6>
                
            {console.log(flag1)}  
            {(flag1!=true &  (user.role == 'trainee' | user.role == 'corporate trainee'))?(<><div className='container border'>
              Rate Instructor : <div class="rating"> 
                  <input type="radio" name="rating" value="5" id="5" onChange={handleRating}/><label for="5">☆</label> 
                  <input type="radio" name="rating" value="4" id="4" onChange={handleRating}/><label for="4">☆</label> 
                  <input type="radio" name="rating" value="3" id="3" onChange={handleRating}/><label for="3">☆</label> 
                  <input type="radio" name="rating" value="2" id="2" onChange={handleRating}/><label for="2">☆</label> 
                  <input type="radio" name="rating" value="1" id="1" onChange={handleRating}/><label for="1">☆</label>
                </div>
              
               <input placeholder={'Review '+courses.instructorName+"'s Work "} name="review" onChange={handlereview}></input>
              <br></br>
              <br></br>
               <button type='button' className='btn btn-primary' onClick={ratesubmit}>Rate Instructor</button>
            </div></>):(<></>)}
             <br></br> 
            {(flag2!=true &  (user.role == 'trainee' | user.role == 'corporate trainee'))?(<><div className='container border'>
              Rate Course : <div class="rating"> 
                  <input type="radio" name="rating" value="5" id="5" onChange={handleCourseRating}/><label for="5">☆</label> 
                  <input type="radio" name="rating" value="4" id="4" onChange={handleCourseRating}/><label for="4">☆</label> 
                  <input type="radio" name="rating" value="3" id="3" onChange={handleCourseRating}/><label for="3">☆</label> 
                  <input type="radio" name="rating" value="2" id="2" onChange={handleCourseRating}/><label for="2">☆</label> 
                  <input type="radio" name="rating" value="1" id="1" onChange={handleCourseRating}/><label for="1">☆</label>
                </div>
              
             <input placeholder={"Review "+courses.title} name="reviewCourse" onChange={handleCourseReview}></input>
             <br></br>
             <br></br>
               <button type='button' className='btn btn-primary' onClick={ratesubmitCourse}>Rate Course</button>
            </div></>):(<></>)}      



              </>):(<>
              <h5 className='text-center'>{currentsub.subt}</h5>
              <div className="container border">
                {currentsub.description}
              </div>
              <br></br>
              {currentsub.videos.map((v)=>{
                return(
                  <>
                  <div>
                    <h5 className='text-center' >Video Title : {v.videotitle}</h5>
                    <h6 >Video Description: {v.videodescription}</h6>
                    <div class="embed-responsive embed-responsive-21by9 ">
                      <iframe class="embed-responsive-item" width={1280} height={1080} src={v.url} allowfullscreen></iframe>
                    </div>
                    <br></br>
                    <br></br>
                    </div>
                    </>
                )
              })}


                  Subtitle Exercises:<br></br> {currentsub.exercises.map((q)=>{
                                  
                                  return(
                                    <>
                                    <div className='container border'>
                                      Question : {q.question}
                                      <br>
                                      </br>
                                      A :<input type="radio" name={q.question} value="A" onChange={(e) =>handlequestionanswer(currentsub._id, q._id,e)}></input><label>{q.answerA}</label>
                                      <br></br>
                                      B :<input type="radio" name={q.question} value="B" onChange={(e) =>handlequestionanswer(currentsub._id, q._id,e)}></input><label>{q.answerB}</label>
                                      <br></br>
                                      C :<input type="radio" name={q.question} value="C" onChange={(e) =>handlequestionanswer(currentsub._id, q._id,e)}></input><label>{q.answerC}</label>
                                      <br></br>
                                      D :<input type="radio" name={q.question} value="D" onChange={(e) =>handlequestionanswer(currentsub._id, q._id,e)}></input><label>{q.answerD}</label>
                                      <br></br>
                                      {!toggle && (<div>
                                      {(checkquestionanswer(q.question)=="true")?(<>You Were Right</>):(<>You Were Wrong <br></br>
                                      Correct Answer : {q.correctanswer}</>)}
                                    </div>)}
                                    {console.log(flagsubmit)}
                                    </div>
                                    
                                    </>
                                  )
                                })}

              
              <br></br>
              {!toggle && (<div>
                {rightanswers()}

              </div>)}
              {((user.role=='trainee' | user.role=='corporate trainee') & toggle)?(<><button type='button' className='btn btn-primary' onClick={() => setToggle(!toggle)}>Submit My Answers</button></>):(<></>)}
              
              
              
              
              </>)}</>):(<></>)}
            </div>
            </div>
        </div>
        </div>
        </>) : (<></>)}</>):(<>
          <div className='goal'>
        <h1>
            Course Title : {courses.title}
        </h1>
        {/* <h2>
            Subtitles : {courses.subtitles}
        </h2> */}
        {courses.subtitles.map((sub)=>{
          return(<>
            <div>
              Subtitle Name : {sub.subt}
            </div>
            <div>
            Subtitle Description : {sub.description}
            </div>
            <div>
              Subtitle Total Time : {sub.totalh}
            </div>
            
            <br></br>
            </>
          )
        })}
        <b1>
            Instructor : {courses.instructorName}
            <br></br>
            Subject : {courses.subject}
            <br></br>
            Course Rating : {courses.courseRating}
            <br></br>
            Total Hours : {courses.totalHours}
            <br></br>
            Price : {courses.price}
        </b1>
        </div>
        
        {(user!=null & (user.role == 'trainee' | user.role == 'corporate trainee' | user.role == 'admin'))?(<button onClick={RegisterUserCourse}>Register To This Course</button>  ):(<></>)}
          
        
        </>)) : (<></>)
        
      }
        
      </>):(<></>)}
      
      </>
      )
}

export default ViewCourses