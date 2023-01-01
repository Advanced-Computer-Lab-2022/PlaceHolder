import React from 'react'
import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {toast} from 'react-toastify'
import {refreshuser} from '../features/auth/authSlice'
import {getMostPop,reset} from '../features/courses/courseSlice'
import Item from "../components/JS/Carousel"
import Carousel from "react-elastic-carousel"
import Logo from "../components/img/women2.jpg"
import Women1 from "../components/img/women1.png"


function dashboard() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const breakPoints = [
      { width: 1, itemsToShow: 1 },
      { width: 550, itemsToShow: 2 },
      { width: 768, itemsToShow: 3 },
      { width: 1200, itemsToShow: 4 },
    ];

    const {courses} = useSelector((state) => state.courses)
    useEffect(() => {
      dispatch(getMostPop())

      return () => {
        dispatch(reset())
      }
      

  },[])

  function gotocourse(course){
    navigate('/viewcourse/'+course.title)
  }
  
 
  return (
    <>
    {(courses != null)?(<>
        <div class="container-fluid py-5 my-5 px-0">
        <div class="text-center mx-auto wow fadeIn" data-wow-delay="0.1s">
            <p class="fw-medium text-uppercase text-primary mb-2">Our Courses</p>
            <h1 class="display-5 mb-5">See Our Most Popular Courses</h1>
        </div>
        </div>
      <div className='container'>
        <Carousel breakPoints={breakPoints}>
          {courses.map((course)=>{
            return(<>
            <Item><img src={course.thumbnail} height={250} width={355} onClick={()=>gotocourse(course)}></img></Item>
            </>)
          })}
          
        </Carousel>
      </div>
      <div class="container-xxl py-5">
        <div class="container">
            <div class="row g-5">
                <div class="col-lg-6">
                    <div class="row gx-3 h-100">
                        <div class="col-6 align-self-start wow fadeInUp" data-wow-delay="0.1s">
                            <img class="img-fluid" src={Logo}/>
                        </div>
                        <div class="col-6 align-self-end wow fadeInDown" data-wow-delay="0.1s">
                            <img class="img-fluid" src={Women1}/>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                    <p class="fw-medium text-uppercase text-primary mb-2">About Us</p>
                    <h1 class="display-5 mb-4">We are trying to fully digitalize learning</h1>
                    <p class="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et
                        eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
                    </p>
                    <div class="d-flex align-items-center mb-4">
                        <div class="flex-shrink-0 bg-primary p-4">
                            <h1 class="display-2">15</h1>
                            <h5 class="text-white">Years of</h5>
                            <h5 class="text-white">Experience</h5>
                        </div>
                        <div class="ms-4">
                            <p><i class="fa fa-check text-primary me-2"></i>Computer Science</p>
                            <p><i class="fa fa-check text-primary me-2"></i>Photography</p>
                            <p><i class="fa fa-check text-primary me-2"></i>Engineering</p>
                            <p><i class="fa fa-check text-primary me-2"></i>Law</p>
                            <p class="mb-0"><i class="fa fa-check text-primary me-2"></i>much more..</p>
                        </div>
                    </div>
                    <div class="row pt-2">
                        <div class="col-sm-6">
                            <div class="d-flex align-items-center">
                                <div class="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                                    <i class="fa fa-envelope-open text-white"></i>
                                </div>
                                <div class="ms-3">
                                    <p class="mb-2">Email us</p>
                                    <h5 class="mb-0">info@learnmore.com</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="d-flex align-items-center">
                                <div class="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                                    <i class="fa fa-phone-alt text-white"></i>
                                </div>
                                <div class="ms-3">
                                    <p class="mb-2">Call us</p>
                                    <h5 class="mb-0">+012 345 6789</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="container-fluid facts my-5 p-5">
        <div class="row g-5">
            <div class="col-md-6 col-xl-3 wow fadeIn" data-wow-delay="0.1s">
                <div class="text-center border p-5">
                    <i class="fa fa-certificate fa-3x text-white mb-3"></i>
                    <h1 class="display-2 text-primary mb-0" data-toggle="counter-up">15</h1>
                    <span class="fs-5 fw-semi-bold text-white">Years Experience</span>
                </div>
            </div>
            <div class="col-md-6 col-xl-3 wow fadeIn" data-wow-delay="0.3s">
                <div class="text-center border p-5">
                    <i class="fa fa-users-cog fa-3x text-white mb-3"></i>
                    <h1 class="display-2 text-primary mb-0" data-toggle="counter-up">100+</h1>
                    <span class="fs-5 fw-semi-bold text-white">Instructors</span>
                </div>
            </div>
            <div class="col-md-6 col-xl-3 wow fadeIn" data-wow-delay="0.5s">
                <div class="text-center border p-5">
                    <i class="fa fa-users fa-3x text-white mb-3"></i>
                    <h1 class="display-2 text-primary mb-0" data-toggle="counter-up">9507+</h1>
                    <span class="fs-5 fw-semi-bold text-white">Students</span>
                </div>
            </div>
            <div class="col-md-6 col-xl-3 wow fadeIn" data-wow-delay="0.7s">
                <div class="text-center border p-5">
                    <i class="fa fa-check-double fa-3x text-white mb-3"></i>
                    <h1 class="display-2 text-primary mb-0" data-toggle="counter-up">200+</h1>
                    <span class="fs-5 fw-semi-bold text-white">Courses</span>
                </div>
            </div>
        </div>
    </div>
    
    </>):(<></>)}
   
</>
  )
}

export default dashboard