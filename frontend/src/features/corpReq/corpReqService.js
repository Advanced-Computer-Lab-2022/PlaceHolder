import axios from 'axios'

const API_URL = '/corp'


//Get All Requests
const getAll = async () => {
    const response = await axios.get(API_URL + '/')
  
  
  return response.data
  }

  const grant = async (data) => {
    const response = await axios.post(API_URL + '/grant',data)
  
  
  return response.data
  }


  const corpReqService = {
    getAll,
    grant
}

export default corpReqService