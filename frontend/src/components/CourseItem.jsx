import { useDispatch } from 'react-redux'
//import { deleteGoal } from '../features/goals/goalSlice'

function CourseItem({ course }) {
  const dispatch = useDispatch()

  return (
    <div className='goal'>
      <div>{new Date(course.createdAt).toLocaleString('en-US')}</div>
      <h2>{course.title}</h2>
      {/* <button onClick={() => dispatch(deleteGoal(goal._id))} className='close'>
        X
      </button> */}
    </div>
  )
}

export default CourseItem