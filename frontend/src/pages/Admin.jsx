import React from 'react'
import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {toast} from 'react-toastify'
import "../components/Styling/Login.css"




function Admin() {
    const navigate = useNavigate()

    const {user} = useSelector((state) => state.auth)

    useEffect(() => {

        if(!user){
            navigate('/login')
            toast.error('Please Log In First!')
        }else if(user.role !== "admin" ){
            toast.error('not Authorized!')
            navigate('/')
            
        }

    },[user,navigate])


  return (



   <section class="vh-1010 gradient-custom"/>
  )
}

export default Admin