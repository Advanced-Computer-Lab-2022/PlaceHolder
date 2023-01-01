import React from 'react'
import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector , useDispatch} from 'react-redux'
import {toast} from 'react-toastify'
import "../components/Styling/Login.css"
import { getAll , reset1 , updateStatus } from '../features/refunds/refundSlice'
import {addMultipleDiscount, getCourses,reset} from '../features/courses/courseSlice'
import { useState } from 'react'




function ManageDiscounts() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {user} = useSelector((state) => state.auth)
    const {courses} = useSelector((state)=>state.courses)
    const [checked, setChecked] = useState([]);
    const [FormDataDiscount,setFormDataDiscount] = useState({
        amountOfDiscount: 0,
        ExpiryDate: '',
      })
    useEffect(() => {

        if(!user){
            navigate('/login')
            toast.error('Please Log In First!')
        }else if(user.role !== "admin" ){
            toast.error('not Authorized!')
            navigate('/')
            
        }
        dispatch(getCourses())
        

        return () => {
            dispatch(reset())
          }

    }, [user, navigate,dispatch])

    function eventCheckBox(e) {
        let checkboxs = document.getElementsByTagName("input");
        for(let i = 1; i < checkboxs.length ; i++) { //zero-based array
           
          checkboxs[i].checked = !checkboxs[i].checked;
        }
        if(e.target.checked){
        var updatedList = [...checked];
        courses.map((course)=>{
            if(!updatedList.includes(course.title)){
                updatedList.push(course.title)
            }
        })
        setChecked(updatedList)
        }else{
            var updatedList =[]
            setChecked(updatedList)
        }
        
      }
    const handleCheck = (event) => {
        var updatedList = [...checked];
        if (event.target.checked) {
          updatedList = [...checked, event.target.value];
        } else {
          updatedList.splice(checked.indexOf(event.target.value), 1);
        }
        setChecked(updatedList);
        //console.log(checked)
      };
      const addDiscountHandler = (e) => {
        //e.preventDefault()
        //console.log(e.target.value)
        setFormDataDiscount((prevState)=> ({
          ...prevState,
          [e.target.name]: e.target.value,
       }))
      } 

    function submitDiscount(){
        console.log(checked)
        console.log(FormDataDiscount)
        const data = {
            courses:checked,
            discount:FormDataDiscount.amountOfDiscount,
            date:FormDataDiscount.ExpiryDate

        }
        console.log(data)
        dispatch(addMultipleDiscount(data))
    }
    
  return (

    <>

    
    <h1 className='text-center'>
       Manage Discounts
    </h1>
    <div className="container border">
        <h2>Select Courses</h2>
        <br>
        </br>
        <h5>Course List : </h5>
        <br></br>
    <div class="form-check">
    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" onClick={(e) => eventCheckBox(e)}/>
    <label class="form-check-label" for="flexCheckDefault">
        Select All
    </label>
    </div>
    <br></br>
    {courses.map((course,index)=>{
        return(
            <>
                 <div class="form-check" key={index}>
                <input class="form-check-input" type="checkbox" value={course.title} id="flexCheckChecked" name={course.title} onChange={handleCheck}/>
                <label class="form-check-label" for="flexCheckChecked">
                    {course.title}
                </label>
                </div> 
            </>
        )
    })}
    <br>
    </br>
            <input type="Number" className='form-control' placeholder='Enter Discount from 0 to 100' onChange={(e)=>addDiscountHandler(e)} name='amountOfDiscount'/>
            <br></br>
            <input type="Date" className='form-control' placeholder='YYYY-MM-DD' onChange={(e)=>addDiscountHandler(e)} name='ExpiryDate' />
            <br></br>
            <button type='button' className='btn btn-primary' onClick={()=>submitDiscount()}>Add Discount</button> 

    </div>
                                    
                               
                               




                          
                  
                    
                    
                  
             
    
    
     








</>

  )
}

export default ManageDiscounts