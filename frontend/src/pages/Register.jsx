import React from 'react'
import {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import {FaUser} from 'react-icons/fa'
import {register, reset12} from '../features/auth/authSlice'
import Spinner from '../components/Spinner'
import CountrySelector from '../components/CountrySelector'
import CountryData from "../components/CountryData.json";
import { v4 as uuidv4 } from "uuid";







function Register() {

    const [countries,setCountries] = useState(CountryData);
    //console.log("countries", countries);

    const [searchCountry, setSearchCountry] = useState();
    //console.log("searchCountry", searchCountry);

    const [searchGender, setSearchGender] = useState();


    function handleChangeCountry(event){
        setSearchCountry(event.target.value)
        setFormData((prevState)=> ({
            ...prevState,
            country: searchCountry,
        }))

    }

    function handleChangeGender(event){
        setSearchGender(event.target.value)
        setFormData((prevState)=> ({
            ...prevState,
            gender: searchGender,
        }))

    }


    const [FormData, setFormData] = useState({
        username: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        password2: '',
        gender: '',
        country: '',
        toscheck: '',
    })

    const {username,firstName,lastName,email,password,password2,gender,country,toscheck} = FormData

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
                toast.success('Logged In !')
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
        
        if(password !== password2){
            toast.error('Passwords do not match')
        } else{
            const userData = {
                username,
                firstName,
                lastName,
                email,
                password,
                gender : searchGender,
                country: searchCountry,
                role : 'trainee',
                toscheck: 'false',
            }

                console.log(userData)
            dispatch(register(userData))
        }
    }

    if(isLoading){
        return <Spinner/>
    }

  return (
    <>
     <section class="vh-1010 gradient-custom">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card bg-dark text-white" >
          <div class="card-body p-5 text-center">

            <div class="mb-md-5 mt-md-4 pb-5">

              <h2 class="fw-bold mb-2 text-uppercase">Register</h2>
              <p class="text-white-50 mb-5">Please fill the following fields</p>

              <div class="form-outline form-white mb-4">
                <input type="text" id="username" name="username" class="form-control form-control-lg" value={username} placeholder='Enter your name' onChange={onChange}/>
                
              </div>

              <div class="form-outline form-white mb-4">
              <input type="text" className="form-control form-control-lg" id='firstName' name='firstName' value={firstName} placeholder='Enter your first name' onChange={onChange}/>
                
              </div>
              <div class="form-outline form-white mb-4">
                    <input type="text" className="form-control form-control-lg" id='lastName' name='lastName' value={lastName} placeholder='Enter your last name' onChange={onChange}/>
                
              </div>
              <div class="form-outline form-white mb-4">
              <input type="email" className="form-control form-control-lg" id='email' name='email' value={email} placeholder='Enter your email' onChange={onChange}/>
                
              </div>
              <div class="form-outline form-white mb-4">
                <input type="password" id="password" name="password" class="form-control form-control-lg" value={password} placeholder='Enter your password' onChange={onChange}/>
                
              </div>
              <div class="form-outline form-white mb-4">
              <input type="password" className="form-control form-control-lg" id='password2' name='password2' value={password2} placeholder='Confirm your password' onChange={onChange}/>
                
              </div>
              <div class="form-outline form-white mb-4">
              <select className="form-control form-control-lg" id='gender' name='gender' onChange={handleChangeGender} value={searchGender}>

                <option value="" hidden>
                Please Select Gender
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>


                </select>
                
              </div>
              <div class="form-outline form-white mb-4">
              <select className="form-control" id='country' name='country' onChange={handleChangeCountry} value={searchCountry}>

                <option value="" hidden>
                    Please Select Country
                 </option> 
                    {
                        countries.map((item) => {
                        return (
                            <option key={uuidv4()} value={item.country}>
                            {item.country}
                            </option>
                        );
                        })
                    } 
                    </select>
              </div> 
              <button class="btn btn-outline-light btn-lg px-5" type="submit" onClick={onSubmit}>Register</button>     
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </section>
    </>
    
  )
    
    
  
}

export default Register