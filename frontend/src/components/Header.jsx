import {FaSignInAlt, FaSignOutAlt, FaUser, FaBook , FaBookOpen, FaUserPlus , FaStar, FaClipboardList, FaCashRegister, FaPercentage} from 'react-icons/fa'
import React from 'react'
import {Link , useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {logout , reset12} from '../features/auth/authSlice'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import "./lib/animate/animate.min.css"
import "./lib/owlcarousel/assets/owl.carousel.min.css"
import ".//css/bootstrap.min.css"
import ".//css/style.css"



function Header() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {user} = useSelector((state) => state.auth)

    const onLogout = () => {
        dispatch(logout())
        dispatch(reset12())
        navigate('/')
    }

   
    const mystyle = {
        backgroundColor: "DodgerBlue",
        padding: "1rem",
        border: "2px solid white",
    };

    const loginnow = () =>{
        navigate('/login')
    }
    const registerme = () =>{
        navigate('/register')
    }

    const gotocourses = () =>{
        navigate('/courses')
    }

    const gotoUserHomePage = () =>{
        navigate('/'+user.role)
    }
  return (<>
    
    <link href="img/favicon.ico" rel="icon"/>

    
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
    <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600&family=Rubik:wght@500;600;700&display=swap"
        rel="stylesheet"/>

    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet"/>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet"/>

    
    <link href="lib/animate/animate.min.css" rel="stylesheet"/>
    <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet"/>

    
    <link href="css/bootstrap.min.css" rel="stylesheet"/>

    
    <link href="css/style.css" rel="stylesheet"></link>

    <nav class="navbar navbar-expand-lg bg-white navbar-light sticky-top py-0 pe-5">
        <a onClick={gotoUserHomePage} class="navbar-brand ps-5 me-0">
            <h1 class="text-white m-0">LearnMore.</h1>
        </a>
        <button type="button" class="navbar-toggler me-0" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav ms-auto p-4 p-lg-0">
                {(user && (user.role == "corporate trainee" | user.role == "trainee"))?(<>
                    <div class="nav-item dropdown">
                    <a href="/courses" onClick={gotocourses} class="nav-link dropdown-toggle" data-bs-toggle="dropdown"><FaBook/>Courses</a>
                    <div class="dropdown-menu  m-0">
                        <a href="/viewmyCoursesTrainee" class="dropdown-item"><FaBookOpen/>My Courses</a>
                        
                    </div>
                </div>
                <a href="/me" class="nav-item nav-link"><FaUser/>{user.username}</a>
                </>):(<>
                    
                </>)}
                
                {(user &&(user.role == "trainee"))?(<>
                    <div class="nav-item dropdown">
                    <a   class="nav-link dropdown-toggle" data-bs-toggle="dropdown"><FaBook/>Services</a>
                    <div class="dropdown-menu  m-0">
                        <a href="/viewMyReports" class="dropdown-item"><FaClipboardList/>My Reports</a>
                        
                    </div>
                </div>
                <a href="/me" class="nav-item nav-link"><FaUser/>{user.username}</a>
                </>):(<></>)}

                {(user && (user.role == "admin"))?(<>
                    <a href="/courses" class="nav-item nav-link"><FaBook/>Courses</a>
                    <div class="nav-item dropdown">
                    <a  class="nav-link dropdown-toggle" data-bs-toggle="dropdown"><FaBook/>Services</a>
                    <div class="dropdown-menu  m-0">
                        <a href="/newusers" class="dropdown-item"><FaUserPlus/>Add New Users</a>
                        <a href="/manageRequests" class="dropdown-item"><FaBook/>Manage Course Requests</a>
                        <a href="/manageReports" class="dropdown-item"><FaClipboardList/>Manage Reports</a>
                        <a href="/manageRefunds" class="dropdown-item"><FaCashRegister/>Manage Refunds</a>
                        <a href="/manageDiscounts" class="dropdown-item"><FaPercentage/>Manage Discounts</a>
                    </div>
                </div>
                <a href="/me" class="nav-item nav-link"><FaUser/>{user.username}</a>
                </>):(<></>)}
                {(user && (user.role == "instructor"))?(<>
                    <div class="nav-item dropdown">
                    <a href="/courses" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"><FaBook/>Courses</a>
                    <div class="dropdown-menu  m-0">
                        <a href="/viewmyCoursesIns" class="dropdown-item"><FaBookOpen/>My Courses</a>
                        <a href="/addcourse" class="dropdown-item"><FaBookOpen/> Add Course</a>
                        
                    </div>
                </div>
                <div class="nav-item dropdown">
                    <a  class="nav-link dropdown-toggle" data-bs-toggle="dropdown"><FaBook/>Services</a>
                    <div class="dropdown-menu  m-0">
                        <a href="/viewMyReports" class="dropdown-item"><FaClipboardList/>My Reports</a>
                        <a href="/viewmyRatingsIns" class="dropdown-item"><FaStar/> View My Ratings</a>

                    </div>
                </div>
                <a href="/me" class="nav-item nav-link"><FaUser/>{user.username}</a>      
                </>):(<></>)}
                {!user ? (<>
                    <a href="/courses" class="nav-item nav-link"><FaBook/>Courses</a>

                </>):(<></>)}
            </div>
            {user ? (<>
                <a class="btn btn-primary px-3 d-none d-lg-block" onClick={onLogout}>Logout</a>
            </>):(<>
                <a class="btn btn-primary px-3 d-none d-lg-block" onClick={loginnow}>Login</a>
                &nbsp;
                &nbsp;
                 <a  class="btn btn-primary px-3 d-none d-lg-block" onClick={registerme}>Sign-Up</a>
            </>)}
            
        </div>
    </nav>
    </>
    
  )
}

export default Header