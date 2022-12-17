import React from 'react'
import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector , useDispatch} from 'react-redux'
import {toast} from 'react-toastify'
import "../components/Styling/Login.css"
import { getAll , reset } from '../features/reports/reportSlice'




function ManageReports() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    var flag1 = false
    const {user} = useSelector((state) => state.auth)
    const {report} = useSelector(
        (state) => state.report
      )

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

  
  return (

    <>

    <div className="container">
    <h1 className='text-center'>
       Manage Reports
    </h1>
    {(report != null)?(<>
    {
        
        report.map((report)=>{
            
            
            return(
                <>
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
                                </div>
                            </div>
                            <div className="card-footer">
                                Status : {report.status}
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

export default ManageReports