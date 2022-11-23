import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import courseService from './courseService'


const initialState = {
    courses: [],
    isError: false,
    isSuccess:false,
    isLoading: false,
    message: ''
}

//Create New Course
export const createCourse = createAsyncThunk('course/new', async (courseData, thunkAPI) => {
    try {
      console.log(courseData)
        return await courseService.createCourse(courseData)
    } catch (error) {
        const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
})

//Get All Courses
export const getCourses = createAsyncThunk(
  'courses/getAll',
  async (_, thunkAPI) => {
    try {
      
      return await courseService.getCourses()
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)
//Get Courses By Instructor
export const getCoursesIns = createAsyncThunk(
  'courses/getAll',
  async (insData, thunkAPI) => {
    try {
      
      return await courseService.getCoursesIns(insData)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

//Get Course Page
export const getCoursePage = createAsyncThunk(
  'courses/getOne',
  async (userData, thunkAPI) => {
    try {
      
      return await courseService.getCoursePage(userData)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)


export const courseSlice = createSlice({
    name: 'course',
    initialState,
    reducers: {
        reset: (state) => {
        state.isLoading = false
        state.isSuccess = false
        state.isError = false
        state.message = ''
        }
    },
    extraReducers: (builder) => {
      builder
        .addCase(createCourse.pending, (state) => {
          state.isLoading = true
        })
        .addCase(createCourse.fulfilled, (state, action) => {
          state.isLoading = false
          state.isSuccess = true
          state.courses.push(action.payload)
        })
        .addCase(createCourse.rejected, (state, action) => {
          state.isLoading = false
          state.isError = true
          state.message = action.payload
        })
        .addCase(getCourses.pending, (state) => {
          state.isLoading = true
        })
        .addCase(getCourses.fulfilled, (state, action) => {
          state.isLoading = false
          state.isSuccess = true
          state.courses = action.payload
        })
        .addCase(getCourses.rejected, (state, action) => {
          state.isLoading = false
          state.isError = true
          state.message = action.payload
        })
        .addCase(getCoursePage.pending, (state) => {
          state.isLoading = true
        })
        .addCase(getCoursePage.fulfilled, (state, action) => {
          state.isLoading = false
          state.isSuccess = true
          state.courses = (action.payload)
        })
        .addCase(getCoursePage.rejected, (state, action) => {
          state.isLoading = false
          state.isError = true
          state.message = action.payload
        })
}})





export const {reset} = courseSlice.actions
export default courseSlice.reducer