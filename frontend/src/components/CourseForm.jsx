import React from 'react'
import {useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {createCourse} from '../features/courses/courseSlice'
import { v4 as uuidv4 } from "uuid";
import SubjectData from "../components/SubjectData.json";
import { toast } from 'react-toastify'
import FileBase64 from 'react-file-base64';





function CourseForm() {


    const [SubtitleList, setSubtitleList] = useState([{
        subt: "",
        description: "",
        totalh: "",
        exercises:[
            {
            question:"",
            answerA:"",
            answerB:"",
            answerC:"",
            answerD:"",
            correctanswer:"",
            id:uuidv4(),
            }
        ],
        videos:[
            {
            videotitle: "",
            url: "",
            videodescription:"",
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
            answerA:"",
            answerB:"",
            answerC:"",
            answerD:"",
            correctanswer:"",
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
            videodescription: "",
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
                answerA:"",
                answerB:"",
                answerC:"",
                answerD:"",
                correctanswer:"",
                id:uuidv4(),
                }
            ],
            videos:[
                {
                videotitle: "",
                url: "",
                videodescription: "",
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
        preview:'',
        thumbnail:'',
        
    })

    const {title,subt,description,totalh,question,videotitle,url,subject,price,summary,instructorName,courseRating,totalHours,preview,thumbnail} = FormData
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
            preview,
            thumbnail
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
        console.log(e.target.value)
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
    <>
    <form onSubmit={onSumbit}>
  <div class="form-row">

            <div class="form-group col-md-3">
            <label for="text">Course Title</label>
            <input type="text" class="form-control" id="title" name='title' placeholder="Course Title"value={title} onChange={onChange}/>
            </div>

            <div class="form-group col-md-6">
            <label for="text">Course Preview Video</label>
            <input type="url" class="form-control" id="preview" name='preview' placeholder="Youtube Url for the course preview"value={preview} onChange={onChange}/>
            </div>

  

            <div class="form-group col-md-3">
                <label for="inputAddress">Course Thumbnail</label>
                        <FileBase64
                                    
                                    type="file"
                                    multiple={false}
                                    onDone={({ base64 }) => setFormData({ ...FormData, thumbnail: base64 })}
                        />  
             </div>
             <br></br>
   </div>                 
  {SubtitleList.map((subt) => (
                    <div className="container border" key={subt.id}>
                        <div className="form-row">

                            <div className="form-group col-md-3">
                                <label htmlFor="subt">Subtitle Name</label>
                                <input
                                    name="subt"
                                    class="form-control"
                                    onChange={(e) => handleSubtitleData(subt.id,e)}
                                    type="text"
                                />
                            </div>

                            <div className="form-group col-md-3"> 
                                <label htmlFor='text'>Subtitle Total Hours</label>
                                <input type='text' name = 'totalh' id='totalh' className='form-control'  onChange={(e) => handleSubtitleData(subt.id, e)} ></input>
                            </div>

                            <div className="form-group col-md-4">
                                <label htmlFor='text'>Subtitle Description </label>
                                <textarea type='text' name = 'description' id='description' className='form-control'  onChange={(e) => handleSubtitleData(subt.id, e)} ></textarea>
                            </div>
                            <br></br>
                        </div>
							{subt.exercises.map((question) => (
                             <div className="container border"  key={question.id}>
								<div className="form-row">
                                    <br></br>
									<div className="form-group col-md-6">
										<label htmlFor="question">Question</label>
										<input
											name="question"
											type="text"
                                            className='form-control'
											onChange={(e) =>
												handleQuestioninExcersise(subt.id, question.id,e)
											}
										/>
                                        <label htmlFor="answerA">Answer A</label>
										<input
											name="answerA"
											type="text"
                                            className='form-control'
											onChange={(e) =>
												handleQuestioninExcersise(subt.id, question.id,e)
											}
										/>
                                        <label htmlFor="answerB">Answer B</label>
										<input
											name="answerB"
											type="text"
                                            className='form-control'
											onChange={(e) =>
												handleQuestioninExcersise(subt.id, question.id,e)
											}
										/>
                                        <label htmlFor="answerC">Answer C</label>
										<input
											name="answerC"
											type="text"
                                            className='form-control'
											onChange={(e) =>
												handleQuestioninExcersise(subt.id, question.id,e)
											}
										/>
                                        <label htmlFor="answerD">Answer D</label>
										<input
											name="answerD"
											type="text"
                                            className='form-control'
											onChange={(e) =>
												handleQuestioninExcersise(subt.id, question.id,e)
											}
										/>
                                        <label htmlFor="correctanswer">Correct Answer</label>
										<select name="correctanswer" className='form-control' onChange={(e) =>
												handleQuestioninExcersise(subt.id, question.id,e)
											}>
                                                <option value="A">A</option>
                                                <option value="B">B</option>
                                                <option value="C">C</option>
                                                <option value="D">D</option>
                                            </select>
									</div>
                                    <br></br>
									<button type="button" class="btn btn-primary"  onClick={() => addNewQuestioninExcersise(subt.id)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"></path>
                                        </svg>
                                        Add Question
                                    </button>
									
								</div>
                                <br></br>
                                
                                </div>
							))}

                            {subt.videos.map((video) => (
                                <div className="container border"  key={video.id}>
                                    <div className="form-row">
                                        <br></br>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="videotitle">Video Title</label>
                                            <input
                                                name="videotitle"
                                                type="text"
                                                className='form-control'
                                                onChange={(e) =>
                                                    handleVideoinSubtitle(subt.id, video.id,e)
                                                }
                                            />
                                            <label htmlFor="url">Video Url</label>
                                            <input
                                                name="url"
                                                type="url"
                                                className='form-control'
                                                onChange={(e) =>
                                                    handleVideoinSubtitle(subt.id, video.id,e)
                                                }
                                            />
                                            <label htmlFor="videodescription">Video Description</label>
                                            <textarea
                                                name="videodescription"
                                                type="text"
                                                className='form-control'
                                                onChange={(e) =>
                                                    handleVideoinSubtitle(subt.id, video.id,e)
                                                }
                                            />
                                            <br></br>
                                        </div>
                                        <button type="button" class="btn btn-primary"  onClick={() => addNewVideoinSubtitle(subt.id)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"></path>
                                        </svg>
                                        Add Video
                                    </button>
                                    <br></br>
                                    </div>
                                    <br></br>
                                </div> 
							))}
                            




						
                        <br></br>
                        <br></br>
                        <br></br>
					
                    </div>
				    ))}
                    <br></br>
                    <button type="button" class="btn btn-primary"  onClick={handleAddSubt}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"></path>
                                        </svg>
                                        Add Subtitle
                                    </button>
				    
      <div className="form-row">
        <br></br>
        <div class="form-group col-md-6">
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
        </div>
        <div class="form-group col-md-6">
                     <label htmlFor='text'>Course Price</label>
                    <input type='number' name = 'price' id='price' className='form-control' value={price} onChange={onChange}></input>

        </div>
        <br></br>
        <div class="form-group col-md-6">
                    <label htmlFor='text'>Course Summary</label>
                    <textarea type='text' name = 'summary' id='summary' className='form-control' value={summary} onChange={onChange}></textarea>   
        </div>
        <br></br>                
        <button type="submit" class="btn btn-primary">Add Course</button>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        
      </div>                                          
    </form>
 </>               
  )
}

export default CourseForm