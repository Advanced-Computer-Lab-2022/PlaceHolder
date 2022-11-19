import axios from 'axios'

const API_URL = '/users/'

// Register user
const register = async (userData) => {
  const response = await axios.post(API_URL + 'new', userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

const toschange = async (userData) => {
  console.log(userData)
  const response = await axios.post(API_URL + 'updatetos', userData)

  return response.data
}

const adduser = async (userData) => {
  const response = await axios.post(API_URL + 'new', userData)


  return response.data
}



// Login user
const login = async (userData) => {
  const response = await axios.post(API_URL + 'login', userData)
 

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
    
  }

  return response.data
}

// Logout user
const logout = () => {
  localStorage.removeItem('user')
}

const authService = {
  register,
  logout,
  login,
  adduser,
  toschange
}

export default authService