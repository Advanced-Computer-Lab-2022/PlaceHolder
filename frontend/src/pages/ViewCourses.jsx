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

function ViewCourses(){
    const title = useParams();
    console.log(title.title)
    var tile = title.title
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
      // console.log(courses)
  
      
      console.log("Dispatched!")
      dispatch(getCoursePage(title.title))
      
      return () => {
        dispatch(reset())
      }
    }, [user, navigate, isError, message, dispatch])
  
    if (isLoading) {
      return <Spinner />
    }

    
    
    return (<>
      {(courses.title !=null) ? (<div className='goal'>
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
                  Video URL : {v.url}
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
      </div>) : (<></>)}
      </>
      )
}

export default ViewCourses