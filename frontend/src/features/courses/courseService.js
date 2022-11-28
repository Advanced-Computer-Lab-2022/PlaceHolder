import axios from 'axios'


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

//Get Course Page
const getCoursePage = async (title) => {
 
  const response = await axios.post(API_URL + '/view/' + title)

//console.log(response)
return response.data
}

const courseService = {
    createCourse,
    getCourses,
    getCoursesIns,
    getCoursePage
}

export default courseService