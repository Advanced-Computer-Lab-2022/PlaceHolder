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
import "../components/Styling/Stars.css"


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
     const[courses1 , setCourses] = useState();
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
        
      var result1 = []
      console.log(searchTerm)
      if(searchTerm==''){
        result1 = courses
      }
      const result = courses.map((course)=>{
          if(course.title == searchTerm | course.instructorName == searchTerm){
            if(result1==null){
              result1 = course
            }else{
              result1.push(course)
            }
          }
      })
      
        return setCourses(result1)
        
    }

    function filterContent2(courses, searchTerm){
      
      var result1 = []
      const result = courses.map((course)=>{
          if(course.subject == searchTerm){
            if(result1==null){
              result1 = course
            }else{
              result1.push(course)
            }
          }
      })
      
      return setCourses(result1) 
      
  }

  function filterContent3(courses, searchTerm){
    
    const result = courses.filter((course) => course.instructorName.includes(searchTerm))
    
    return setCourses(result)
    
}

function filterContent4(courses, searchTerm){
  var result1 = []
  const result = courses.map((course)=>{
      if(Number(course.courseRating)>=searchTerm){
        if(result1==null){
          result1 = course
        }else{
          result1.push(course)
        }
      }
  })
  
  return setCourses(result1)
  
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
   const handleRating = (e) =>{
    const rate = e.currentTarget.value
   
    axios.get('/courses/').then((res) => {
      if(res.data) {
        
        filterContent4(res.data, rate)
      }
    })
  }


  return (<>
    
    {/* {
      
      refreshe1r(courses)
    } */}
    <>
    {(courses!=null) ? (<>
  
      {/* <section className='heading'>
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
        {/* <select className="form-control" id='subject' name='subject' onChange={handleSearcher2} value={searchSubject}>

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
      </div> */}
      <div className="container mt-5">
         <div className="row">
            <div className="col-md-2 border">
                <section>
                    <section id="filters" data-auto-filter="true">
                      <h5>Filters</h5>
                      <section className="mb-4">
                  <h6 className="font-weight-bold mb-3">Course Rating</h6>

                  <div class="rating"> 
                  <input type="radio" name="rating" value="5" id="5" onChange={handleRating}/><label for="5">☆</label> 
                  <input type="radio" name="rating" value="4" id="4" onChange={handleRating}/><label for="4">☆</label> 
                  <input type="radio" name="rating" value="3" id="3" onChange={handleRating}/><label for="3">☆</label> 
                  <input type="radio" name="rating" value="2" id="2" onChange={handleRating}/><label for="2">☆</label> 
                  <input type="radio" name="rating" value="1" id="1" onChange={handleRating}/><label for="1">☆</label>
                </div>
                <h6 className="font-weight-bold mb-3">Subject</h6>
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
                    <br></br>
                    <h6 className="font-weight-bold mb-3">Search</h6>      
                    <input type="text" className="form-control" id='search' name='search' placeholder='Search Courses' onChange={handleSearcher1}/>
                    <br></br>
                    <h6 className="font-weight-bold mb-3">Price</h6>
                    
                </section>
                    </section>
                </section>    
            </div>
            <div className="col-md-10">
                      <div class="album py-5 bg-light">
                        <div class="container ">
                          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                  {(courses1!=null)   ? (<>
                            {console.log(courses1)}
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


            </div>
               
         </div>
      
      </div> 
                     
      
      

    
    </>) : (<></>)}
  
    </>
    </>
  )
}

export default SearchCourses