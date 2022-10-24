import axios from 'axios'


const API_URL = '/courses/new'


//Create new Course
const createCourse = async (courseData) => {
    const response = await axios.post(API_URL , courseData)

  
  return response.data
}


const courseService = {
    createCourse
}

export default courseService