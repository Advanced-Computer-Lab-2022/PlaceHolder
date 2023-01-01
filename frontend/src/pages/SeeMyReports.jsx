import React from 'react'
import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {toast} from 'react-toastify'
import {refreshuser} from '../features/auth/authSlice'
import { getMyReports , updateFollowUpUser } from '../features/reports/reportSlice'
import { useState } from 'react'


function SeeMyReports() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {user} = useSelector((state) => state.auth)
    const {report} = useSelector((state) => state.report)
    const[followup,setfollowup] = useState()

    useEffect(() => {

        if(!user){
            navigate('/login')
        }else if((user.role !== "instructor") && (user.role !== "trainee") && (user.role !== 'corporate trainee')){
            toast.error('not Authorized!')
            navigate('/')
            
        }
        const data = {
            username: user.username
        }
        dispatch(getMyReports(data))
        

    },[user,navigate])



    function handleFollowUp(e,rep){
        setfollowup({
                    report:rep,
                    [e.target.name]: e.target.value,
                    }
            )
        
    }

    function sendFollowup(){
        const data = {
            id:followup.report._id,
            newmsg:followup.followup
        }
        dispatch(updateFollowUpUser(data))
        toast.success('Follow Up Message Sent !')
        navigate('/')
    }

  return (




    <>
                
    <div className="container">
            <h1 className='text-center'>
            My Reports
            </h1>
        {(report != null)?(<>
        
            {
                report.map((rep) => {
                    return(
                        <>
                            <div className="row">
                    <div class="card border-primary" style={{width:1310}} >
                        <div class="card-header">{rep.reportType} Problem</div>
                             <div class="card-body">
                               
                                <h5 class="card-title">Status : {rep.status}</h5>
                                    <p class="card-text">
                                        Message : {rep.msg}
                                    </p>
                                    {(rep.status != 'resolved')?(<>
                                    <h5>Follow Up</h5>
                                    <div className="container">
                                        {rep.followup.map((follow) => {
                                            return(<>
                                            
                                                    {user.username} : {follow.UserMsg}
                                                    <br></br>
                                                    
                                            </>)
                                        })}
                                        <br></br>
                                    </div>
                                                                        <div class="input-group mb-3">
                                    <input type="text" class="form-control" placeholder="Follow Up Message" aria-label="Follow Up Message" aria-describedby="button-addon2" name='followup' onChange={(e) => handleFollowUp(e,rep)}/>
                                    <div class="input-group-append">
                                        <button class="btn btn-primary" type="button" id="button-addon2" onClick={()=>sendFollowup()}>Send</button>
                                    </div>
                                    </div></>):(<></>)}
                                </div>
                                <div className="card-footer">
                                    {(rep.seen == 'true')?(<>seen</>):(<>unseen</>)}
                                </div>
                            </div>
                        </div>  
                        
                        
                        </>
                    )
                })
            }
        
        
        
        
        </>):(<></>)}






    </div>
    
    
    
    
    </>
  )
}

export default SeeMyReports