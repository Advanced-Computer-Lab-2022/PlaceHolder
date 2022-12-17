import React from 'react'
import {useEffect} from 'react'
import {FaSignInAlt, FaSignOutAlt, FaUser, FaBook , FaBookOpen, FaUserPlus , FaStar} from 'react-icons/fa'
import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {toast} from 'react-toastify'
import "../components/Styling/Login.css"
import "../components/Styling/Divider.css"




function ViewmyRatingsIns() {
    const navigate = useNavigate()

    const {user} = useSelector((state) => state.auth)

    useEffect(() => {

        if(!user){
            navigate('/login')
            toast.error('Please Log In First!')
        }else if(user.role !== "instructor" ){
            toast.error('not Authorized!')
            navigate('/'+user.role)
            
        }

    },[user,navigate])


  return (
  <>
  <div className="container">
        <h1 className='text-center'>
            My Ratings
        </h1>
        {(user.ratings != null)?(<>
        {
            user.ratings.map((rate)=>{
                return(
                    <>
                    <div className="row">
                        <div class="card border-primary" style={{width:1310}} >
                            <div class="card-header">User : {rate.userwhorated}</div>
                                 <div class="card-body">
                                    {(rate.usersRating == 1)?(<><div>
                                        <FaStar className='checked'></FaStar>
                                        <FaStar className=''></FaStar>
                                        <FaStar className=''></FaStar>
                                        <FaStar className=''></FaStar>
                                        <FaStar className=''></FaStar>   
                                    </div></>):((rate.usersRating==2)?(<><div>
                                        <FaStar className='checked'></FaStar>
                                        <FaStar className='checked'></FaStar>
                                        <FaStar className=''></FaStar>
                                        <FaStar className=''></FaStar>
                                        <FaStar className=''></FaStar>   
                                    </div>
                                    
                                    </>):((rate.usersRating==3)?(<><div>
                                        <FaStar className='checked'></FaStar>
                                        <FaStar className='checked'></FaStar>
                                        <FaStar className='checked'></FaStar>
                                        <FaStar className=''></FaStar>
                                        <FaStar className=''></FaStar>   
                                    </div>
                                    </>):((rate.usersRating==4)?(<><div>
                                        <FaStar className='checked'></FaStar>
                                        <FaStar className='checked'></FaStar>
                                        <FaStar className='checked'></FaStar>
                                        <FaStar className='checked'></FaStar>
                                        <FaStar className=''></FaStar>   
                                    </div>
                                    </>):(<><div>
                                        <FaStar className='checked'></FaStar>
                                        <FaStar className='checked'></FaStar>
                                        <FaStar className='checked'></FaStar>
                                        <FaStar className='checked'></FaStar>
                                        <FaStar className='checked'></FaStar>   
                                    </div></>))))}
                                    
        
                                    <h5 class="card-title">{rate.userwhorated} said :</h5>
                                        <p class="card-text">{rate.usersreview}</p>
                                    </div>
                                </div>
                            </div>  
                    </>
                )
            })
        }
        
        
        
        
        </>):(<><h2 className='text-center'>No Ratings Availble</h2></>)}
        
         

  </div>
  
  
  
  
  
  
   </>



  
  )
}

export default ViewmyRatingsIns