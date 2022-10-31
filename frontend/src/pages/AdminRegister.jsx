import React from 'react'
import {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import {FaUser} from 'react-icons/fa'
import {adduser, reset} from '../features/auth/authSlice'
import Spinner from '../components/Spinner'
import CountrySelector from '../components/CountrySelector'
import CountryData from "../components/CountryData.json";
import { v4 as uuidv4 } from "uuid";





function AdminRegister() {
    const [countries,setCountries] = useState(CountryData);
    //console.log("countries", countries);

    const [searchCountry, setSearchCountry] = useState();
    //console.log("searchCountry", searchCountry);
    const [searchGender, setSearchGender] = useState();


    const [searchRole, setSearchRole] = useState();


    function handleChange(event){
        setSearchCountry(event.target.value)
        setFormData((prevState)=> ({
            ...prevState,
            country: searchCountry,
        }))

    }

    function handleChangeRole(event){
        setSearchRole(event.target.value)
        setFormData((prevState)=> ({
            ...prevState,
            role: searchRole,
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
        role: '',
    })

    const {username,firstName,lastName,email,password,password2,gender,country,role} = FormData

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {user,isLoading, isError, isSuccess, message} = useSelector(

        (state) => state.auth
    )

        useEffect(() => {
            if(isError){
                toast.error(message)
            }

        
             if(!user){
             navigate('/login')
             toast.error('Please Log In First!')
            }else if((user.role !== "admin")){
             toast.error('not Authorized!')
             navigate('/'+user.role)
                    
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
        } 
        if (searchRole==='admin'||searchRole==='corporate trainee'||searchRole==='instructor'){
       
            const userData = {
                username,
                firstName,
                lastName,
                email,
                password,
                gender : searchGender,
                country : searchCountry,
                role : searchRole,
            }
            dispatch(adduser(userData))
            navigate('/admin')
            toast.success("New User Added Succesfuly!")

        }else{
            toast.error('Please Try One Of the following Roles : admin , instructor , corporate trainee')
        


            
        }
    }

    if(isLoading){
        return <Spinner/>
    }

  return (
    <>
    <section className='heading'> 
    <h1>
            <FaUser/> Register a new user
    </h1>
        <p>
            Please Fill All Fields Below
        </p>
    </section>

    <section className='form'>
        <form onSubmit={onSubmit}>


        <div className="form-group">
            <select className="form-control" id='role' name='role' onChange={handleChangeRole} value={searchRole}>

            <option value="" hidden>
            Please Select Role
            </option>
            <option value="admin">Admin</option>
            <option value="instructor">Instructor</option>
            <option value="corporate trainee">Corporate Trainee</option>
        

            </select>
            {/* <input type="text" className="form-control" id='role' name='role' value={role} placeholder='Register as' onChange={onChange}/> */}
            </div>
            <div className="form-group">
            <input type="text" className="form-control" id='username' name='username' value={username} placeholder='Enter your username' onChange={onChange}/>
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
            <select className="form-control" id='gender' name='gender' onChange={handleChangeGender} value={searchGender}>

                        <option value="" hidden>
                        Please Select Gender
                        </option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>


            </select>
            </div>
            <div className="form-group">
            <select className="form-control" id='country' name='country' onChange={handleChange} value={searchCountry}>

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
            <div className="form-group">
                <button type='submit' className='btn btn-block'>Sumbit</button>
            </div>
        
        </form>
    </section>
    
    
    
    
    
    </>
  )
}

export default AdminRegister