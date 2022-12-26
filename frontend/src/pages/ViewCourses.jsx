import React from 'react'
import {useEffect} from 'react'
import {useNavigate, useSearchParams, useParams} from 'react-router-dom'
import {FaSignInAlt, FaSignOutAlt, FaUser, FaBook , FaBookOpen, FaUserPlus , FaStar} from 'react-icons/fa'
import {useSelector , useDispatch} from 'react-redux'
import {toast} from 'react-toastify'
import CourseItem from '../components/CourseItem'
import Spinner from '../components/Spinner'
import { getCourses, reset, getCoursePage, addDiscount, getCertficate , getCertficateEmail, requestAccess } from '../features/courses/courseSlice'
import axios from 'axios'
import { useState } from 'react'
import CourseForm from '../components/CourseForm'
import{refreshuser, registerCourse,updateRating, updateRatingCourse, updateSubtitle, updateRequests} from '../features/auth/authSlice'
import {createReport} from '../features/reports/reportSlice'
import {createRefund, getMyRefund , reset1} from '../features/refunds/refundSlice'
import "../components/Styling/Ratings.css"

//import DatePicker from '../components/DatePicker'

function ViewCourses(){
    const title = useParams();
    //console.log(title.title)
    var tile = title.title
    const navigate = useNavigate()
    const dispatch = useDispatch()
    var flag = false;
    var flag1 = false;
    var flag2 = false;
    var flagsubmit = false;
    var flag4 = false;
    var flag5 = false;
    var flag6 = false;
    var courseprogress = 0;
    var tries = 1;
    
    const[courses1 , setCourses] = useState();
    const {user} = useSelector((state) => state.auth)
    const {report} = useSelector((state) => state.report)
    const refund1 = useSelector((state) => state.refund)
    const { courses, isLoading, isError, message } = useSelector(
      (state) => state.courses
    )

    const [FormData, setFormData] = useState({
      review: '',
      rating: 0,
      
    })

    const [answers , setanswers] = useState([])
    const [results , setresults] = useState([])
    const [toggle, setToggle] = useState(true)
    const [toggle1,setToggle1] = useState(true)
    const [notes,setnotes] = useState()
    const [currentsub,setcurrentsub] = useState()

    const [FormDataCourse,setFormDataCourse] = useState({
      reviewCourse: '',
      ratingCourse: 0,
    })

    const [FormDataDiscount,setFormDataDiscount] = useState({
      amountOfDiscount: 0,
      ExpiryDate: '',
    })
    const [Report,setReport] = useState()
    const [Refund,setRefund] = useState()

    const {review ,rating} = FormData
    const {reviewCourse,ratingCourse} = FormDataCourse
    const handlereview = (e) => {
      setFormData((prevState)=> ({
          ...prevState,
          [e.target.name]: e.target.value,
      }))
     }

     const handleCourseReview = (e) => {
      setFormDataCourse((prevState)=> ({
          ...prevState,
          [e.target.name]: e.target.value,
      }))
     }
     
    useEffect(() => {
      if (isError) {
        console.log(message)
      }
      // console.log(courses)
      if(!user){
        toast.error('Please Log In First!')
        navigate('/login')
      }else{
      
      //console.log("Dispatched!")
      const userData2 = {
        username:user.username
      }
      //dispatch(refreshuser(userData2))
      dispatch(getCoursePage(title.title))
      dispatch(getMyRefund(userData2))
      setCourses(courses)
      
    }
      
      return () => {
        dispatch(reset())
        dispatch(reset1())
      }
    }, [user, navigate, isError, message, dispatch])
  
    if (isLoading) {
      return <Spinner />
    }

    function checkCourse(courses , userCourses){
        if(userCourses == null | courses==null){
          setCourses(courses)
        }
        //console.log(userCourses)
        userCourses.map((course)=>{
          //console.log(course.courseName)
          if(courses.title==course.courseName){
            //console.log(course.courseName)
            //console.log('treueeeeeeeeeee')
            flag = true;
           
            
          }
        })
       
      }

     function checkRating(UserRates , instructorName){
      if(UserRates==null){
        flag1 = false;
      }
      UserRates.map((rate)=>{
        if(rate.instructorrated == instructorName){
          console.log(rate.instructorrated)
          console.log(instructorName)
          flag1 = true;
        }
      })
      
     } 

     function checkCourseRating(usernameCoursesRated , title){
      if(usernameCoursesRated==null){
        flag2 = false;
      }else{
      usernameCoursesRated.map((rate)=>{
        if(rate.coursenamerated == title){
          
          flag2 = true;
        }
      })
    }
      
     }
    
     
    function RegisterUserCourse(){
      const userData = {
        username: user.username,
        courseName:courses.title
      }
      const userData2={
        username: user.username
      }

      dispatch(registerCourse(userData))
      dispatch(refreshuser(userData2))
      navigate('/'+user.role)
      toast.success("Registered To This Course Successfully!!")
    }
    function p1(courses,usercourses){
      if(checkCourse(courses,usercourses)==true){
        return {
          
        }
      }else{

      }
    }
    const ratesubmit = (e) => {
      e.preventDefault()
      const userData = {
          username:user.username,
          usernameins:courses.instructorName,
          review,
          rating
      }
      const userData2 = {
        username:user.username
      }
      //console.log(userData)

       dispatch(updateRating(userData))
       
       navigate('/'+user.role)
       toast.success('Rating Added !')
  }


  const ratesubmitCourse = (e) => {
    e.preventDefault()
    const userData = {
        username:user.username,
        coursename:courses.title,
        reviewCourse,
        ratingCourse
    }
    const userData2 = {
      username:user.username
    }
    //console.log(userData)

     dispatch(updateRatingCourse(userData))
     
     navigate('/'+user.role)
     toast.success('Rating Added !')
}
  const handleRating = (e) => {
    //e.preventDefault()
    console.log(e.target.value)
    setFormData((prevState)=> ({
      ...prevState,
      [e.target.name]: e.target.value,
   }))
  }

  const handleCourseRating = (e) => {
    //e.preventDefault()
    console.log(e.target.value)
    setFormDataCourse((prevState)=> ({
      ...prevState,
      [e.target.name]: e.target.value,
   }))
  }
  const handlequestionanswer = (
		subtID,
		questionID,
        e
		
	) => {
    //console.log(answers)
    //console.log(e.target.value)
		const subtindex = courses.subtitles.findIndex((subt) => subt._id === subtID)
    //console.log(subtindex)
		let _SubtitleList = [...courses.subtitles]
    //console.log(_SubtitleList) 
    
		const questionIndex = _SubtitleList[subtindex].exercises.findIndex(
			(q) => q._id === questionID,
		)
    //console.log(questionIndex)
    //console.log(_SubtitleList[subtindex].exercises)
    //console.log(questionID)
    var flag = false;
    if(_SubtitleList[subtindex].exercises[questionIndex].correctanswer == e.target.value){
      flag=true
    }
		const questionForm = {
      question:_SubtitleList[subtindex].exercises[questionIndex].question,
      correctanswer:_SubtitleList[subtindex].exercises[questionIndex].correctanswer,
      usersanswer:e.target.value,
      correct:flag
    }
   
    //console.log(questionForm)
    let _answers = [...answers]
    for (var i = _answers.length - 1; i >= 0; --i) {
      if (_answers[i].question == _SubtitleList[subtindex].exercises[questionIndex].question) {
          _answers.splice(i,1);
      }
  }
    _answers.push(questionForm)
		setanswers(_answers)
    console.log(answers)
    
	}


  function submitquestionAnswers(){
    //  let _answers = [...answers]
    //  let _results = [...results]
    //   if(_answers.length==0){
    //     toast.error("Please Answer Questions First!")
    //   }else{
    //     var resultsform = {
    //       question:"",
    //       correct:"",
    //       correctanswer:""
    //     }
    //     for(var i = 0;i<_answers.length;i++){
    //       if(_answers[i].correctanswer=="true"){
              
    //       }
    //     }
    //   }
    flagsubmit=true
    

  }  
  function checkquestionanswer(question){
    console.log(question)
    let _answers = [...answers]
    for(var i =0;i<_answers.length;i++){
      if(_answers[i].question==question){
        //console.log("YESSSSSSSSSS")
        //console.log(_answers[i].correctanswer)
        if(_answers[i].correct==true){
          console.log("Right")
          return "true"
        }else{
          return "false"
        }
      }
    }
  }
  
  function rightanswers(){
    let _answers = [...answers]
    var total = 0;
    var correct = 0;
    for(var i =0;i<_answers.length;i++){
        total++
        if(_answers[i].correct==true){
          correct++
        }
    }
    return "You Got "+correct+" correct out of "+total+" questions!"
  }
  function displaysubtitle(sub){
       var a = [...user.courses]
       var currentsub = 0;
       a.map((course)=>{
          if(course.courseName == courses.title){
            currentsub = course.currentSubtitle
          }
       })
       if(sub.subtNo == currentsub | sub.subtNo < currentsub){
        setcurrentsub(sub)
       }else{
        toast.error("Please Finish Earlier Subtitles First!")
       }
      
      
  }

  function displaycourseinfo(){
    const sub = {
      courseinfo:true,
      title:courses.title,
      summary:courses.summary,
      subject:courses.subject,
      price:courses.price,
      instructorName:courses.instructorName,
      courseRating:courses.courseRating,
      totalHours:courses.totalHours,
      ratings:courses.ratings,
    }
    setcurrentsub(sub)
  }

  function displayProblemReport(){
    const sub = {
      problemDisplay:true,
      
    }
    setcurrentsub(sub)
  }

  
  function displayRefund(){
    const sub = {
      refundDisplay:true,
      
    }
    setcurrentsub(sub)
  }

  const addDiscountHandler = (e) => {
    //e.preventDefault()
    //console.log(e.target.value)
    setFormDataDiscount((prevState)=> ({
      ...prevState,
      [e.target.name]: e.target.value,
   }))
  }

  function submitDiscount(){
    console.log(FormDataDiscount)
    const formdata = {
      title:courses.title,
      amountOfDiscount:FormDataDiscount.amountOfDiscount,
      ExpiryDate:FormDataDiscount.ExpiryDate,
    }
    dispatch(addDiscount(formdata))
    toast.success("Discount Added !")
    navigate('/courses')
  }

  const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );
  
  async function GetNextSubtitle(){
   
    var a = [...user.courses]
       var currentsub = 0;
       a.map((course)=>{
          if(course.courseName == courses.title){
            currentsub = course.currentSubtitle
          }
       })
       const formData = {
        title:courses.title,
        username:user.username
       }
       const formData2 = {
        username:user.username
       }
     console.log("Current Subtitle : " + currentsub)
     dispatch(updateSubtitle(formData))
     await delay(3000)
     dispatch(refreshuser(formData2))

     
     toast.success("Next Subtitle Unlocked!")
     var arrayLength=0;
      var b = [...courses.subtitles]
      b.map((course)=>{
        arrayLength++
      })
     if(arrayLength == currentsub+1){
      sendCert();
     } 
  }

  function checkifSubtitle(currentsub){
    var a = [...user.courses]
    var currentsub1 = 0;
    a.map((course)=>{
       if(course.courseName == courses.title){
         currentsub1 = course.currentSubtitle
       }
    })
    console.log(currentsub1)
    console.log("Current Sub User: " + currentsub.subtNo)
    console.log("Sub 2 : "+currentsub1)
    if(currentsub.subtNo == currentsub1){
      console.log("adsadasd")
      return true;
    }else{
      return false;
    }
  }

  function checkifnotlastSub(){
    var a = [...user.courses]
    var currentsub1 = 0;
    var arrayLength=0;
    a.map((course)=>{
       if(course.courseName == courses.title){
         currentsub1 = course.currentSubtitle
       }
    })
    var b = [...courses.subtitles]
    b.map((course)=>{
      arrayLength++
    })
    
    if(currentsub1 < arrayLength){
      return true
    }else{
      return false
    }
  }

  function checkcourseProgress(){
    var arrayLength=0;
    var b = [...courses.subtitles]
    b.map((course)=>{
      arrayLength++
    })
    var a = [...user.courses]
    var currentsub1 = 0;
    a.map((course)=>{
       if(course.courseName == courses.title){
         currentsub1 = course.currentSubtitle
       }
    })
    console.log(currentsub1/arrayLength)
    courseprogress = (currentsub1 / arrayLength)*250
    console.log("Course Progress : "+(courseprogress/250)*100)
    
  }

  function saveTextAsFile(textToWrite, fileNameToSaveAs) {
    ///console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
    var textFileAsBlob = new Blob([textToWrite], {type:'text/plain'}); 
    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    if (window.webkitURL != null) {
    // Chrome allows the link to be clicked
    // without actually adding it to the DOM.
    downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
    }
    else {
    // Firefox requires the link to be added to the DOM
    // before it can be clicked.
    // downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
    // downloadLink.onclick = destroyClickedElement;
    // downloadLink.style.display = "none";
    // document.body.appendChild(downloadLink);
    }
    setnotes("");
    downloadLink.click();
}

