import {FaSignInAlt, FaSignOutAlt, FaUser, FaBook , FaBookOpen, FaUserPlus , FaStar} from 'react-icons/fa'
import React from 'react'
import {Link , useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {logout , reset} from '../features/auth/authSlice'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'


function Header() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {user} = useSelector((state) => state.auth)

    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
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
  return (
    
    <header class="p-1 text-bg-dark">

        <div className='container-m '>
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                <img src='https://i.ibb.co/QD8SrHQ/pngfind-com-learning-png-656188.png' width='150' height='40'></img>
                </a>
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <li><a href='/courses' class="nav-link px-2 text-white"><FaBook/>Courses</a></li>
                {user && (user.role =="instructor") ? (
                    <li><a href='/addcourse' class="nav-link px-2 text-white">
                    <FaBookOpen/> Add Course
                </a></li>
                        
                    ): (<></>)}
                {user && (user.role =="admin") ? (
                    <li><a href='/newusers' class="nav-link px-2 text-white">
                     <FaUserPlus/>Add New Users
                </a></li>
                        
                    ): (<></>)}
                {user && (user.role =="instructor") ? (<>
                    <li><a href='/viewmyCoursesIns'  class="nav-link px-2 text-white"> 
                    <FaBook/> View My Courses
                    </a></li>

                    <li><a href='/viewmyRatingsIns'  class="nav-link px-2 text-white"> 
                    <FaStar/> View My Ratings
                    </a></li>
                    </>  
                    ): (<></>)}
                          
                    
                </ul>
                <div class="text-end">
                {user ? (<>
                    <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                            <li><a href='/me'  class="nav-link px-2 text-white">
                            <FaUser/>{user.username}
                            </a></li>
                            <li><button type="button" class="btn btn-warning" onClick={onLogout}>Logout</button></li>
                         </ul>   
                        </>
                        
                    ) : (<>
                    <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li><button type="button" class="btn btn-warning me-2" onClick={loginnow}>
                             Login
                        </button>
                        </li>
                        
                    
                        <li><button type="button" class="btn btn-warning me-2" onClick={registerme}>
                             Sign-up
                        </button>
                        </li>
                        </ul>
                    </>)}
                    
                    
                </div>
                {/* <div className="col" style={mystyle}>
                    <Link to='/courses'>
                    <FaBook/>Courses</Link> 
                    
                </div> */}
                {/* <div className="col" style={mystyle}>
                    {user && (user.role =="instructor") ? (
                        <Link to='/addcourse'>
                        <FaBookOpen/> Add Course
                    </Link>
                    ): (<></>)}
                </div> */}
                {/* <div className="col" style={mystyle}>
                            {user && (user.role =="admin") ? (
                        <Link to='/newusers'>
                        <FaUserPlus/> Add New Users
                    </Link>
                    ): (<></>)}
                </div> */}
                {/* <div className="col" style={mystyle}>
                            {user && (user.role =="instructor") ? (
                        <Link to='/viewmyCoursesIns'>
                        <FaBook/> View My Courses
                    </Link>
                    ): (<></>)}
                </div>                 */}
                {/* <div className="col" style={mystyle}>
                            {(user) ? (
                        <Link to='/me'>
                        <FaUser/> {user.username}
                    </Link>
                    ): (<></>)}    
                </div>                 */}
                {/* <div className="col" style={mystyle}>
                            {user ? (
                        
                        
                        
                        
                        <button className='btn' onClick={onLogout}>
                            <FaSignOutAlt/> Logout
                            </button>
                        
                    ) : (<>
                        
                        <Link to='/login'>
                            <FaSignInAlt/> Login
                        </Link>
                    
                    
                        <Link to='/register'>
                            <FaUser/> Register
                        </Link>
                    </>)}
             
                </div>                 */}
            
            
            </div>
            
        </div>
    </header>
  )
}

export default Header