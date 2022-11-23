import React from 'react'
import {useState, useEffect} from 'react'
import {FaSignInAlt} from 'react-icons/fa'
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import {login, reset} from '../features/auth/authSlice'
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

        dispatch(reset())

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
    <section className='heading'> 
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
    
    
    
    
    
    </>
  )
}

export default Login