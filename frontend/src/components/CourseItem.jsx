import { useDispatch } from 'react-redux'
//import { deleteGoal } from '../features/goals/goalSlice'

function CourseItem({ course }) {
  const dispatch = useDispatch()

  return (
    <div className='goal'>
      
      <h2>{course.title}</h2>
      <img src="https://scriptia.net/wp-content/uploads/2018/06/java-programing.jpg" alt="Girl in a jacket" width="300" height="150"></img>
      <br></br>
      Teached By : {course.instructorName}
      
      <br></br>
         
      Price : ${course.price} 
      <button  className='view' >
        View Course
      </button>
    </div>
  )
}

export default CourseItem