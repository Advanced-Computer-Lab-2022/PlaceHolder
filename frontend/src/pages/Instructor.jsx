import React from 'react'
import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {toast} from 'react-toastify'


function Instructor() {
    const navigate = useNavigate()

    const {user} = useSelector((state) => state.auth)

    useEffect(() => {

        if(!user){
            navigate('/login')
        }else if(user.role !== "admin" || user.role !== "instructor" ){
            toast.error('not Authorized!')
            navigate('/'+user.role)
            
        }

    },[user,navigate])


  return (




    <div>Instructor Home Page</div>
  )
}

export default Instructor