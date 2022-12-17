import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import reportService from './reportService'


const initialState = {
    report: [],
    isError: false,
    isSuccess:false,
    isLoading: false,
    message: ''
}

//get All Course Requests
export const getAll = createAsyncThunk('report/getAll', async (_, thunkAPI) => {
    try {
      //console.log(courseData)
        return await reportService.getAll()
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

export const updateSeen = createAsyncThunk('report/updateSeen', async (_, thunkAPI) => {
  try {
    //console.log(courseData)
      return await reportService.updateSeen()
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


export const createReport = createAsyncThunk('report/create', async (data, thunkAPI) => {
  try {
    //console.log(courseData)
      return await reportService.createReport(data)
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


export const updateStatus = createAsyncThunk('report/updateStatus', async (data, thunkAPI) => {
  try {
    //console.log(courseData)
      return await reportService.updateStatus(data)
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






export const reportSlice = createSlice({
    name: 'report',
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
        .addCase(getAll.pending, (state) => {
          state.isLoading = true
        })
        .addCase(getAll.fulfilled, (state, action) => {
          state.isLoading = false
          state.isSuccess = true
          state.report = action.payload
        })
        .addCase(getAll.rejected, (state, action) => {
          state.isLoading = false
          state.isError = true
          state.message = action.payload
        })
        .addCase(createReport.pending, (state) => {
          state.isLoading = true
        })
        .addCase(createReport.fulfilled, (state, action) => {
          state.isLoading = false
          state.isSuccess = true
          state.report.push(action.payload) 
        })
        .addCase(createReport.rejected, (state, action) => {
          state.isLoading = false
          state.isError = true
          state.message = action.payload
        })
        
}})





export const {reset} = reportSlice.actions
export default reportSlice.reducer