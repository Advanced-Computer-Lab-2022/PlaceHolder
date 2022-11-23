import React from 'react'
import {useEffect,useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {toast} from 'react-toastify'
import { forgotpass } from '../features/auth/authSlice'
import {FaSignInAlt} from 'react-icons/fa'


function ForgotPassword() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [FormData, setFormData] = useState({
        email:'',
        
    })
    const {email} = FormData
    

    useEffect(() => {

        

    },[navigate])

    const onChange = (e) => {
        setFormData((prevState)=> ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }
    const onSubmit = (e) => {
        e.preventDefault()
        const userData = {
            email,
            
        }

        dispatch(forgotpass(userData))
        navigate('/')
        toast.success('Please Check Your Email')
    }
    
  return (
    <>
    <section className='heading'> 
    <h1>
            <FaSignInAlt/> Forgot Password
    </h1>
        <p>
            Please Enter Your Email
        </p>
    </section>

    <section className='form'>
        <form onSubmit={onSubmit}>
            <div className="form-group">
            <input type="text" className="form-control" id='email' name='email' value={email} placeholder='Enter your email' onChange={onChange}/>
            </div>
            
            
            
            <div className="form-group">
                <button type='submit' className='btn btn-block'>Submit</button>
            </div>
        </form>
           

    </section>
    
    
    </>



    
  )
}

export default ForgotPassword