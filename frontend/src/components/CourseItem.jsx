import { FaUserPlus } from 'react-icons/fa';
import {  useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom'
import React from 'react'
//import { deleteGoal } from '../features/goals/goalSlice'

  

function findMyCurrency(myCountry1){
  
  switch (myCountry1) {
    case "United Kingdom": return'GBP';
      
    case "United States": return'USD';
      
      
  
    case "South Korea": return'KRW';
      
      
  
    case "Spain": return'EUR';
      
      
  
    case "Sweden": return'SEK';
      
      
  
    case "Switzerland": return'CHF';
      
      
  
    case "Thailand": return'THB';
      
      
  
    case "Turkey": return'TRY';
      
      
  
    case "United Arab Emirates": return'AED';
      
      
  
    case "Russia": return'RUB';
      
      
  
    case "Saudi Arabia": return'SAR';
      
      
  
    case "Scotland": return'GBP';
      
      
  
    case "Singapore": return'SGD';
      
      
  
    case "South Africa": return'ZAR';
      
      
  
    case "Netherlands": return'EUR';
      
      
  
    case "New Zealand": return'NZD';
      
      
  
    case "Pakistan": return'PKR';
      
      
  
    case "Philippines": return'PHP';
      
      
  
    case "Qatar": return'QAR';
      
      
  
    case "France": return'EUR';
      
      
  
    case "Germany": return'EUR';
      
      
  
    case "India": return'INR';
      
      
  
    case "Italy": return'EUR';
      
      
  
    case "Japan": return'JPY';
      
      
  
    case "Malaysia": return'MYR';
      
      
  
    case "Mexico": return'MXN';
      
      
  
    case "Australia": return'AUD';
      
      
  
    case "Bangladesh": return'BDT';
      
      
  
    case "Belgium": return'EUR';
      
      
  
    case "Brazil": return'BRL';
      
      
  
    case "Canada": return'CAD';
      
      
  
    case "China": return'CNY';
      
      
  
    case "Denmark": return'DKK';
      
      
  
    case 'Egypt': return'EGP';
      
      
  }
}
function CoursePriceConvertor(myCurrency  , CoursePrice){

switch (myCurrency) {
  case 'KRW': return(1,424.07 * CoursePrice) ;
    
    
  case 'THB': return(37.96 * CoursePrice) ;
    
    
  case 'CHF': return CoursePrice ;
    
    
  case 'SEK': return (10.96 * CoursePrice) ;
    
    
  case 'AED':return (3.67 * CoursePrice) 
    
    
  case 'TRY': return  (18.61 * CoursePrice )
    
    
  case 'RUB': return (61.53 * CoursePrice )
    
    
  case 'SAR': return ( 3.76 * CoursePrice )
    
    
  case 'GBP':return  (0.86 * CoursePrice )
    
    
  case 'PKR':return  ( 221.88 * CoursePrice )
    
    
  case 'NZD':return  (1.72 * CoursePrice )
    
    
  case 'ZAR': return  (18.11 * CoursePrice )
    
    
  case 'SGD':return   (1.41 * CoursePrice )
    
    
  case 'INR':return (82.36 * CoursePrice )
    
  case 'QAR':return  (3.64 * CoursePrice )
    
    
  case 'PHP':return  58.02 * CoursePrice 
    
    
  case 'CAD':return  1.36 * CoursePrice 
    
    
  case 'BRL':return  5.34 * CoursePrice 
    
    
  case 'BDT':return  101.38 * CoursePrice 
    
    
  case 'AUD':return  1.56 * CoursePrice 
    
    
  case 'MXN':return  19.83 *  CoursePrice 
    
    
  case 'MYR':return  4.72 * CoursePrice 
    
    
  case 'JPY':return  147.41 * CoursePrice 
    
    
  case 'EGP':return  23.15 * CoursePrice 
    
    
  
  case 'DKK':return  7.47 * CoursePrice 
    
    
  
  case 'CNY':return  7.25 *  CoursePrice 
    
    
  
  case 'EUR':return  CoursePrice 
    
    
  
  case 'USD':return  CoursePrice 
    
    
  
  
}
}

function CourseItem({ course }) {
  const {user} = useSelector((state) => state.auth)
  var myCurrency = 'USD'
  var Flag = false
  var DiscountedPrice = 0
  var CourseFinalPrice = course.price
  const pathCourse = '/viewcourse/' + course.title
  const navigate = useNavigate()
  const ed = new Date(course.ExpiryDate)
  const nd = new Date()
  
  if(user){
   myCurrency = findMyCurrency(user.country)
   CourseFinalPrice = CoursePriceConvertor(myCurrency,course.price)
   //if(course.amoutOfDiscount != 0 & course.ExpiryDate>Date())
   if(ed.valueOf()>nd.valueOf()){
    console.log("Before Discount : "+CourseFinalPrice)
    DiscountedPrice = CourseFinalPrice - (CourseFinalPrice * (course.amountOfDiscount/100))
    console.log("After Discount : "+CourseFinalPrice)
    Flag = true
  }
   
  
  }
  function gotocourse(){
    navigate(pathCourse)
  } 

  return (
    
      <div class="col">
          <div class="card shadow-sm">
          {(course.thumbnail==null)?(<img className="bd-placeholder-img card-img-top" style={{ width: '100%', height: 300 }} src="https://i.ibb.co/QD8SrHQ/pngfind-com-learning-png-656188.png" alt='No Thumbnail Avail' />):(<img className="bd-placeholder-img card-img-top" style={{ width: '100%', height: 300 }} src={course.thumbnail} alt='No Thumbnail Avail' />)}
          

            <div class="card-body">
              <p class="card-text">
              <h2>{course.title}</h2>
              <br></br>
              Total Hours : {course.totalHours}
              <br />
              Course Rating : {course.courseRating}
              <br></br>
              {(Flag==true)?(<>
              Discount : {course.amountOfDiscount}%
              <br></br>
              <s>Old Price : {CourseFinalPrice} {myCurrency}</s>
              <br></br>
              New Price : {DiscountedPrice} {myCurrency}
              </>):(<> Price :  {(CourseFinalPrice == 0)   ? ( <>Free</>
          
          ) : (<>
             {CourseFinalPrice} {myCurrency}
            </>
          )}</>)}
          <br></br>
              #ofUsers:{course.NumberOfUsers}
             
              </p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary" onClick={gotocourse}> 
                  View Course
                  </button>
                  
                </div>
                
              </div>
            </div>
          </div>
        
        
        
      
      
      {/* <h2>{course.title}</h2>
      <img className="activator" style={{ width: '100%', height: 300 }} src={course.thumbnail} alt='No Thumbnail Avail' />
      <br></br>
      Total Hours : {course.totalHours}
      <br />
      Course Rating : {course.courseRating}
      <br></br>
        
      Price :  {(CourseFinalPrice == 0)   ? ( <>Free</>
          
        ) : (<>
          {myCurrency} {CourseFinalPrice}
          </>
        )}
      <button  className='view' >
        <Link to={pathCourse}>
         <FaUserPlus/>View Course
        </Link>
      </button> */}
    </div>
  )
}

export default CourseItem