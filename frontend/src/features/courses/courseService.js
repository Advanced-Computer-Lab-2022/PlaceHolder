import axios from 'axios'
import { saveAs } from 'file-saver';

const API_URL = '/courses'


//Create new Course
const createCourse = async (courseData) => {
    const response = await axios.post(API_URL + '/new' , courseData)
    //console.log(response)
  
  return response.data
}

//Get All Courses
const getCourses = async () => {
  const response = await axios.get(API_URL + '/')


return response.data
}

//Get All Instructor Courses
const getCoursesIns = async (insdata) => {
  const response = await axios.post(API_URL + '/getinscourses',insdata)


return response.data
}

function download(content, mimeType, filename){
  const a = document.createElement('a') // Create "a" element
  const blob = new Blob([content], {type: mimeType}) // Create a blob (file-like object)
  const url = URL.createObjectURL(blob) // Create an object URL from blob
  a.setAttribute('href', url) // Set "a" element link
  a.setAttribute('download', filename) // Set download filename
  a.click() // Start downloading
}

const getCoursesTrainee = async (traineeData) => {
  const response = await axios.post(API_URL + '/gettraineecourses',traineeData)


return response.data
}

const addDiscount = async (data) => {
  const response = await axios.post(API_URL + '/adddiscount',data)


return response.data
}
//Get Course Page
const getCoursePage = async (title) => {
 
  const response = await axios.post(API_URL + '/view/' + title)

//console.log(response)
return response.data
}

const sendEmailCert = async (data) => {
 
  const response = await axios.post(API_URL + '/certfEmail',data)

//console.log(response)
return response.data
}

const requestAccess = async (data) => {
 
  const response = await axios.post('/corp/reqAccess',data)

//console.log(response)
return response.data
}

const getCertficate = async (data) => {
  var title = data.title
  var firstName = data.firstName
  var lastName = data.lastName
  const response = await axios.get(API_URL + '/certf/' + title + '/' + firstName + '/' + lastName, { responseType: 'blob' })

  console.log(response.data)
  //download(response.data,"application/pdf","Certficate.pdf")
  return download(response.data,"application/pdf","Certficate.pdf")
}

const courseService = {
    createCourse,
    getCourses,
    getCoursesIns,
    getCoursePage,
    addDiscount,
    getCoursesTrainee,
    getCertficate,
    sendEmailCert,
    requestAccess
}

export default courseService