import { BrowserRouter as Router, Routes, Route} from
'react-router-dom'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header'; 
import Dashboard from './pages/dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import Admin from './pages/Admin';
import Instructor from './pages/Instructor';
import Trainee from './pages/Trainee';
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
        <Route path='/instructor' element={<Instructor />} />
        <Route path='/trainee' element={<Trainee />} />
      </Routes>
    </div>
    </Router>
    <ToastContainer/>
    </>
  );
}

export default App;
