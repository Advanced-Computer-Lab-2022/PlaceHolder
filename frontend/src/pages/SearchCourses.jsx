import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector , useDispatch} from 'react-redux'
import {toast} from 'react-toastify'
import CourseItem from '../components/CourseItem'
import Spinner from '../components/Spinner'
import { getCourses, reset } from '../features/courses/courseSlice'
import axios from 'axios'
import { useState } from 'react'


function SearchCourses() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {user} = useSelector((state) => state.auth)
    const { courses, isLoading, isError, message } = useSelector(
      (state) => state.courses
    )
    //console.log(courses)
     const[courses1 , setCourses] = useState(courses);
     //setCourses(courses)
     console.log(courses1)
     
     //console.log(courses1)
    useEffect(() => {
      if (isError) {
        console.log(message)
      }
  
      
  
      dispatch(getCourses())
      
      return () => {
        dispatch(reset())
      }
    }, [user, navigate, isError, message, dispatch])
  
    if (isLoading) {
      return <Spinner />
    }


    function filterContent(courses, searchTerm){
        console.log(courses, searchTerm)
        const result = courses.filter((course) => course.title.includes(searchTerm))
        
        return setCourses(result)
        
    }











   const  handleSearcher = (e) => {
      const searchTerm = e.currentTarget.value
      console.log(searchTerm)
      axios.get('/courses/').then((res) => {
        if(res.data) {
          console.log('here')
          console.log(res.data)
          filterContent(res.data, searchTerm)
        }
      })
    }
  


  return ( 
  
  
  <>
  
      <section className='heading'>
      <h1>
        All Availble Courses
        </h1>
        
      </section>
      <div>
        <input type="text" className="form-control" id='search' name='search' placeholder='Search Courses' onChange={handleSearcher}/>
      </div>

      <section className='content'>
        {(courses1.length > 0)   ? (
          <div className='goals'>
            {courses1.map((course) => (
              <CourseItem key={course._id} course={course} />
            ))}
          </div>
        ) : (
          <h3>No Courses Availble</h3>
        )}
      </section>

    
    </>
  )
}

export default SearchCourses