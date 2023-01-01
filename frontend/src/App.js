import React from 'react'
import { BrowserRouter as Router, Routes, Route} from
'react-router-dom'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import Header from './components/Header'; 
import Dashboard from './pages/dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import Admin from './pages/Admin';
import Instructor from './pages/Instructor';
import Trainee from './pages/Trainee';
import Courses from './pages/Courses';
import AddCourse from './pages/AddCourse'
import SearchCourses from './pages/SearchCourses';
import ViewMyCoursesIns from './pages/ViewMyCoursesIns'
import ViewMyCoursesTrainee from './pages/ViewMyCoursesTrainee'
import AdminRegister from './pages/AdminRegister';
import ViewCourses from './pages/ViewCourses';
import Tos from './pages/Tos'
import ViewMyProfile from './pages/ViewMyProfile';
import ForgotPassword from './pages/ForgotPassword';
import ViewMyRatingsIns from './pages/ViewMyRatingsIns'
import ManageCourseRequests from './pages/ManageCourseRequests'
import ManageReports from './pages/ManageReports'
import SeeMyReports from './pages/SeeMyReports'
import StripeContainer from './pages/StripeContainer'
import ManageRefunds from './pages/ManageRefunds'
import ManageDiscounts from './pages/ManageDiscounts'
import Footer from './components/Footer'

function App() {
  const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );
  
  return (
    <>
    <Router>
    <Header />
    
      
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/instructor' element={<Instructor />} />
        <Route path='/trainee' element={<Trainee />} />
        <Route path='/courses' element={<SearchCourses />} />
        <Route path='/addcourse' element={<AddCourse />} />
        <Route path='/viewmyCoursesIns' element={<ViewMyCoursesIns />} />
        <Route path='/viewmyCoursesTrainee' element={<ViewMyCoursesTrainee />} />
        <Route path='/newusers' element={<AdminRegister />} />
        <Route path='/viewcourse/:title' element={<ViewCourses />} />
        <Route path='/pay/:title' element={<StripeContainer />} />
        <Route path='/tos' element={<Tos />} />
        <Route path='/me' element={<ViewMyProfile />} />
        <Route path='/viewmyRatingsIns' element={<ViewMyRatingsIns />} />
        {/* <Route path='/courses' element={<SearchCourses />} /> */}
        <Route path='/forgotpassword' element={<ForgotPassword />} />
        <Route path='/manageRequests' element={<ManageCourseRequests />} />
        <Route path='/manageReports' element={<ManageReports />} />
        <Route path='/manageRefunds' element={<ManageRefunds />} />
        <Route path='/manageDiscounts' element={<ManageDiscounts />} />
        <Route path='/viewMyReports' element={<SeeMyReports/>} />
      </Routes>
      <Footer/>
    </Router>
    <ToastContainer/>
    </>
  );
}

export default App;
