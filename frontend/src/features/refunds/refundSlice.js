import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import refundService from './refundService'


const initialState = {
    refund: [],
    isError: false,
    isSuccess:false,
    isLoading: false,
    message: ''
}

//get All Course Requests
export const getAll = createAsyncThunk('refunds/getAll', async (_, thunkAPI) => {
    try {
      //console.log(courseData)
        return await refundService.getAll()
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

export const getMyRefund = createAsyncThunk('refunds/getMyRefund', async (data, thunkAPI) => {
  try {
    //console.log(courseData)
      return await refundService.getMyRefunds(data)
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



export const createRefund = createAsyncThunk('refund/create', async (data, thunkAPI) => {
  try {
    //console.log(courseData)
      return await refundService.createRefund(data)
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


export const updateStatus = createAsyncThunk('refund/updateStatus', async (data, thunkAPI) => {
  try {
    //console.log(courseData)
      return await refundService.updateStatus(data)
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






export const refundSlice = createSlice({
    name: 'refund',
    initialState,
    reducers: {
        reset1: (state) => {
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
          state.refund = action.payload
        })
        .addCase(getAll.rejected, (state, action) => {
          state.isLoading = false
          state.isError = true
          state.message = action.payload
        })
        .addCase(getMyRefund.pending, (state) => {
          state.isLoading = true
        })
        .addCase(getMyRefund.fulfilled, (state, action) => {
          state.isLoading = false
          state.isSuccess = true
          state.refund = action.payload
        })
        .addCase(getMyRefund.rejected, (state, action) => {
          state.isLoading = false
          state.isError = true
          state.message = action.payload
        })
        .addCase(createRefund.pending, (state) => {
          state.isLoading = true
        })
        .addCase(createRefund.fulfilled, (state, action) => {
          state.isLoading = false
          state.isSuccess = true
          state.refund.push(action.payload) 
        })
        .addCase(createRefund.rejected, (state, action) => {
          state.isLoading = false
          state.isError = true
          state.message = action.payload
        })
        
}})





export const {reset1} = refundSlice.actions
export default refundSlice.reducer