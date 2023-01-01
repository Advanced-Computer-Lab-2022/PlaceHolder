import React from 'react'
import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector , useDispatch} from 'react-redux'
import {toast} from 'react-toastify'
import "../components/Styling/Login.css"
import { getAll , reset1 , updateStatus } from '../features/refunds/refundSlice'
import { useState } from 'react'




function ManageRefunds() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    var flag1 = false
    const {user} = useSelector((state) => state.auth)
    const {report} = useSelector(
        (state) => state.report
      )
    const refund = useSelector((state) => state.refund)  
    const[refundList,setRefundList] = useState()
    useEffect(() => {

        if(!user){
            navigate('/login')
            toast.error('Please Log In First!')
        }else if(user.role !== "admin" ){
            toast.error('not Authorized!')
            navigate('/')
            
        }
        dispatch(getAll())
        

        return () => {
            dispatch(reset1())
          }

    }, [user, navigate,dispatch])

  function handleResolved(refund){
    const data = {
        user1:refund.userWhoRefunded,
        course:refund.course
    }
    dispatch(updateStatus(data))
    navigate('/admin')
    toast.success('Course Refunded!')
  }

 
  return (

    <>

    
    <h1 className='text-center'>
       Manage Refunds
    </h1>
    <div className="container-fluid border">
        <div className="row">
            
            <div className="col-12">
                <div className="container ">
                    
                    {(refund.refund != null)?(<>
                        {refund.refund.map((refund) => {
                        return(
                            <>
                               


                               <>
                                    
                                        <div className="row">
                                            <div class="card border-primary" style={{width:1310}} >
                                                <div class="card-header">User : {refund.userWhoRefunded}</div>
                                                    <div class="card-body">
                                                    
                                                        <h5 class="card-title">{refund.refundType} </h5>
                                                            <p class="card-text">
                                                                {refund.userWhoRefunded}'s role : {refund.userRole}
                                                                <br></br>
                                                                {refund.userWhoRefunded}'s Says : {refund.msg}
                                                                {/* <button type='button' className='btn btn-primary' onClick={()=>grantcourse(request.CT_Who_Requested,request.courseName)}>Grant Access</button> */}
                                                                </p>
                                                                {(refund.status != 'resolved')?(<>
                                                                    <button type='button' className='btn btn-warning' onClick={() => handleResolved(refund)}>Refund</button>
                                                                    </>):(<></>)}
                                                                <div className="card-footer">
                                                        Status : {refund.status}
                                                        
                                                        
                                                    </div>
                                                        </div>
                                                    </div>
                                                    
                                                </div>  
                                    
                                    
                               
                               </>




                               
                            </>
                        )
                    })}

                    </>):(<>
                    No Refund Requests</>)}
                    
                    
                    
                  
                                       
                </div>
            </div>
        </div>
    </div>
    
    
     








</>

  )
}

export default ManageRefunds