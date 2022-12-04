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
    <section class="vh-100 gradient-custom">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card bg-dark text-white" >
          <div class="card-body p-5 text-center">

            <div class="mb-md-5 mt-md-4 pb-5">

              <h2 class="fw-bold mb-2 text-uppercase">Reset Your Password</h2>
              <p class="text-white-50 mb-5">Please enter your Email </p>

              <div class="form-outline form-white mb-4">
                <input type="text" class="form-control form-control-lg" id='email' name='email' value={email} placeholder='Enter your email' onChange={onChange}/>
                
              </div>


              

              <button class="btn btn-outline-light btn-lg px-5" type="submit" onClick={onSubmit}>Reset Password</button>

              

            </div>

            

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    {/* <section className='heading'> 
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
           

    </section> */}
    
    
    </>



    
  )
}

export default ForgotPassword