function handleNotes(e){
  e.preventDefault()
  setnotes(e.target.value)
  console.log(notes)

}

function DownloadCertficate(){
  const data = {
    title:courses.title,
    firstName:user.firstName,
    lastName:user.lastName
  }

  dispatch(getCertficate(data))
  
  toast.success("Certficate Downloaded!")
  //navigate('/' + user.role)
}

function checkifReceived(){
  var a = [...user.courses]
    
    a.map((course)=>{
       if(course.courseName == courses.title & !flag){
         if(course.receivedCert=='false'){
          
          flag5 = true
          //console.log(course)
         }else{
         flag5 = false
         }
       }
    })
    console.log("Flag : "+ flag5)
    console.log(user.courses)
}

function sendCert(){
  
  const data = {
    email:user.email,
    username:user.username,
    title:courses.title,
    firstName:user.firstName,
    lastName:user.lastName
  }
  const formData = {
    username:user.username
  }

  dispatch(getCertficateEmail(data))
  toast.success("Congratulations on Completing This Course . An Email Containing Your Certficate is sent or you can download it from here")
  dispatch(refreshuser(formData))

}

function emailer(){
  
  checkifReceived()
  if(checkifnotlastSub()==false){
    console.log(tries)
    if(flag5){
      
      sendCert()
    }
  }
}

