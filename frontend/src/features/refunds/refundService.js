import axios from 'axios'

const API_URL = '/refund'


//Get All Requests
const getAll = async () => {
    const response = await axios.get(API_URL + '/')
  
  
  return response.data
  }

  

  const createRefund = async (data) => {
    const response = await axios.post(API_URL + '/new', data)
  
  
    return response.data
  }

  const getMyRefunds = async (data) => {
    const response = await axios.post(API_URL + '/myRefunds', data)
  
  
    return response.data
  }

  const updateStatus = async (data) => {
    const response = await axios.post(API_URL + '/updateStatus',data)
  
  
  return response.data
  } 

  


 

  const refundService = {
    getAll,
    createRefund,
    getMyRefunds,
    updateStatus
    
   
}

export default refundService