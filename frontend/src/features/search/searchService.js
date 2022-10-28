import axios from 'axios'


const API_URL = '/courses/'


//Searcher
const searchCourse = async () => {
    const response = await axios.get(API_URL , courseData)

  
  return response.data
}





const searchService = {
    searchCourse,
    
}

export default searchService