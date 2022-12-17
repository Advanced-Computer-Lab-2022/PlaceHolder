import React from 'react'
import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector , useDispatch} from 'react-redux'
import {toast} from 'react-toastify'
import "../components/Styling/Login.css"
import { getAll , reset, grant} from '../features/corpReq/corpReqSlice'




function ManageCourseRequests() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    var flag1 = false
    const {user} = useSelector((state) => state.auth)
    const {corp} = useSelector(
        (state) => state.corp
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

   function grantcourse(user1,title){
        const data = {
            courseName:title,
            user1:user1
        }

        dispatch(grant(data))
        toast.success("Course "+title+" granted to "+user1)
        navigate('/'+user.role)
   } 
  return (

    <>

    <div className="container">
    <h1 className='text-center'>
       Course Requests
    </h1>
    {(corp != null)?(<>
    {
        
        corp.map((request)=>{
            {console.log(corp)}
            if(request.granted == false){
            return(
                <>
                <div className="row">
                    <div class="card border-primary" style={{width:1310}} >
                        <div class="card-header">User : {request.CT_Who_Requested}</div>
                             <div class="card-body">
                               
                                <h5 class="card-title">{request.CT_Who_Requested} wants access to course {request.courseName}</h5>
                                    <p class="card-text"><button type='button' className='btn btn-primary' onClick={()=>grantcourse(request.CT_Who_Requested,request.courseName)}>Grant Access</button></p>
                                </div>
                            </div>
                        </div>  
                </>
            )
            }else{
                return(
                    <>
                    {flag1=true}
                    </>
                )
            }
        })
    }
    
    
    
    
    </>):(<></>)}
    {(flag1 == true)?(<><br></br><h2 className='text-center'>No Requests Availble</h2></>):(<></>)}
    
     

</div>






</>

  )
}

export default ManageCourseRequests