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

export const addDiscount = createAsyncThunk(
  'courses/addDiscount',
  async (data, thunkAPI) => {
    try {
      
      return await courseService.addDiscount(data)
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

export const getCertficate = createAsyncThunk(
  'courses/getCertficate',
  async (data, thunkAPI) => {
    try {
      
      return await courseService.getCertficate(data)
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

export const getCertficateEmail = createAsyncThunk(
  'courses/getCertficateEmail',
  async (data, thunkAPI) => {
    try {
      
      return await courseService.sendEmailCert(data)
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
  'courses/getCourseIns',
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

export const requestAccess = createAsyncThunk(
  'courses/requestAccess',
  async (data, thunkAPI) => {
    try {
      
      return await courseService.requestAccess(data)
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

export const getCoursesTrainee = createAsyncThunk(
  'courses/getCourseTrainee',
  async (traineeData, thunkAPI) => {
    try {
      
      return await courseService.getCoursesTrainee(traineeData)
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
  async (title, thunkAPI) => {
    try {
      
      return await courseService.getCoursePage(title)
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
        .addCase(getCoursesIns.pending, (state) => {
          state.isLoading = true
        })
        .addCase(getCoursesIns.fulfilled, (state, action) => {
          state.isLoading = false
          state.isSuccess = true
          state.courses = action.payload
        })
        .addCase(getCoursesIns.rejected, (state, action) => {
          state.isLoading = false
          state.isError = true
          state.message = action.payload
        })
        .addCase(getCoursesTrainee.pending, (state) => {
          state.isLoading = true
        })
        .addCase(getCoursesTrainee.fulfilled, (state, action) => {
          state.isLoading = false
          state.isSuccess = true
          state.courses = action.payload
        })
        .addCase(getCoursesTrainee.rejected, (state, action) => {
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