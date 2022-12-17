import React from 'react'
import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector , useDispatch} from 'react-redux'
import {toast} from 'react-toastify'
import "../components/Styling/Login.css"
import { getAll , reset , updateStatus , updateSeen } from '../features/reports/reportSlice'
import { useState } from 'react'




function ManageReports() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    var flag1 = false
    const {user} = useSelector((state) => state.auth)
    const {report} = useSelector(
        (state) => state.report
      )
    const[reportList,setReportList] = useState()
    useEffect(() => {

        if(!user){
            navigate('/login')
            toast.error('Please Log In First!')
        }else if(user.role !== "admin" ){
            toast.error('not Authorized!')
            navigate('/'+user.role)
            
        }
        dispatch(getAll())
        

        return () => {
            dispatch(reset())
          }

    }, [user, navigate,dispatch])

  function handleResolved(report){
    const data = {
        user1:report.userWhoReported,
        role:report.userRole,
        type:report.reportType,
        status:'resolved',
        msg:report.msg
    }
    dispatch(updateStatus(data))
    navigate('/admin')
    toast.success('Status Updated!')
  }

  function loadreports(){
    setReportList(report)
  }

  function unseenreportHandler(){
    dispatch(updateSeen())
    setReportList('unseen')
  }

  function pendingHandler(){
    setReportList('pending')
  }

  function resolvedHandler(){
    setReportList('resolved')
  }
  return (

    <>

    
    <h1 className='text-center'>
       Manage Reports
    </h1>
    <div className="container-fluid border">
        <div className="row">
            <div className="col-2">
                <div class="d-flex flex-column align-items-stretch flex-shrink-0 bg-white border" style={{width: 250 }}>
                    <h5>Reports</h5>
                    <br></br>
                    <div class="list-group list-group-flush border-bottom scrollarea">
                            <a onClick={() => unseenreportHandler()}  class="list-group-item list-group-item-action  py-3 lh-tight border  btn btn-primary" aria-current="true">
                          <div class="d-flex w-100 align-items-center justify-content-between">
                            <strong class="mb-1">Unseen Reports</strong>
                            
                          </div>
                          <div class="col-10 mb-1 small"></div>
                        </a>    
                    </div>


                    <div class="list-group list-group-flush border-bottom scrollarea">
                            <a onClick={() => pendingHandler()} class="list-group-item list-group-item-action  py-3 lh-tight border  btn btn-primary" aria-current="true">
                          <div class="d-flex w-100 align-items-center justify-content-between">
                            <strong class="mb-1">Pending Reports</strong>
                            
                          </div>
                          <div class="col-10 mb-1 small"></div>
                        </a>    
                    </div>

                    <div class="list-group list-group-flush border-bottom scrollarea">
                            <a onClick={() => resolvedHandler()} class="list-group-item list-group-item-action  py-3 lh-tight border  btn btn-primary" aria-current="true">
                          <div class="d-flex w-100 align-items-center justify-content-between">
                            <strong class="mb-1">Resolved Reports</strong>
                            
                          </div>
                          <div class="col-10 mb-1 small"></div>
                        </a>    
                    </div>

                
                </div>
            </div>
            <div className="col-10">
                <div className="container ">
                   
                    
                    
                    {report.map((report) => {
                        return(
                            <>
                               {(reportList == 'unseen')?(<>
                                    {(report.seen == 'false')?(<>
                                        <div className="row">
                                            <div class="card border-primary" style={{width:1310}} >
                                                <div class="card-header">User : {report.userWhoReported}</div>
                                                    <div class="card-body">
                                                    
                                                        <h5 class="card-title">{report.reportType} Problem </h5>
                                                            <p class="card-text">
                                                                {report.userWhoReported}'s role : {report.userRole}
                                                                <br></br>
                                                                {report.userWhoReported}'s Says : {report.msg}
                                                                {/* <button type='button' className='btn btn-primary' onClick={()=>grantcourse(request.CT_Who_Requested,request.courseName)}>Grant Access</button> */}
                                                                </p>
                                                                {(report.status != 'resolved')?(<>
                                                                    <button type='button' className='btn btn-warning' onClick={() => handleResolved(report)}>Resolved</button>
                                                                    </>):(<></>)}
                                                                <div className="card-footer">
                                                        Status : {report.status}
                                                        
                                                        <p className='small'>unseen</p>
                                                    </div>
                                                        </div>
                                                    </div>
                                                    
                                                </div>  
                                    </>):(<><h5 className='text-center'>No Unseen Reports</h5></>)}
                               </>):(<></>)}


                               {(reportList == 'pending')?(<>
                                    {(report.seen == 'true' & report.status == 'pending')?(<>
                                        <div className="row">
                                            <div class="card border-primary" style={{width:1310}} >
                                                <div class="card-header">User : {report.userWhoReported}</div>
                                                    <div class="card-body">
                                                    
                                                        <h5 class="card-title">{report.reportType} Problem </h5>
                                                            <p class="card-text">
                                                                {report.userWhoReported}'s role : {report.userRole}
                                                                <br></br>
                                                                {report.userWhoReported}'s Says : {report.msg}
                                                                {/* <button type='button' className='btn btn-primary' onClick={()=>grantcourse(request.CT_Who_Requested,request.courseName)}>Grant Access</button> */}
                                                                </p>
                                                                {(report.status != 'resolved')?(<>
                                                                    <button type='button' className='btn btn-warning' onClick={() => handleResolved(report)}>Resolved</button>
                                                                    </>):(<></>)}
                                                                <div className="card-footer">
                                                        Status : {report.status}
                                                        
                                                        <p className='small'>seen</p>
                                                    </div>
                                                        </div>
                                                    </div>
                                                    
                                                </div>  
                                    
                                    </>):(<h5 className='text-center'>No Pending Reports</h5>)}
                               
                               </>):(<></>)}




                               {(reportList == 'resolved')?(<>
                                    {(report.seen == 'true' & report.status == 'resolved')?(<>
                                        <div className="row">
                                            <div class="card border-primary" style={{width:1310}} >
                                                <div class="card-header">User : {report.userWhoReported}</div>
                                                    <div class="card-body">
                                                    
                                                        <h5 class="card-title">{report.reportType} Problem </h5>
                                                            <p class="card-text">
                                                                {report.userWhoReported}'s role : {report.userRole}
                                                                <br></br>
                                                                {report.userWhoReported}'s Says : {report.msg}
                                                                {/* <button type='button' className='btn btn-primary' onClick={()=>grantcourse(request.CT_Who_Requested,request.courseName)}>Grant Access</button> */}
                                                                </p>
                                                                {(report.status != 'resolved')?(<>
                                                                    <button type='button' className='btn btn-warning' onClick={() => handleResolved(report)}>Resolved</button>
                                                                    </>):(<></>)}
                                                                <div className="card-footer">
                                                        Status : {report.status}
                                                        
                                                        <p className='small'>seen</p>
                                                    </div>
                                                        </div>
                                                    </div>
                                                    
                                                </div>  
                                    
                                    </>):(<h5 className='text-center'>No Resolved Reports</h5>)}
                               
                               </>):(<></>)}
                            </>
                        )
                    })}
                    
                  
                                       
                </div>
            </div>
        </div>
    </div>
    
    
     








</>

  )
}

export default ManageReports