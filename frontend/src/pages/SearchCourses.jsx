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
import ReactSlider from 'react-slider'
import MultiRangeSlider from "../components/multiRangeSlider/MultiRangeSlider";



import SubjectData from "../components/SubjectData.json";


function SearchCourses() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    var min1 = 0
    var max1 = 0;
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


function filterContent5(courses,min,max){
  console.log(min)
  console.log(max)
  var result1 = []
  const result = courses.map((course)=>{
      if(Number(course.price)>=min & Number(course.price)<=max){
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

  function SortByPriceHandler(){
    axios.get('/courses/').then((res) => {
      if(res.data) {
        
        filterContent5(res.data,min1,max1)
      }
    })
        
      
    
  }


  return (<>
    <>
    {(courses!=null) ? (<>
  
    
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
                    <h6 className="font-weight-bold mb-3">Sort Price<button type="button" onClick={SortByPriceHandler} class="btn btn-outline-secondary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                      </svg>
                  <span class="visually-hidden">Button</span>
                </button></h6>
                    <MultiRangeSlider
                          min={0}
                          max={1000}
                          onChange={({ min, max }) => {min1 =min 
                          max1 = max
                          }}
                        />
                      <br></br>
                      <br></br>
                      
                           
                      <button type="button" class="btn btn-secondary" onClick={SortPriceDescending}>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sort-down" viewBox="0 0 16 16">
                    <path d="M3.5 2.5a.5.5 0 0 0-1 0v8.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L3.5 11.293V2.5zm3.5 1a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM7.5 6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zm0 3a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z"></path>
                  </svg>
                   </button>
                   &nbsp;
                   <button type="button" class="btn btn-secondary" onClick={SortPriceAscending}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sort-up" viewBox="0 0 16 16">
                    <path d="M3.5 12.5a.5.5 0 0 1-1 0V3.707L1.354 4.854a.5.5 0 1 1-.708-.708l2-1.999.007-.007a.498.498 0 0 1 .7.006l2 2a.5.5 0 1 1-.707.708L3.5 3.707V12.5zm3.5-9a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM7.5 6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zm0 3a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z"></path>
                  </svg>
              </button>
                      
                        
                    
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