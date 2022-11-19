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
        
        videos:{
            videotitle: "",
            url: "",
        }
    }]);

    const [QuestionList, setQuestionList] = useState([{
        
            question: "",
       
    }]);


    const [subjects,setSubjects] = useState(SubjectData);
    //console.log(subjects)
    //console.log("countries", countries);

    const [searchSubject, setSearchSubject] = useState();
    //console.log("searchCountry", searchCountry);

    function handleChange(event){
        setSearchSubject(event.target.value)
        setFormData((prevState)=> ({
            ...prevState,
            subject: searchSubject,
        }))

    }

    const handleSubtitleAdd = () => {
        setSubtitleList([...SubtitleList, {
            subt: "",
            description: "",
            totalh: "",
            
            videos:{
                videotitle: "",
                url: "",
            }
        }]);
      };


      const handleQuestionAdd = () => {
        setQuestionList([...QuestionList,{
        
            question: "",
       
        } ]);
      };

      

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
    const obj = {
        subt: "yhaya",

    }
    const onSumbit = e =>{
        e.preventDefault()
        const list = [...SubtitleList]
        console.log(list)
        const userData = {
            title,
            subtitles : {
                subt: list.subt,
                description: SubtitleList.description,
                totalh: SubtitleList.totalh,
                exercises:QuestionList,
                videos:SubtitleList.videos,
            },
            subject: searchSubject,
            price,
            summary,
            instructorName: user.username,
            courseRating: 0,
            totalHours,
        }
        // const SubtitlesData = {
        //     subt,
        //     description,
        //     totalh,
        //     exercises:ExercisesData,
        //     videos:VideosData,
        // }
        // const ExercisesData = {
        //     question,
        // }
        // const VideosData = {
        //     videotitle,
        //     url,
        // }
        
        console.log(userData)
        dispatch(createCourse(userData))
        //console.log(user.username)
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

    const handleServiceChange = (e, index) => {
        const { name, value, id } = e.target;
        const list = [...SubtitleList];
        //console.log("Here!!!!")
        
        //console.log(list)
        if(id=='videos'){
            //console.log(id)
            //console.log(name)
            const test = id +'.'+ name;
            //console.log(test)
            list[index][id][name] = value;
        }else{
            list[index][name] = value;
        }
       
        setSubtitleList(list);
      };

      const handleQuestionChange = (e, index) => {
        console.log(index)
        const { name, value} = e.target;
        const list = [...QuestionList];
        
            list[index][name] = value;
        
       
        setQuestionList(list);
        console.log(list)
        console.log(QuestionList)
      };


  return (
    <section className='form'>
            <form onSubmit={onSumbit}>
                <div className="form-group">
                    <label htmlFor='text'>Course Title</label>
                    <input type='text' name = 'title' id='title' value={title} onChange={onChange}></input>



                
        {SubtitleList.map((singleSubtitle, index) => (
          <div key={index} className="services">
            <div className="first-division">
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            <label htmlFor='text'>Subtitle {index}</label>
                    <input type='text' name = 'subt' id='subt' value={singleSubtitle.subt} onChange={(e) => handleServiceChange(e, index)} required></input>
            <label htmlFor='text'>Subtitle Total Hours</label>
                    <input type='text' name = 'totalh' id='totalh' value={singleSubtitle.totalh} onChange={(e) => handleServiceChange(e, index)} required></input> 
            <label htmlFor='text'>Subtitle Description </label>
                    <input type='text' name = 'description' id='description' value={singleSubtitle.description} onChange={(e) => handleServiceChange(e, index)} required></input>  
            {QuestionList.map((question,index1) => (<>
                <div key={index1} className="services">
            <label htmlFor='text'>Subtitle {index} Question {index1}</label>
            <input type='text' name='question' id='exercises' value={question.question} onChange={(e) => handleQuestionChange(e, index1)}></input>
            {QuestionList.length - 1 === index1 && QuestionList.length < 5 && (
                <button
                  type="button"
                  onClick={handleQuestionAdd}
                  className="add-btn"
                >
                  <span>Add a Question</span>
                </button>
              )}
              </div>
            
            
            
            
            </>))
            
            
            
            
            
            }
            
            <label htmlFor='text'>Subtitle VideoTitle</label>
                    <input type='text' name = 'videotitle' id='videos' value={singleSubtitle.videos.videotitle} onChange={(e) => handleServiceChange(e, index)} ></input>
            <label htmlFor='text'>Subtitle Video Url</label>
                    <input type='text' name = 'url' id='videos' value={singleSubtitle.videos.url} onChange={(e) => handleServiceChange(e, index)} ></input> 
              <br></br>
              
              {SubtitleList.length - 1 === index && SubtitleList.length < 5 && (
                <button
                  type="button"
                  onClick={handleSubtitleAdd}
                  className="add-btn"
                >
                  <span>Add a Subtitle</span>
                </button>
              )}
            </div>
            
          </div>
        ))}
                    {/* <label htmlFor='text'>Subtitle</label>
                    <input type='text' name = 'subt' id='subt' value={subt} onChange={onChange}></input>
                    <label htmlFor='text'>Subtitle Total Hours</label>
                    <input type='text' name = 'totalh' id='totalh' value={totalh} onChange={onChange}></input>
                    <label htmlFor='text'>Subtitle Description </label>
                    <input type='text' name = 'description' id='description' value={description} onChange={onChange}></input>
                    <label htmlFor='text'>Subtitle Question</label>
                    <input type='text' name = 'question' id='question' value={question} onChange={onChange}></input>
                    <label htmlFor='text'>Subtitle VideoTitle</label>
                    <input type='text' name = 'videotitle' id='videotitle' value={videotitle} onChange={onChange}></input>
                    <label htmlFor='text'>Subtitle Video Url</label>
                    <input type='text' name = 'url' id='url' value={url} onChange={onChange}></input>
                    */}
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
               
               
               
               
               
               
                </div>

                <div className="form-group">
                    <button className="btn btn-block" type='submit'>Add Course</button>
                </div>

            </form>



    </section>
  )
}

export default CourseForm