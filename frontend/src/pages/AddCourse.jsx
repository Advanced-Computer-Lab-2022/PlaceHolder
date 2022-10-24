import React from 'react'
import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {toast} from 'react-toastify'
import CourseForm from '../components/CourseForm'


function Courses() {
    const navigate = useNavigate()

    const {user} = useSelector((state) => state.auth)

    useEffect(() => {

        

    },[user,navigate])


  return ( <>
      <section className='heading'>
      <h1>
        Add a new course
        </h1>
        
      </section>
      <CourseForm/>



    
    </>
  )
}

export default Courses