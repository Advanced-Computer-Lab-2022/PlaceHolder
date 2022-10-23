import React from 'react'
import {useState, useEfffect} from 'react'
import {FaUser} from 'react-icons/fa'






function Register() {
    const [FormData, setFormData] = useState({
        username: '',
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        password2: '',
        gender: '',
        country: '',
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
            <FaUser/> Register
    </h1>
        <p>
            Please create an account
        </p>
    </section>

    <section className='form'>
        <form onSubmit={onSubmit}></form>
        <form>
            <div className="form-group">
            <input type="text" className="form-control" id='username' name='username' value={username} placeholder='Enter your name' onChange={onchange}/>
            </div>
            <div className="form-group">
            <input type="text" className="form-control" id='firstname' name='firstname' value={firstname} placeholder='Enter your first name' onChange={onchange}/>
            </div>
            <div className="form-group">
            <input type="text" className="form-control" id='lastname' name='lastname' value={lastname} placeholder='Enter your last name' onChange={onchange}/>
            </div>
            <div className="form-group">
            <input type="text" className="form-control" id='email' name='email' value={email} placeholder='Enter your email' onChange={onchange}/>
            </div>
            <div className="form-group">
            <input type="password" className="form-control" id='password' name='password' value={password} placeholder='Enter your password' onChange={onchange}/>
            </div>
            <div className="form-group">
            <input type="password" className="form-control" id='password2' name='password2' value={password2} placeholder='Confirm your password' onChange={onchange}/>
            </div>
            <div className="form-group">
            <input type="text" className="form-control" id='gender' name='gender' value={gender} placeholder='Enter your gender' onChange={onchange}/>
            </div>
            <div className="form-group">
            <input type="text" className="form-control" id='country' name='country' value={country} placeholder='Enter your country' onChange={onchange}/>
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