function RequestAccess(){
  const data = {
    username:user.username,
    title:courses.title
  }
  const data2 = {
    username:user.username
  }
  dispatch(requestAccess(data))
  dispatch(updateRequests(data))
  navigate('/'+user.role)
  dispatch(refreshuser(data2))
  toast.success("Request Sent !")
}

function checkifasked(){
    var a = [...user.requestedCourse]
    a.map((course)=>{
      if(course.courseName == courses.title){
        flag6 = true
      }else{
        flag6 = false
      }
    })
    console.log("Flag 6 :" +flag6)
}

function handleReport(e){
  setReport((prevState)=> ({
    ...prevState,
    [e.target.name]: e.target.value,
}))

  console.log(Report)
}

function handleRefund(e){
  setRefund((prevState)=> ({
    ...prevState,
    [e.target.name]: e.target.value,
}))

  console.log(Report)
}

function SubmitReport(){
  if(Report.ReportMsg == null){
    toast.error('Please Fill Out Message Field!')
  }else if(Report.ReportType == null | Report.ReportType == 'Choose...'){
    toast.error('Please Select Report Type')
  }else{
    const data = {
      user1:user.username,
      role:user.role,
      type:Report.ReportType,
      status:'pending',
      msg:Report.ReportMsg,
      course:courses.title
    }
    dispatch(createReport(data))
    navigate('/'+user.role)
    toast.success('Report Submitted ! Please Check Report Status for further updates')
  }
  
}


