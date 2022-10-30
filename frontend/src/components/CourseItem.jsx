import { FaUserPlus } from 'react-icons/fa';
import {  useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

//import { deleteGoal } from '../features/goals/goalSlice'

  

function findMyCurrency(myCountry1){
  console.log(myCountry1)
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
  var CourseFinalPrice = course.price
  const pathCourse = '/viewcourse/' + course.title
  if(user){
   myCurrency = findMyCurrency(user.country)
   CourseFinalPrice = CoursePriceConvertor(myCurrency,course.price)
  
  } 

  return (
    <div className='goal'>
      
      <h2>{course.title}</h2>
      <img src="https://scriptia.net/wp-content/uploads/2018/06/java-programing.jpg" alt="Girl in a jacket" width="300" height="150"></img>
      <br></br>
      Total Hours : {course.totalHours}
      <br />
      Course Rating : {course.courseRating}
      <br></br>
        
      Price : {myCurrency} {CourseFinalPrice} 
      <button  className='view' >
        <Link to={pathCourse}>
         <FaUserPlus/>View Course
        </Link>
      </button>
    </div>
  )
}

export default CourseItem