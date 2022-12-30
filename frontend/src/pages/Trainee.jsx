import React from 'react'
import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {toast} from 'react-toastify'
import {refreshuser} from '../features/auth/authSlice'


function Trainee() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {user} = useSelector((state) => state.auth)

    useEffect(() => {

        if(!user){
            navigate('/login')
        }else if((user.role !== "admin") && (user.role !== "trainee")){
            toast.error('not Authorized!')
            navigate('/'+user.role)
            
        }
        const userData2={
          username: user.username
        }
        // dispatch(refreshuser(userData2))

    },[user,navigate])


  return (




    <div>Trainee Home Page</div>
  )
}

export default Trainee