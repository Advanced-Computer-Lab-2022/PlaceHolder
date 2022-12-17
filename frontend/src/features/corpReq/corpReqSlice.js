import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import corpReqService from './corpReqService'


const initialState = {
    corp: [],
    isError: false,
    isSuccess:false,
    isLoading: false,
    message: ''
}

//get All Course Requests
export const getAll = createAsyncThunk('corp/getAll', async (_, thunkAPI) => {
    try {
      //console.log(courseData)
        return await corpReqService.getAll()
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

export const grant = createAsyncThunk('corp/grant', async (data, thunkAPI) => {
  try {
    //console.log(courseData)
      return await corpReqService.grant(data)
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




export const corpReqSlice = createSlice({
    name: 'corp',
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
          state.corp = action.payload
        })
        .addCase(getAll.rejected, (state, action) => {
          state.isLoading = false
          state.isError = true
          state.message = action.payload
        })
        
}})





export const {reset} = corpReqSlice.actions
export default corpReqSlice.reducer