import React from 'react'
import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {toast} from 'react-toastify'


function Courses() {
    const navigate = useNavigate()

    const {user} = useSelector((state) => state.auth)

    useEffect(() => {

        

    },[user,navigate])


  return ( <>
      <section className='heading'>
      <h1>
        All Availble Courses
        </h1>
        
      </section>



    
    </>
  )
}

export default Courses