import React from 'react'
import {useState, useEfffect} from 'react'
import {FaSignInAlt} from 'react-icons/fa'






function Login() {
    const [FormData, setFormData] = useState({
        username: '',
        password: '',
        
    })

    const {username,firstname,lastname,email,password,password2,gender,country} = FormData


    const onchange = (e) => {
        setFormData((prevState)=> ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()
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
        <form onSubmit={onSubmit}></form>
        <form>
            <div className="form-group">
            <input type="text" className="form-control" id='username' name='username' value={username} placeholder='Enter your name' onChange={onchange}/>
            </div>
            
            <div className="form-group">
            <input type="password" className="form-control" id='password' name='password' value={password} placeholder='Enter your password' onChange={onchange}/>
            </div>
            
            <div className="form-group">
                <button type='submit' className='btn btn-block'>LogIn</button>
            </div>
        </form>

    </section>
    
    
    
    
    
    </>
  )
}

export default Login