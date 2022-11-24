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
import{refreshuser, registerCourse,updateRating} from '../features/auth/authSlice'
import "../components/Styling/Ratings.css"

function ViewCourses(){
    const title = useParams();
    //console.log(title.title)
    var tile = title.title
    const navigate = useNavigate()
    const dispatch = useDispatch()
    var flag = false;
    var flag1 = false;
    const[courses1 , setCourses] = useState();
    const {user} = useSelector((state) => state.auth)
    const { courses, isLoading, isError, message } = useSelector(
      (state) => state.courses
    )

    const [FormData, setFormData] = useState({
      review: '',
      rating: 0,
      
    })

    const {review ,rating} = FormData
    const handlereview = (e) => {
      setFormData((prevState)=> ({
          ...prevState,
          [e.target.name]: e.target.value,
      }))
     }
     
    useEffect(() => {
      if (isError) {
        console.log(message)
      }
      // console.log(courses)
  
      
      //console.log("Dispatched!")
      const userData2 = {
        username:user.username
      }
      //dispatch(refreshuser(userData2))
      dispatch(getCoursePage(title.title))
      
      setCourses(courses)
      

      
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
            console.log(course.courseName)
            console.log('treueeeeeeeeeee')
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
      console.log(userData)

       dispatch(updateRating(userData))
       dispatch(refreshuser(userData2))
       navigate('/viewcourse/'+courses.title)
       toast.success('Rating Added !')
  }
  const handleRating = (e) => {
    //e.preventDefault()
    console.log(e.target.value)
    setFormData((prevState)=> ({
      ...prevState,
      [e.target.name]: e.target.value,
   }))
  }
    
    
    return (<>
      {
        checkCourse(courses,user.courses)
        
      }
      {
        console.log(flag)
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
            <div>
              Subtitle Exercises: {sub.exercises.map((q)=>{
                return(
                  <>
                  <div>
                    Question : {q.question}
                  </div>
                  </>
                )
              })}
            </div>
            <div>
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
            {console.log(flag1)}
            {(flag1!=true)?(<><div>
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
      
      </>
      )
}

export default ViewCourses