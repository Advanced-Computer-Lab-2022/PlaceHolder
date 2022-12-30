import React from 'react'
import {useState, useEffect} from 'react'
import {FaSignInAlt} from 'react-icons/fa'
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import {login,reset12} from '../features/auth/authSlice'
import Spinner from '../components/Spinner'





function Login() {
    const [FormData, setFormData] = useState({
        username: '',
        password: '',
        
    })

    const {username,password} = FormData

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {user,isLoading, isError, isSuccess, message} = useSelector(
        (state) => state.auth
    )

    useEffect(() => {
        if(isError){
            toast.error(message)    
        }
        if(user && user.toscheck=='false'){
            navigate('/tos')
        }else{
        if(isSuccess || user && user.role == "admin"){
            navigate('/admin')   
        }
        else if(isSuccess || user && user.role == "instructor"){
            navigate('/instructor')
        }
        else if(isSuccess || user){
            navigate('/trainee')
        }
        }

        dispatch(reset12())

    }, [user, isError, isSuccess, message, navigate, dispatch])

    const onChange = (e) => {
        setFormData((prevState)=> ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }
    

    const onSubmit = (e) => {
        e.preventDefault()
        const userData = {
            username,
            password
        }

        dispatch(login(userData))
    }
    if(isLoading){
        return <Spinner/>
    }

    function forgotpassword(){
        navigate('/forgotpassword')
    } 

  return (
    <>
    <section class="vh-100 gradient-custom">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card bg-dark text-white" >
          <div class="card-body p-5 text-center">

            <div class="mb-md-5 mt-md-4 pb-5">

              <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
              <p class="text-white-50 mb-5">Please enter your login and password!</p>

              <div class="form-outline form-white mb-4">
                <input type="text" id="username" name="username" class="form-control form-control-lg" value={username} placeholder='Enter your name' onChange={onChange}/>
                
              </div>

              <div class="form-outline form-white mb-4">
                <input type="password" id="password" name="password" class="form-control form-control-lg" value={password} placeholder='Enter your password' onChange={onChange}/>
                
              </div>

              <p class="small mb-5 pb-lg-2"><a class="text-white-50" href="/forgotpassword">Forgot password?</a></p>

              <button class="btn btn-outline-light btn-lg px-5" type="submit" onClick={onSubmit}>Login</button>

              <div class="d-flex justify-content-center text-center mt-4 pt-1">
                <a href="#!" class="text-white"><i class="fab fa-facebook-f fa-lg"></i></a>
                <a href="#!" class="text-white"><i class="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                <a href="#!" class="text-white"><i class="fab fa-google fa-lg"></i></a>
              </div>

            </div>

            <div>
              <p class="mb-0">Don't have an account? <a href="/register" class="text-white-50 fw-bold">Sign Up</a>
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    {/* <section className='heading'> 
    <h1>
            <FaSignInAlt/> Login
    </h1>
        <p>
            Please Login
        </p>
    </section>

    <section className='form'>
        <form onSubmit={onSubmit}>
            <div className="form-group">
            <input type="text" className="form-control" id='username' name='username' value={username} placeholder='Enter your name' onChange={onChange}/>
            </div>
            
            <div className="form-group">
            <input type="password" className="form-control" id='password' name='password' value={password} placeholder='Enter your password' onChange={onChange}/>
            </div>
            
            <div className="form-group">
                <button type='submit' className='btn btn-block'>LogIn</button>
            </div>
        </form>
            <div>
                <button onClick={forgotpassword}>Forgot password?</button>
            </div>

    </section>
     */}
    
    
    
    
    </>
  )
}

export default Login