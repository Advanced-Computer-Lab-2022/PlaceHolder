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
import{refreshuser, registerCourse} from '../features/auth/authSlice'

function ViewCourses(){
    const title = useParams();
    //console.log(title.title)
    var tile = title.title
    const navigate = useNavigate()
    const dispatch = useDispatch()
    var flag = false;
    const[courses1 , setCourses] = useState();
    const {user} = useSelector((state) => state.auth)
    const { courses, isLoading, isError, message } = useSelector(
      (state) => state.courses
    )

     
    useEffect(() => {
      if (isError) {
        console.log(message)
      }
      // console.log(courses)
  
      
      //console.log("Dispatched!")
     
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