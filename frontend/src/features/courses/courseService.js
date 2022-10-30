import axios from 'axios'


const API_URL = '/courses'


//Create new Course
const createCourse = async (courseData) => {
    const response = await axios.post(API_URL + '/new' , courseData)

  
  return response.data
}

//Get All Courses
const getCourses = async () => {
  const response = await axios.get(API_URL + '/')


return response.data
}

const getCoursePage = async (title) => {
  const response = await axios.get(API_URL + '/view/' + title)


return response.data
}



const courseService = {
    createCourse,
    getCourses,
    getCoursePage,
}

export default courseService