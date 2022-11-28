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
    
    
    return (<>
    {(courses.title !=null & user !=null)?(<>{
        checkCourse(courses,user.courses)
        
      }
      {
        // console.log(flag)
      }
      
      {
        (courses.title !=null) ? ((flag==true | user.username==courses.instructorName) ? (<>{(courses.title !=null) ? (<div className='goal'>
        <h1>
            Course Title : {courses.title}
        </h1>
        <div>
        <iframe width="420" height="315"
        src={courses.preview}>
        </iframe>
        </div>
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
            <br></br>
            <div>
              Subtitle Exercises:<br></br> {sub.exercises.map((q)=>{
                
                return(
                  <>
                  <div>
                    Question : {q.question}
                    <br>
                    </br>
                    A :<input type="radio" name={q.question} value="A" onChange={(e) =>handlequestionanswer(sub._id, q._id,e)}></input><label>{q.answerA}</label>
                    <br></br>
                    B :<input type="radio" name={q.question} value="B" onChange={(e) =>handlequestionanswer(sub._id, q._id,e)}></input><label>{q.answerB}</label>
                    <br></br>
                    C :<input type="radio" name={q.question} value="C" onChange={(e) =>handlequestionanswer(sub._id, q._id,e)}></input><label>{q.answerC}</label>
                    <br></br>
                    D :<input type="radio" name={q.question} value="D" onChange={(e) =>handlequestionanswer(sub._id, q._id,e)}></input><label>{q.answerD}</label>
                    <br></br>
                  </div>
                  {!toggle && (<div>
                    {(checkquestionanswer(q.question)=="true")?(<>You Were Right</>):(<>You Were Wrong <br></br>
                    Correct Answer : {q.correctanswer}</>)}
                  </div>)}
                  {console.log(flagsubmit)}
                  </>
                )
              })}
              <br></br>
              {!toggle && (<div>
                {rightanswers()}

              </div>)}
              {(user.role=='trainee' | user.role=='corporate trainee')?(<><button onClick={() => setToggle(!toggle)}>Submit My Answers</button></>):(<></>)}
              
            </div>
            <div>
              <br></br>
              Subtitle Videos : {sub.videos.map((v)=>{
                return(
                  <>
                  <div>
                    Video Title : {v.videotitle}
                    <div>
                    <iframe width="420" height="315"
                    src={v.url}>
                    </iframe>
                    </div>
                    
                    Video Description: {v.videodescription}
                    </div></>
                )
              })}
            </div>
  
            <br></br>
            {checkRating(user.ratingssentins,courses.instructorName)}
            {/* {console.log(flag1)} */}
            {(flag1!=true &  (user.role == 'trainee' | user.role == 'corporate trainee'))?(<><div>
              Rate Instructor : <div class="rate">
            <input type="radio" id="star5" name="rating" value="5" onChange={handleRating}/>
            <label for="star5" title="text">5 stars</label>
            <input type="radio" id="star4" name="rating" value="4" onChange={handleRating}/>
            <label for="star4" title="text">4 stars</label>
            <input type="radio" id="star3" name="rating" value="3" onChange={handleRating} />
            <label for="star3" title="text">3 stars</label>
            <input type="radio" id="star2" name="rating" value="2" onChange={handleRating}/>
            <label for="star2" title="text">2 stars</label>
            <input type="radio" id="star1" name="rating" value="1" onChange={handleRating}/>
            <label for="star1" title="text">1 star</label>
            </div>
              <br></br>
              Review Instructor : <input placeholder={'Review '+courses.instructorName+"'s Work "} name="review" onChange={handlereview}></input>
               <button onClick={ratesubmit}>Rate Instructor</button>
            </div></>):(<></>)}



            {checkCourseRating(user.coursesrated,courses.title)}
           
            {(flag2!=true &  (user.role == 'trainee' | user.role == 'corporate trainee'))?(<><div>
              Rate Course : <div class="rate">
            <input type="radio" id="star5" name="ratingCourse" value="5" onChange={handleCourseRating}/>
            <label for="star5" title="text">5 stars</label>
            <input type="radio" id="star4" name="ratingCourse" value="4" onChange={handleCourseRating}/>
            <label for="star4" title="text">4 stars</label>
            <input type="radio" id="star3" name="ratingCourse" value="3" onChange={handleCourseRating} />
            <label for="star3" title="text">3 stars</label>
            <input type="radio" id="star2" name="ratingCourse" value="2" onChange={handleCourseRating}/>
            <label for="star2" title="text">2 stars</label>
            <input type="radio" id="star1" name="ratingCourse" value="1" onChange={handleCourseRating}/>
            <label for="star1" title="text">1 star</label>
            </div>
              <br></br>
              Review Course : <input placeholder={"Review "+courses.title} name="reviewCourse" onChange={handleCourseReview}></input>
               <button onClick={ratesubmitCourse}>Rate Course</button>
            </div></>):(<></>)}
            
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
        </div>) : (<></>)}</>):(<>
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