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

const updateEmail = async (userData) => {
  const response = await axios.post(API_URL + 'updateemail', userData)


  return response.data
}

const updateBio = async (userData) => {
  const response = await axios.post(API_URL + 'updatebio', userData)


  return response.data
}

const updateSubtitle = async (userData) => {
  const response = await axios.post(API_URL + 'updateSubtitle', userData)


  return response.data
}

const updatePassword = async (userData) => {
  const response = await axios.post(API_URL + 'updatepass', userData)


  return response.data
}

const updateRating = async (userData) => {
  const response = await axios.post(API_URL + 'updaterating', userData)


  return response.data
}


const updateRatingCourse = async (userData) => {
  const response = await axios.post(API_URL + 'updateratingcourse', userData)


  return response.data
}

const registerCourse = async (userData) => {
  const response = await axios.post(API_URL + 'registercourse', userData)


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

const refreshuser = async (userData) => {
  const response = await axios.post(API_URL + 'refreshuser', userData)
 

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
    
  }

  return response.data
}

const forgotpass = async (userData) => {
  const response = await axios.post(API_URL + 'forgotpass', userData)
 

 

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
  toschange,
  registerCourse,
  refreshuser,
  updateEmail,
  updateBio,
  updatePassword,
  forgotpass,
  updateRating,
  updateRatingCourse,
  updateSubtitle
}

export default authService