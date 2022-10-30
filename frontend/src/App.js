import { BrowserRouter as Router, Routes, Route} from
'react-router-dom'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header'; 
import Dashboard from './pages/dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import Admin from './pages/Admin';
import Trainee from './pages/Trainee';
import Courses from './pages/Courses';
import AddCourse from './pages/AddCourse'
import SearchCourses from './pages/SearchCourses';
import ViewCourses from './pages/ViewCourses';
function App() {
  return (
    <>
    <Router>
    <div className='container'>
      <Header />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/trainee' element={<Trainee />} />
        <Route path='/courses' element={<SearchCourses />} />
        <Route path='/addcourse' element={<AddCourse />} />
        <Route path='/viewcourse/:title' element={<ViewCourses />} />
        {/* <Route path='/courses' element={<SearchCourses />} /> */}
        
      </Routes>
    </div>
    </Router>
    <ToastContainer/>
    </>
  );
}

export default App;
