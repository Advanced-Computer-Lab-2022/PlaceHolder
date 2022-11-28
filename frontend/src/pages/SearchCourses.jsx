import React from 'react'
import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector , useDispatch} from 'react-redux'
import {toast} from 'react-toastify'
import CourseItem from '../components/CourseItem'
import Spinner from '../components/Spinner'
import { getCourses, reset } from '../features/courses/courseSlice'
import axios from 'axios'
import { useState } from 'react'
import {FaArrowUp , FaArrowDown} from 'react-icons/fa'
import { v4 as uuidv4 } from "uuid";
import SubjectData from "../components/SubjectData.json";


function SearchCourses() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {user} = useSelector((state) => state.auth)
    const { courses, isLoading, isError, message } = useSelector(
      (state) => state.courses
    )


      const [subjects , setSubject] = useState(SubjectData);
      const [searchSubject, setSearchSubject] = useState();
     const[courses1 , setCourses] = useState(courses);
     const[refresher,setrefresher] = useState();
     
     
     
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


    function filterContent1(courses, searchTerm){
        
        const result = courses.filter((course) => course.title.includes(searchTerm))
        
        return setCourses(result)
        
    }

    function filterContent2(courses, searchTerm){
      
      const result = courses.filter((course) => course.subject.includes(searchTerm))
      
      return setCourses(result)
      
  }

  function filterContent3(courses, searchTerm){
    
    const result = courses.filter((course) => course.instructorName.includes(searchTerm))
    
    return setCourses(result)
    
}


const sort_by = (field, reverse, primer) => {

  const key = primer ?
    function(x) {
      return primer(x[field])
    } :
    function(x) {
      return x[field]
    };

  reverse = !reverse ? 1 : -1;

  return function(a, b) {
    return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
  }
}

    
  const SortPriceAscending = (e) => {

   
    console.log(courses)
      let array1 = [
        ...courses,
      ]
      console.log(array1)
      var sorted = array1.sort(sort_by('price', false, parseInt))
      console.log(sorted)
      setCourses(sorted)







  }

  const SortRatingAscending = (e) => {

   
    console.log(courses)
      let array1 = [
        ...courses,
      ]
      console.log(array1)
      var sorted = array1.sort(sort_by('courseRating', false, parseInt))
      console.log(sorted)
      setCourses(sorted)







  }

  const SortPriceDescending = (e) => {

   
    console.log(courses)
      let array1 = [
        ...courses,
      ]
      console.log(array1)
      var sorted = array1.sort(sort_by('price', true, parseInt))
      console.log(sorted)
      setCourses(sorted)







  }

  const SortRatingDescending = (e) => {

   
    console.log(courses)
      let array1 = [
        ...courses,
      ]
      console.log(array1)
      var sorted = array1.sort(sort_by('courseRating', true, parseInt))
      console.log(sorted)
      setCourses(sorted)







  }









   const  handleSearcher1 = (e) => {
      const searchTerm = e.currentTarget.value
     
      axios.get('/courses/').then((res) => {
        if(res.data) {
          
          filterContent1(res.data, searchTerm)
        }
      })
    }


    const  handleSearcher2 = (e) => {
      setSearchSubject(e.target.value)
      const searchTerm = e.currentTarget.value
     
      axios.get('/courses/').then((res) => {
        if(res.data) {
          
          filterContent2(res.data, searchTerm)
        }
      })
    }

    const  handleSearcher3 = (e) => {
      const searchTerm = e.currentTarget.value
     
      axios.get('/courses/').then((res) => {
        if(res.data) {
          
          filterContent3(res.data, searchTerm)
        }
      })

      
    }
    function refreshe1r(courses){
      if(courses==null || getlength(courses)==1){
        setrefresher(courses)
        refreshe1r(courses)
      }
    }
    
   function getlength(courses){
    let x =0
    if(courses == null){
      return 0
    }else{
      courses.map((course)=>{
        x++
      })
      return x
    }



   } 


  return (<>
    
    {/* {
      
      refreshe1r(courses)
    } */}
    <>
    {(courses!=null) ? (<>
  
      <section className='heading'>
      <h1>
        All Availble Courses
        </h1>
        
      </section>
      <div>
          Filter by Price : <button onClick={SortPriceAscending}><FaArrowUp/></button>   <button onClick={SortPriceDescending}><FaArrowDown/></button>

      </div>

      <div>
          Filter by Rating : <button onClick={SortRatingAscending}><FaArrowUp/></button>   <button onClick={SortRatingDescending}><FaArrowDown/></button>

      </div>

      <div>
        Search By Title:
        <input type="text" className="form-control" id='search' name='search' placeholder='Search Courses' onChange={handleSearcher1}/>
      </div>

      <div>
        Search By Subject:
        {/* <input type="text" className="form-control" id='search' name='search' placeholder='Search Courses' onChange={handleSearcher2}/> */}
        <select className="form-control" id='subject' name='subject' onChange={handleSearcher2} value={searchSubject}>

                    <option value="" hidden>
                         Please Select Subject
                    </option>
                    {
                        subjects.map((item) => {
                        return (
                            <option key={uuidv4()} value={item.subject}>
                                {item.subject}
                    </option>
                                 );
                                                 })
                     }          
            
                     </select>
      </div>

      <div>
        Search By Instructor:
        <input type="text" className="form-control" id='search' name='search' placeholder='Search Courses' onChange={handleSearcher3}/>
      </div>

      <div class="album py-5 bg-light">
              <div class="container ">
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {(courses1.length > 0)   ? (<>
          
                  {courses1.map((course) => (
                    <CourseItem key={course._id} course={course} />
                  ))}
                
                </>
        ) : ((courses!=null) ? ((Array.isArray(courses)?(<>
        {courses.map((course) => (
          <CourseItem key={course._id} course={course} />
        ))}
      </>):(<></>))) : (<></>)
          
        )}
        </div>
              </div>
          </div>
      

    
    </>) : (<></>)}
  
    </>
    </>
  )
}

export default SearchCourses