import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import courseReducer from '../features/courses/courseSlice'
import corpReqReducer from '../features/corpReq/corpReqSlice'
import reportReducer from '../features/reports/reportSlice'
import refundReducer from '../features/refunds/refundSlice'
import paymentReducer from '../features/payment/paymentSlice'

export const store = configureStore({
  reducer: {
   auth: authReducer,
   courses: courseReducer,
   corp:corpReqReducer,
   report:reportReducer,
   refund:refundReducer,
   payment:paymentReducer
  },
})
