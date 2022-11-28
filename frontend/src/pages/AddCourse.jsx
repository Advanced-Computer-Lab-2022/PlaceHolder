import React from 'react'
import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector } from 'react-redux'
import {toast} from 'react-toastify'
import CourseForm from '../components/CourseForm'
import { v4 as uuidv4 } from "uuid";
import SubjectData from "../components/CountryData.json";



function Courses() {
    const navigate = useNavigate()


    const {user} = useSelector((state) => state.auth)
    

    useEffect(() => {
      if(!user){
        navigate('/login')
        toast.error('Please Log In First!')
    }else if(user.role !== "instructor"){
        toast.error('not Authorized!')
        navigate('/'+user.role)
        
    }

    },[user,navigate])


  return ( <>
      
        
      <div className="container"><br></br><CourseForm/></div>
      



    
    </>
  )
}

export default Courses