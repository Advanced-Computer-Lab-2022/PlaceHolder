import React from 'react'
import {useEffect,useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import {toast} from 'react-toastify'
import { refreshuser, updateEmail,updateBio,updatePassword,logout,reset } from '../features/auth/authSlice'



function ViewMyProfile() {
    const[refresher,setrefresher] = useState();
    const navigate = useNavigate()
    var flag = false
    const dispatch = useDispatch()
    const {user} = useSelector((state) => state.auth)
    var email11 = user.email
    const [email,setEmail] = useState({
        email:email11
    });
    const [minibio,setminibio] = useState({
        minibio:user.minibio
    });
    

    useEffect(() => {

        if(!user){
            navigate('/login')
            toast.error('Please Log In First!')
        }

    },[user,navigate])

    const [password,setPassword] = useState({
        password:''
    })
    const [confirmpass,setConfirmpass] = useState({
        confirmpass:''
    })
    const handlePassword = (e) => {
        setPassword(e.target.value)
     }

     const handleconfirmpass = (e) => {
        setConfirmpass(e.target.value)
     } 
    

    function savenewinfo(){
        var changed = false
        const usernameData = {
            username:user.username
        }
        console.log(email.email)
        console.log(minibio)
        if(email == ''){
            toast.error('Email Cannot Be Empty')
        }else{
        if(email.email == user.email){
            console.log("Email is Equal")
        }else{
            const userData = {
                username:user.username,
                email:email
            }
            changed=true
            console.log(email)
            dispatch(updateEmail(userData))
            dispatch(refreshuser(usernameData))
            toast.success('Email Changed!')
        }
        if(minibio == user.minibio){
            console.log("Mini Bio Equal")
        }else{
            const userData = {
                username:user.username,
                minibio:minibio
            }
            changed=true
            console.log(minibio)
            dispatch(updateBio(userData))
            dispatch(refreshuser(usernameData))
            toast.success('Bio Changed')
        }
        navigate('/'+user.role)
        if(!changed){
            toast.success('No Data Changed!')
        }
    }
    }
    const [toggle, setToggle] = useState(true)
    // function DisplayPasswords(){
    //     flag = true
    //     forceUpdate()
    //     console.log(flag)
    // }
    const handleEmail = (e) => {
       setEmail(e.target.value)
    }
    const handleminibio = (e) => {
        setminibio(e.target.value)
     }
     function PasswordSolver(){
        if(password == confirmpass){
            
            const userData = {
                username:user.username,
                password: password
            }
            dispatch(updatePassword(userData))
            dispatch(logout())
            dispatch(reset())
            navigate('/')
            toast.success('Password Updated Please Log In Again With New Password!!')
            
        }else{
            toast.error("Passwords Dont Match!")
        }
     }
  return (<>
        {(user.email != null)?(<> <div>My Profile</div>
    <div>
        User Name : {user.username}
        <br></br>
        {(user.role == "instructor")?(<>Email : <input contentEditable='true' name='email' placeholder={user.email} onChange={handleEmail} value={email.email}></input></>):(<>Email : {user.email}</>)}
        
        <br></br>
        Country : {user.country}
        <br></br>
        Profile Type : {user.role}
        <br></br>
        {(user.role == "instructor")?(<>
            Biography: <input contentEditable='true' name='minibio' placeholder={user.minibio} onChange={handleminibio} value={minibio.minibio}></input>

        </>):(<></>)}
        <div>
        {(user.role == "instructor" & (user.minibio != minibio.minibio) | (user.email != email.email))?(<>
            <button onClick={savenewinfo}>Save</button>

        </>):(<></>)}   
        </div>

    </div>
</>):(<></>)}

            <div>
                
                <button onClick={() => setToggle(!toggle)}>Change My Password</button>
                <br></br>
                {!toggle && (<div>
                        New Password : <input type='password' onChange={handlePassword} value={password.password}></input>
                        <br></br>
                        Confirm Password : <input type='password' onChange={handleconfirmpass} value={confirmpass.confirmpass}></input>
                        <br></br>
                        <button onClick={PasswordSolver}>Save Password</button>



                </div>)}
            </div>
    </>
  )
}

export default ViewMyProfile