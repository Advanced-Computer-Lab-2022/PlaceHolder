import React from 'react'
import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {toast} from 'react-toastify'
import Carousel from "react-elastic-carousel"
import Item from "../components/JS/Carousel"
import {refreshuser} from '../features/auth/authSlice'


function Trainee() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 },
      ];

    const {user} = useSelector((state) => state.auth)

    useEffect(() => {

        if(!user){
            navigate('/login')
        }else if((user.role !== "admin") && (user.role !== "trainee")){
            toast.error('not Authorized!')
            navigate('/')
            
        }
        const userData2={
          username: user.username
        }
        // dispatch(refreshuser(userData2))

    },[user,navigate])


  return (



    <>
    <h1 style={{ textAlign: "center" }}>Example to setup your carousel in react</h1>
      <div className='container'>
        <Carousel breakPoints={breakPoints}>
          <Item>One</Item>
          <Item>Two</Item>
          <Item>Three</Item>
          <Item>Four</Item>
          <Item>Five</Item>
          <Item>Six</Item>
          <Item>Seven</Item>
          <Item>Eight</Item>
        </Carousel>
      </div>
    
    </>
  )
}

export default Trainee