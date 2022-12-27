import axios from 'axios'

const API_URL = '/payment'


//Get All Requests
const getMyTransactions = async (data) => {
    const response = await axios.post(API_URL + '/myTransactions',data)
  
  
  return response.data
  }

  

 

  


 

  const paymentService = {
    getMyTransactions
    
   
}

export default paymentService