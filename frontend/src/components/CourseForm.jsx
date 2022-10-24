import {useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {createCourse} from '../features/courses/courseSlice'




function CourseForm() {
    const {user} = useSelector((state) => state.auth)
    const [FormData, setFormData] = useState({
        title: '',
        subtitles: '',
        subject: '',
        price: '',
        summary: '',
        instructorName:'',
        courseRating: 0,
        totalHours: '',
    })

    const {title,subtitles,subject,price,summary,instructorName,courseRating,totalHours} = FormData
    const [text,setText] = useState('')

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const onSumbit = e =>{
        e.preventDefault()

        const userData = {
            title,
            subtitles,
            subject,
            price,
            summary,
            instructorName: user.username,
            courseRating: 0,
            totalHours,
        }
        console.log(userData)
        dispatch(createCourse(userData))
        console.log(user.username)
        setText('')
        navigate('/'+user.role)
    }
    const onChange = (e) => {
        setFormData((prevState)=> ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }


  return (
    <section className='form'>
            <form onSubmit={onSumbit}>
                <div className="form-group">
                    <label htmlFor='text'>Course Title</label>
                    <input type='text' name = 'title' id='title' value={title} onChange={onChange}></input>
                    <label htmlFor='text'>Subtitles</label>
                    <input type='text' name = 'subtitles' id='subtitles' value={subtitles} onChange={onChange}></input>
                    <label htmlFor='text'>Subject</label>
                    <input type='text' name = 'subject' id='subject' value={subject} onChange={onChange}></input>
                    <label htmlFor='text'>Course Price</label>
                    <input type='number' name = 'price' id='price' value={price} onChange={onChange}></input>
                    <label htmlFor='text'>Course Summary</label>
                    <input type='text' name = 'summary' id='summary' value={summary} onChange={onChange}></input>
                    <label htmlFor='text'>Course Total Hours</label>
                    <input type='text' name = 'totalHours' id='totalHours' value={totalHours} onChange={onChange}></input>
               
               
               
               
               
               
                </div>

                <div className="form-group">
                    <button className="btn btn-block" type='submit'>Add Course</button>
                </div>

            </form>



    </section>
  )
}

export default CourseForm