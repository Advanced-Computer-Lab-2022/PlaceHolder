import React from 'react'
import {useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {createCourse} from '../features/courses/courseSlice'
import { v4 as uuidv4 } from "uuid";
import SubjectData from "../components/SubjectData.json";
import { toast } from 'react-toastify'





function CourseForm() {


    const [SubtitleList, setSubtitleList] = useState([{
        subt: "",
        description: "",
        totalh: "",
        exercises:[
            {
            question:"",
            id:uuidv4(),
            }
        ],
        videos:[
            {
            videotitle: "",
            url: "",
            id:uuidv4(),
             }
        ],
        id:uuidv4(),
    }]);

    

   //handle new question inside selected subtitle 
	const addNewQuestioninExcersise = (id) => {
		const index = SubtitleList.findIndex((subt) => subt.id === id)
		let _SubtitleList = [...SubtitleList]
		_SubtitleList[index].exercises.push({
			question: "",
			id: uuidv4(),
		})
		setSubtitleList(_SubtitleList)
	}

    //handle new video inside selected subtitle 
	const addNewVideoinSubtitle = (id) => {
		const index = SubtitleList.findIndex((subt) => subt.id === id)
		let _SubtitleList = [...SubtitleList]
		_SubtitleList[index].videos.push({
			videotitle: "",
            url: "",
            id:uuidv4(),
		})
		setSubtitleList(_SubtitleList)
	}

    //handle add Subt
	const handleAddSubt = () => {
		let _SubtitleList = [...SubtitleList]
		_SubtitleList.push({
            subt: "",
            description: "",
            totalh: "",
            exercises:[
                {
                question:"",
                id:uuidv4(),
                }
            ],
            videos:[
                {
                videotitle: "",
                url: "",
                id:uuidv4(),
                 }
            ],
            id:uuidv4(),
        })
		setSubtitleList(_SubtitleList)
	}



    const [subjects,setSubjects] = useState(SubjectData);
    

    const [searchSubject, setSearchSubject] = useState();
    

    function handleChange(event){
        setSearchSubject(event.target.value)
        setFormData((prevState)=> ({
            ...prevState,
            subject: searchSubject,
        }))

    }

    
      

    const {user} = useSelector((state) => state.auth)
    const [FormData, setFormData] = useState({
        title: '',
        subt: '',
        description: '',
        totalh: '',
        question : '',
        videotitle: '',
        url: '',
        subject: '',
        price: '',
        summary: '',
        instructorName:'',
        courseRating: 0,
        totalHours: '',
    })

    const {title,subt,description,totalh,question,videotitle,url,subject,price,summary,instructorName,courseRating,totalHours} = FormData
    const [text,setText] = useState('')

    const navigate = useNavigate()
    const dispatch = useDispatch()
   
    const onSumbit = () =>{
        
        
        const userData = {
            title,
            subtitles : SubtitleList,
            subject: searchSubject,
            price,
            summary,
            instructorName: user.username,
            courseRating: 0,
            totalHours,
        }
        
        
        console.log(userData)
        console.log(SubtitleList)
        dispatch(createCourse(userData))
       
        setText('')
        navigate('/'+user.role)
        toast.success("Course Added!")
    }
    const onChange = (e) => {
        setFormData((prevState)=> ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    
      //handle Subtitle data
	const handleSubtitleData = (
		id,
        e
		
	) => {
		const index = SubtitleList.findIndex((subt) => subt.id === id)

		let _SubtitleList = [...SubtitleList] 

		_SubtitleList[index][e.target.name] = e.target.value
		setSubtitleList(_SubtitleList)
	}

    //handle inner question data in subtitle
	const handleQuestioninExcersise = (
		subtID,
		questionID,
        e
		
	) => {
		const subtindex = SubtitleList.findIndex((subt) => subt.id === subtID)
		let _SubtitleList = [...SubtitleList] 
		const questionIndex = SubtitleList[subtindex].exercises.findIndex(
			(q) => q.id === questionID,
		)
		_SubtitleList[subtindex].exercises[questionIndex][e.target.name] =
			e.target.value
		setSubtitleList(_SubtitleList)
	}

    //handle inner video data in subtitle
	const handleVideoinSubtitle = (
		subtID,
		videoID,
        e
		
	) => {
		const subtindex = SubtitleList.findIndex((subt) => subt.id === subtID)
		let _SubtitleList = [...SubtitleList] 
		const questionIndex = SubtitleList[subtindex].videos.findIndex(
			(v) => v.id === videoID,
		)
		_SubtitleList[subtindex].videos[questionIndex][e.target.name] =
			e.target.value
		setSubtitleList(_SubtitleList)
	}


  return (
    <section className='form'>
            <form onSubmit={onSumbit} >
                <div className="form-group">
                    <label htmlFor='text'>Course Title</label>
                    <input type='text' name = 'title' id='title' value={title} onChange={onChange}></input>
                    <br></br>
                    <br></br>
                    <br></br>


                    <div className="row-section">
				    {SubtitleList.map((subt) => (
					<div className="row-section__inner" key={subt.id}>
						<div className="input-group">
							<label htmlFor="subt">Subtitle Name</label>
							<input
								name="subt"
								onChange={(e) => handleSubtitleData(subt.id,e)}
								type="text"
							/>
                             <label htmlFor='text'>Subtitle Total Hours</label>
                    <   input type='text' name = 'totalh' id='totalh'  onChange={(e) => handleSubtitleData(subt.id, e)} ></input> 
                    <label htmlFor='text'>Subtitle Description </label>
                    <input type='text' name = 'description' id='description'  onChange={(e) => handleSubtitleData(subt.id, e)} ></input>
							
							{subt.exercises.map((question) => (
								<div className="form-row" key={question.id}>
									<div className="input-group">
										<label htmlFor="question">Question</label>
										<input
											name="question"
											type="text"
											onChange={(e) =>
												handleQuestioninExcersise(subt.id, question.id,e)
											}
										/>
									</div>
									
									<button type='button' onClick={() => addNewQuestioninExcersise(subt.id)}>+</button>
								</div>
							))}

                            {subt.videos.map((video) => (
								<div className="form-row" key={video.id}>
									<div className="input-group">
										<label htmlFor="videotitle">Video Title</label>
										<input
											name="videotitle"
											type="text"
											onChange={(e) =>
												handleVideoinSubtitle(subt.id, video.id,e)
											}
										/>
                                        <label htmlFor="url">Video Url</label>
										<input
											name="url"
											type="text"
											onChange={(e) =>
												handleVideoinSubtitle(subt.id, video.id,e)
											}
										/>
									</div>
									
									<button type='button' onClick={() => addNewVideoinSubtitle(subt.id)}>+</button>
								</div>
							))}
                            




						</div>
                        <br></br>
                        <br></br>
                        <br></br>
					</div>
                    
				    ))}
				    <button type='button' onClick={handleAddSubt}>Add new Subtitle</button> <br />
				
			        </div>
                    <br></br>
                    <br></br>
		            
                    <label htmlFor='text'>Subject</label>
                    <select className="form-control" id='subject' name='subject' onChange={handleChange} value={searchSubject}>

                    <option value="" hidden>
                         Please Select Subject
                    </option>
                    {
                        subjects.map((item) => {
                        return (
                            <option key={uuidv4()} value={item.subject}>
                                {item.subject}
                    </option>
                                 );
                                                 })
                     }          
            
                     </select>

                    {/* <input type='text' name = 'subject' id='subject' value={subject} onChange={onChange}></input> */}
                    <label htmlFor='text'>Course Price</label>
                    <input type='number' name = 'price' id='price' value={price} onChange={onChange}></input>
                    <label htmlFor='text'>Course Summary</label>
                    <input type='text' name = 'summary' id='summary' value={summary} onChange={onChange}></input>
                    <label htmlFor='text'>Course Total Hours</label>
                    <input type='text' name = 'totalHours' id='totalHours' value={totalHours} onChange={onChange}></input>
               
               
               
               
               
               
                

                     <div className="form-group">
                        <button className="btn btn-block" type='submit' >Add Course</button>
                    </div>
                    </div>   
            </form>



    </section>

















       
                    
  )
}

export default CourseForm