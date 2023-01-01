import React from 'react'
import {useEffect,useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import {toast} from 'react-toastify'
import { refreshuser, updateEmail,updateBio,updatePassword,logout,reset12, pay } from '../features/auth/authSlice'
import {getMyTransactions} from '../features/payment/paymentSlice'
import logo from "../components/img/user1.png"


function ViewMyProfile() {
    const[refresher,setrefresher] = useState();
    const navigate = useNavigate()
    var flag = false
    var counter = 1;
    const dispatch = useDispatch()
    const {user} = useSelector((state) => state.auth)
    const payment = useSelector((state) => state.payment)
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
        }else{
            var data = {
                username:user.username
            }
            console.log(data)
            dispatch(getMyTransactions(data))
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
        navigate('/')
        if(!changed){
            toast.success('No Data Changed!')
        }
    }
    }
    const [toggle, setToggle] = useState(true)
    const [toggle1, setToggle1] = useState(true)
    // function DisplayPasswords(){
    //     flag = true
    //     forceUpdate()
    //     console.log(flag)
    // }
    const handleEmail = (e) => {
       setEmail(e.target.value)
    }
    function incrementCounter(){
        counter++;
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
            dispatch(reset12())
            navigate('/')
            toast.success('Password Updated Please Log In Again With New Password!!')
            
        }else{
            toast.error("Passwords Dont Match!")
        }
     }
  return (<>
  <div className='container border'>
    <br></br>
  <h3 className='text-center'><b>My Profile</b> </h3>
        {(user.email != null)?(<> 
        <div className="row">
            <div className="col-6">
                <img src={logo} className="img-thumbnail rounded-0" width={250} height={250}/>
                <br></br>
                <h4 className=''> <b>{user.firstName}  {user.lastName}</b></h4>
                <h5><b>@{user.username}</b></h5>
            </div>
            <div className="col-6">
            {(user.role == "instructor")?(<> <h4><b>Email : </b></h4>  <input contentEditable='true' name='email' placeholder={user.email} onChange={handleEmail} value={email.email}></input></>):(<><h4><b>Email : {user.email} </b></h4> </>)}
        
        <br></br>
       <h4><b>Country : {user.country}</b></h4>  
        <br></br>
        <h4><b>Profile Type : {user.role}</b></h4>
        <br></br>
        {(user.role == "instructor")?(<>
           <h4><b>Biography:</b></h4>  <input contentEditable='true' name='minibio' placeholder={user.minibio} onChange={handleminibio} value={minibio.minibio}></input>
            
        </>):(<></>)}
        
        {(user.role == "instructor" & (user.minibio != minibio.minibio) | (user.email != email.email))?(<>
            <button onClick={savenewinfo}>Save</button>
           
        </>):(<></>)}
        <br></br>
        {((user.role == 'trainee' | user.role == 'instructor' ) & payment.payment != null)?(<>       <h4><b>My Wallet : {Math.trunc(payment.payment.wallet)} {payment.payment.userCurrency}</b></h4>   
</>):(<></>)}
        
        </div>
   
        </div>
    
        </>):(<></>)}

            <div>
                <br></br>
                <button type='button' className='btn btn-primary' onClick={() => setToggle(!toggle)}>Change My Password</button>
                <br></br>
                <br></br>
                {!toggle && (<div>
                    <br></br>
                        New Password : <input type='password' onChange={handlePassword} value={password.password}></input>
                        <br></br>
                        <br></br>
                        Confirm Password : <input type='password' onChange={handleconfirmpass} value={confirmpass.confirmpass}></input>
                        <br></br>
                        <br></br>
                        <button type='button' className='btn btn-primary' onClick={PasswordSolver}>Save Password</button>



                </div>)}
                <br></br>
            </div>
           
            <div>
        
        <br></br>
        
                {(user.role == 'trainee' | user.role == 'instructor')?(<> 
                    <button type='button' className='btn btn-primary' onClick={()=> setToggle1(!toggle1)}>View All Transactions</button>

                    {!toggle1 && (<div>
                    <br></br>
                       <h5>Transaction History</h5>
                      < table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Amount</th>
      <th scope="col">Course</th>
      <th scope="col">Description</th>
      <th scope="col">Date Of Purchase</th>
    </tr>
  </thead>
  <tbody>
    {payment.payment.transactions.map((trans)=>{
        return(<>
            <tr>
            <th scope="row">{counter}</th>
            <td>{trans.paymentAmount}</td>
            <td><a href={"/viewcourse/"+trans.CoursePaidFor}>{trans.CoursePaidFor}</a></td>
            <td>{trans.Description}</td>
            <td>{trans.DateOfPurchase}</td>
            </tr>
            {incrementCounter()}
            </>)
    })}
    
  </tbody>
</table>



                </div>)}
                
                </>):(<></>)}

            </div>
            <br></br>
    </div>
    </>
  )
}

export default ViewMyProfile