function SubmitRefund(){
  if(Refund.RefundMsg == null){
    toast.error('Please Fill Out Message Field!')
  }else if(Refund.RefundType == null | Refund.RefundType == 'Choose...'){
    toast.error('Please Select Refund Reason')
  }else{
    const data = {
      user1:user.username,
      role:user.role,
      type:Refund.RefundType,
      status:'pending',
      msg:Refund.RefundMsg,
      course:courses.title
    }
    dispatch(createRefund(data))
    navigate('/'+user.role)
    toast.success('Refund Submitted ! Please Check Wallet for further updates')
  }
  
}

function gotopaymentendpoint(){
  const paymentpath = '/pay/' + courses.title
  navigate(paymentpath)
}

    
    
    return (<>
    {(courses.title !=null & user !=null)?(<>{
        checkCourse(courses,user.courses)
        
      }
      {checkRating(user.ratingssentins,courses.instructorName)}
      {checkCourseRating(user.coursesrated,courses.title)}
      {
        (courses.title !=null) ? ((flag==true | user.username==courses.instructorName) ? (<>{(courses.title !=null) ? (
          
        <>
          {emailer()}
          {checkcourseProgress()}
          <div className="container-fluid border">
            <div className="row">
            <div className="col-2">
              <div class="d-flex flex-column align-items-stretch flex-shrink-0 bg-white border" style={{width: 250 }}>
                  <br></br>
                  <h5>Course Progress</h5>
                  <br></br>
                    <div class="list-group list-group-flush border-bottom scrollarea">
                                            <div class="progress">
                          <div class="progress-bar" role="progressbar" aria-valuenow="30" style={{width:courseprogress}} aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <br></br>
                    
                    {(checkifnotlastSub()==false)?(<>{(checkifReceived()==false)?(<>{sendCert()}</>):(<></>)}<div class="list-group list-group-flush border-bottom scrollarea">
                                            <button type='button' className='btn btn-primary' onClick={() => DownloadCertficate()}>Download Certficate</button>
                                            {/* <a type='button' className='btn btn-primary' href={'https://localhost:8000/courses/certf/' + courses.title + '/'  + user.firstName + '/' + user.lastName}>Download Certficate</a> */}
                    </div>
                    <br></br></>):(<></>)}
                    
                  <h5>Course Information</h5>
                  <br></br>
                    <div class="list-group list-group-flush border-bottom scrollarea">
                            <a onClick={()=>displaycourseinfo()} class="list-group-item list-group-item-action  py-3 lh-tight border  btn btn-primary" aria-current="true">
                          <div class="d-flex w-100 align-items-center justify-content-between">
                            <strong class="mb-1">Course Information</strong>
                            
                          </div>
                          <div class="col-10 mb-1 small"></div>
                        </a>    
                    </div>
                    <br></br>
                  <h5>Subtitles</h5>
                  <br></br>
                  <div class="list-group list-group-flush border-bottom scrollarea">
        
                    {courses.subtitles.map((sub)=>{
                      return(
                            <a onClick={()=>displaysubtitle(sub)} class="list-group-item list-group-item-action  py-3 lh-tight border" aria-current="true">
                              <div class="d-flex w-100 align-items-center justify-content-between">
                                <strong class="mb-1">{sub.subt}</strong>
                                <small>{sub.totalh} hours</small>
                              </div>
                              <div class="col-10 mb-1 small"></div>
                            </a>

                            
                          
                      )
                    })}
                  </div>
                  <br>
                  </br>
                  <h5>Course Settings</h5>
                  <div class="list-group list-group-flush border-bottom scrollarea">
                           
                          <div class="d-flex w-100 align-items-center justify-content-between">
                            <button type='button' className='btn btn-danger' onClick={()=>displayProblemReport()}>Report a Problem</button>
                            
                            
                          </div>
                          <div class="col-10 mb-1 small"></div>
                           
                    </div>
                    {console.log(refund1)}
                    {(((courseprogress/250)*100)<50 & refund1.refund == null)?(<>
                      <div class="list-group list-group-flush border-bottom scrollarea">
                           
                           <div class="d-flex w-100 align-items-center justify-content-between">
                             <button type='button' className='btn btn-danger' onClick={()=>displayRefund()}>Request A Refund</button>
                             
                             
                           </div>
                           <div class="col-10 mb-1 small"></div>
                            
                     </div>
                    </>):(<></>)}
                    
                    <br></br>
            </div>
            </div>
            <div className="col-10 ">
            <div className="container">
              {(currentsub!=null)?(<>{(currentsub.problemDisplay != null)?(<>
                <h5 className='text-center'>Report A Problem</h5>
                <form>
                
                    <div class="form-group col-md-6">
                      <label for="inputCity">Report Message</label>
                      <input type="text" class="form-control" name="ReportMsg" placeholder='Write Your Message Here' onChange={(e) => handleReport(e)}/>
                    </div>
                    <div class="form-group col-md-3">
                      <label for="inputState">Report Type</label>
                      <select id="inputState" class="form-control" name='ReportType' onChange={(e)=> handleReport(e)}>
                        <option selected>Choose...</option>
                        <option>Technical</option>
                        <option>Financial</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <br />
                    <button type='button' className='btn btn-primary' onClick={() => SubmitReport()}>Submit Report</button>
                </form>
              
              </>):(<></>)}</>):(<></>)}
              {(currentsub!=null)?(<>{(currentsub.refundDisplay != null)?(<>
                <h5 className='text-center'>Request a refund </h5>
                <form>
                
                    <div class="form-group col-md-6">
                      <label for="inputCity">Request Refund Message</label>
                      <input type="text" class="form-control" name="RefundMsg" placeholder='Write Your Message Here' onChange={(e) => handleRefund(e)}/>
                    </div>
                    <div class="form-group col-md-3">
                      <label for="inputState">Why do you want to refund?</label>
                      <select id="inputState" class="form-control" name='RefundType' onChange={(e)=> handleRefund(e)}>
                        <option selected>Choose...</option>
                        <option>I dont Like this course content</option>
                        <option>I dont Like the instructor</option>
                        <option>I bought the wrong course/ I changed my Mind</option>
                        <option>Course didnt match the description</option>
                        <option>This course is too advanced/basic for me</option>
                      </select>
                    </div>
                    <br />
                    <button type='button' className='btn btn-primary' onClick={() => SubmitRefund()}>Submit Refund</button>
                </form>
              
              </>):(<></>)}</>):(<></>)}
              {(currentsub !=null)?(<>{(currentsub.courseinfo != null )?(<>
                <h5 className='text-center'>{currentsub.title}</h5>
                <h6>Course Subject : {currentsub.subject}</h6>
                <h6>Course Instructor : {currentsub.instructorName}</h6>
                <h6>Course Rating : {currentsub.courseRating} Stars</h6>
                <h6>Course Total Hours : {currentsub.totalHours}</h6>
                <h6>Course Price : {currentsub.price} USD</h6>
                <h6>Course Summary: {currentsub.summary}</h6>
                <div class="embed-responsive embed-responsive-21by9 ">
                      <iframe class="embed-responsive-item" width={1280} height={1080} src={courses.preview} allowfullscreen></iframe>
                    </div>

                
            {console.log(flag1)}  
            {(flag1!=true &  (user.role == 'trainee' | user.role == 'corporate trainee'))?(<><div className='container border'>
              Rate Instructor : <div class="rating"> 
                  <input type="radio" name="rating" value="5" id="5" onChange={(e) => handleRating(e)}/><label for="5">☆</label> 
                  <input type="radio" name="rating" value="4" id="4" onChange={(e) => handleRating(e)}/><label for="4">☆</label> 
                  <input type="radio" name="rating" value="3" id="3" onChange={(e) => handleRating(e)}/><label for="3">☆</label> 
                  <input type="radio" name="rating" value="2" id="2" onChange={(e) => handleRating(e)}/><label for="2">☆</label> 
                  <input type="radio" name="rating" value="1" id="1" onChange={(e) => handleRating(e)}/><label for="1">☆</label>
                </div>
              
               <input placeholder={'Review '+courses.instructorName+"'s Work "} name="review" onChange={handlereview}></input>
              <br></br>
              <br></br>
               <button type='button' className='btn btn-primary' onClick={ratesubmit}>Rate Instructor</button>
            </div></>):(<></>)}
             <br></br> 
            {(flag2!=true &  (user.role == 'trainee' | user.role == 'corporate trainee'))?(<><div className='container border'>
              Rate Course : <div class="rating"> 
                  <input type="radio" name="ratingCourse" value="5" id="5" onChange={(e) =>handleCourseRating(e)}/><label for="5">☆</label> 
                  <input type="radio" name="ratingCourse" value="4" id="4" onChange={(e) =>handleCourseRating(e)}/><label for="4">☆</label> 
                  <input type="radio" name="ratingCourse" value="3" id="3" onChange={(e) =>handleCourseRating(e)}/><label for="3">☆</label> 
                  <input type="radio" name="ratingCourse" value="2" id="2" onChange={(e) =>handleCourseRating(e)}/><label for="2">☆</label> 
                  <input type="radio" name="ratingCourse" value="1" id="1" onChange={(e) =>handleCourseRating(e)}/><label for="1">☆</label>
                </div>
              
             <input placeholder={"Review "+courses.title} name="reviewCourse" onChange={handleCourseReview}></input>
             <br></br>
             <br></br>
               <button type='button' className='btn btn-primary' onClick={ratesubmitCourse}>Rate Course</button>
            </div></>):(<></>)}

            <button type='button' className='btn btn-primary' onClick={() => setToggle1(!toggle1)}>View Course Ratings</button>    

            {(!toggle1 && courses.ratings != null)?(<>
            {
                courses.ratings.map((rate)=>{
                  {console.log(rate.userRate)}
                    return(
                        <>
                        <div className="row">
                            <div class="card border-primary" style={{width:1310}} >
                                <div class="card-header">User : {rate.userwhorated}</div>
                                    <div class="card-body">
                                        {(rate.userRate == 1)?(<><div>
                                            <FaStar className='checked'></FaStar>
                                            <FaStar className=''></FaStar>
                                            <FaStar className=''></FaStar>
                                            <FaStar className=''></FaStar>
                                            <FaStar className=''></FaStar>   
                                        </div></>):((rate.userRate==2)?(<><div>
                                            <FaStar className='checked'></FaStar>
                                            <FaStar className='checked'></FaStar>
                                            <FaStar className=''></FaStar>
                                            <FaStar className=''></FaStar>
                                            <FaStar className=''></FaStar>   
                                        </div>
                                        
                                        </>):((rate.userRate==3)?(<><div>
                                            <FaStar className='checked'></FaStar>
                                            <FaStar className='checked'></FaStar>
                                            <FaStar className='checked'></FaStar>
                                            <FaStar className=''></FaStar>
                                            <FaStar className=''></FaStar>   
                                        </div>
                                        </>):((rate.userRate==4)?(<><div>
                                            <FaStar className='checked'></FaStar>
                                            <FaStar className='checked'></FaStar>
                                            <FaStar className='checked'></FaStar>
                                            <FaStar className='checked'></FaStar>
                                            <FaStar className=''></FaStar>   
                                        </div>
                                        </>):(<><div>
                                            <FaStar className='checked'></FaStar>
                                            <FaStar className='checked'></FaStar>
                                            <FaStar className='checked'></FaStar>
                                            <FaStar className='checked'></FaStar>
                                            <FaStar className='checked'></FaStar>   
                                        </div></>))))}
                                        
            
                                        <h5 class="card-title">{rate.userwhorated} said :</h5>
                                            <p class="card-text">{rate.userMessage}</p>
                                        </div>
                                    </div>
                                </div>  
                        </>
                    )
                })
            }
        
        
        
        
        </>):(<>{(courses.ratings == null)?(<><h2 className='text-center'>No Ratings Availble</h2></>):(<></>)}</>)}      

        <br>
        </br>
        <br></br>
        <div className="container">
          {(user.username == courses.instructorName)?(<> <input type="Number" className='form-control' placeholder='Enter Discount from 0 to 100' onChange={(e)=>addDiscountHandler(e)} name='amountOfDiscount'/>
            <br></br>
            <input type="Date" className='form-control' placeholder='YYYY-MM-DD' onChange={(e)=>addDiscountHandler(e)} name='ExpiryDate' />
            <br></br>
            <button type='button' className='btn btn-primary' onClick={()=>submitDiscount()}>Add Discount</button>
          </>):(<></>)}
           
             
          </div>
              </>):(<>
              {(currentsub.courseinfo == null & currentsub.problemDisplay == null & currentsub.refundDisplay == null)?(<>
              
              
                <h5 className='text-center'>{currentsub.subt}</h5>
              <div className="container border">
                {currentsub.description}
              </div>
              <br></br>
              {currentsub.videos.map((v)=>{
                return(
                  <>
                  <div>
                    <h5 className='text-center' >Video Title : {v.videotitle}</h5>
                    <h6 >Video Description: {v.videodescription}</h6>
                    <div class="embed-responsive embed-responsive-21by9 ">
                      <iframe class="embed-responsive-item" width={1280} height={1080} src={v.url+"?autoplay=1"} allow='autoplay' allowfullscreen></iframe>
                    </div>
                    <br></br>
                    <br></br>
                    <label for="exampleFormControlInput1" class="form-label">Notes</label>
                    <textarea class="form-control" id="text1" rows="3" value={notes} onChange={(e) => handleNotes(e)}></textarea>
                    <br></br>
                    <button type='button' className='btn btn-primary' onClick={() => saveTextAsFile(notes,'notes.txt')}>Download</button>
                    <br></br>
                    <br></br>
                    </div>
                    </>
                )
              })}


                  Subtitle Exercises:<br></br> {currentsub.exercises.map((q)=>{
                                  
                                  return(
                                    <>
                                    <div className='container border'>
                                      Question : {q.question}
                                      <br>
                                      </br>
                                      A :<input type="radio" name={q.question} value="A" onChange={(e) =>handlequestionanswer(currentsub._id, q._id,e)}></input><label>{q.answerA}</label>
                                      <br></br>
                                      B :<input type="radio" name={q.question} value="B" onChange={(e) =>handlequestionanswer(currentsub._id, q._id,e)}></input><label>{q.answerB}</label>
                                      <br></br>
                                      C :<input type="radio" name={q.question} value="C" onChange={(e) =>handlequestionanswer(currentsub._id, q._id,e)}></input><label>{q.answerC}</label>
                                      <br></br>
                                      D :<input type="radio" name={q.question} value="D" onChange={(e) =>handlequestionanswer(currentsub._id, q._id,e)}></input><label>{q.answerD}</label>
                                      <br></br>
                                      {!toggle && (<div>
                                      {(checkquestionanswer(q.question)=="true")?(<>You Were Right</>):(<>You Were Wrong <br></br>
                                      Correct Answer : {q.correctanswer}</>)}
                                    </div>)}
                                    {console.log(flagsubmit)}
                                    </div>
                                    
                                    </>
                                  )
                                })}

              
              <br></br>
              {!toggle && (<div>
                {rightanswers()}

              </div>)}
              
              {((user.role=='trainee' | user.role=='corporate trainee') & toggle)?(<><button type='button' className='btn btn-primary' onClick={() => setToggle(!toggle)}>Submit My Answers</button></>):(<></>)}
              <br></br>
              <br></br>
              <br></br>
              {((user.role == 'trainee' |user.role=='corporate trainee') & (checkifSubtitle(currentsub) == true) & (checkifnotlastSub()==true) )?(<>
              <button type='button' className='btn btn-primary' onClick={()=>GetNextSubtitle()}>Next Subtitle</button>
              </>):(<></>)}
              
              
              
              
              
              
              
              
              
              </>):(<></>)}



             
              
              </>
              
              
              
              )}</>):(<></>)}
            </div>
            </div>
        </div>
        </div>
        </>) : (<></>)}</>):(<>




          <div className='container-fluid'>
            <div className="row">
              <div className="col-md-1">
                <div class="d-flex flex-column align-items-stretch flex-shrink-0 bg-white" style={{width: 250 }}>
                    <h5>Subtitles</h5>
                    <br></br>
                    <div class="list-group list-group-flush border-bottom scrollarea">
                  
                      {courses.subtitles.map((sub)=>{
                        return(
                              <a  class="list-group-item list-group-item-action  py-3 lh-tight border" aria-current="true">
                                <div class="d-flex w-100 align-items-center justify-content-between">
                                  <strong class="mb-1">{sub.subt}</strong>
                                  <small>{sub.totalh} hours</small>
                                </div>
                                <div class="col-10 mb-1 small">{sub.description}</div>
                              </a>

                              
                            
                        )
                      })}
                    </div>
                  </div>
                </div>
            
          
                <div className="col-md-11 ">
                  <div className="container">
                <h1 className='text-center'>
                    {courses.title}
                </h1>
                  
                    <b1>
                        Instructor : {courses.instructorName}
                        <br></br>
                        Subject : {courses.subject}
                        <br></br>
                        Course Rating : {courses.courseRating}
                        <br></br>
                        Total Hours : {courses.totalHours}
                        <br></br>
                        Price : {courses.price}
                    </b1>
                    <br></br>
                    {checkifasked()}
                    {(user!=null & (user.role == 'trainee' ))?(<button onClick={() => gotopaymentendpoint()} type='button' className='btn btn-primary'>Buy This Course Now!</button>  ):(<></>)}
                    {((flag6 & user.role == 'corporate trainee')?(<></>):(<>{(user!=null & (user.role == 'corporate trainee'))?(<button onClick={() =>RequestAccess()} type='button' className='btn btn-primary'>Request Access To This Course</button>):(<></>)}</>))}
                    </div>
                    </div>
        
        
        
        </div>
        </div>
        </>)) : (<></>)
        
      }
        
      </>):(<></>)}
      
      </>
      )
}

export default ViewCourses