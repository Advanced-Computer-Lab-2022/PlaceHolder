import React from 'react'
import {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import {FaUser} from 'react-icons/fa'
import {register, reset} from '../features/auth/authSlice'
import Spinner from '../components/Spinner'






function Register() {
    const [FormData, setFormData] = useState({
        username: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        password2: '',
        gender: '',
        country: '',
    })

    const {username,firstName,lastName,email,password,password2,gender,country} = FormData

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {user,isLoading, isError, isSuccess, message} = useSelector(
        (state) => state.auth
    )

        useEffect(() => {
            if(isError){
                toast.error(message)
            }

            if(isSuccess || user){
                navigate('/' + user.role)
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

        if(password !== password2){
            toast.error('Passwords do not match')
        } else{
            const userData = {
                username,
                firstName,
                lastName,
                email,
                password,
                gender,
                country,
            }


            dispatch(register(userData))
        }
    }

    if(isLoading){
        return <Spinner/>
    }

  return (
    <>
    <section className='heading'> 
    <h1>
            <FaUser/> Register
    </h1>
        <p>
            Please create an account
        </p>
    </section>

    <section className='form'>
        <form onSubmit={onSubmit}>
        
            <div className="form-group">
            <input type="text" className="form-control" id='username' name='username' value={username} placeholder='Enter your name' onChange={onChange}/>
            </div>
            <div className="form-group">
            <input type="text" className="form-control" id='firstName' name='firstName' value={firstName} placeholder='Enter your first name' onChange={onChange}/>
            </div>
            <div className="form-group">
            <input type="text" className="form-control" id='lastName' name='lastName' value={lastName} placeholder='Enter your last name' onChange={onChange}/>
            </div>
            <div className="form-group">
            <input type="text" className="form-control" id='email' name='email' value={email} placeholder='Enter your email' onChange={onChange}/>
            </div>
            <div className="form-group">
            <input type="password" className="form-control" id='password' name='password' value={password} placeholder='Enter your password' onChange={onChange}/>
            </div>
            <div className="form-group">
            <input type="password" className="form-control" id='password2' name='password2' value={password2} placeholder='Confirm your password' onChange={onChange}/>
            </div>
            <div className="form-group">
            <input type="text" className="form-control" id='gender' name='gender' value={gender} placeholder='Enter your gender' onChange={onChange}/>
            </div>
            <div className="form-group">
            <input type="text" className="form-control" id='country' name='country' value={country} placeholder='Enter your country' onChange={onChange}/>
            </div>
            <div className="form-group">
                <button type='submit' className='btn btn-block'>Sumbit</button>
            </div>
        
        </form>
    </section>
    
    
    
    
    
    </>
  )
}

export default Register