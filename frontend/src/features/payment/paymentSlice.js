import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import paymentService from './paymentService'


const initialState = {
    payment: [],
    isError: false,
    isSuccess:false,
    isLoading: false,
    message: ''
}


export const getMyTransactions = createAsyncThunk('payments/getMyTranscations', async (data, thunkAPI) => {
  try {
    //console.log(courseData)
      return await paymentService.getMyTransactions(data)
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

export const payByWallet = createAsyncThunk('payments/payBywallet', async (data, thunkAPI) => {
  try {
    //console.log(courseData)
      return await paymentService.payByWallet(data)
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




export const paymentSlice = createSlice({
    name: 'payment',
    initialState,
    reducers: {
        reset2: (state) => {
        state.isLoading = false
        state.isSuccess = false
        state.isError = false
        state.message = ''
        }
    },
    extraReducers: (builder) => {
      builder
        
        .addCase(getMyTransactions.pending, (state) => {
          state.isLoading = true
        })
        .addCase(getMyTransactions.fulfilled, (state, action) => {
          state.isLoading = false
          state.isSuccess = true
          state.payment = action.payload
        })
        .addCase(getMyTransactions.rejected, (state, action) => {
          state.isLoading = false
          state.isError = true
          state.message = action.payload
        })
        
}})





export const {reset2} = paymentSlice.actions
export default paymentSlice.reducer