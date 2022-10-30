import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector , useDispatch} from 'react-redux'
import {toast} from 'react-toastify'
import CourseItem from '../components/CourseItem'
import Spinner from '../components/Spinner'
import { getCourses, reset } from '../features/courses/courseSlice'
import axios from 'axios'
import { useState } from 'react'
import CourseForm from '../components/CourseForm'

function ViewCourses(){
  
}

export default ViewCourses