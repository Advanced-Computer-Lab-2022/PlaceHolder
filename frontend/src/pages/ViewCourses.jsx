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

function ViewCourses(){
    const title = useParams();
    console.log(title.title)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {user} = useSelector((state) => state.auth)
    const { courses, isLoading, isError, message } = useSelector(
      (state) => state.courses
    )
     
    useEffect(() => {
      if (isError) {
        console.log(message)
      }
  
      
  
      dispatch(getCoursePage(title.title))
      
      return () => {
        dispatch(reset())
      }
    }, [user, navigate, isError, message, dispatch])
  
    if (isLoading) {
      return <Spinner />
    }

    
    console.log(courses)
    return (
        <div className='goal'>
        <h1>
            Course Title : {courses.title}
        </h1>
        <h2>
            Subtitles : {courses.subtitles}
        </h2>
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
      )
}

export default ViewCourses