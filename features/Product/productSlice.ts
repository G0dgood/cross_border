import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authService from './productService'
 
   
 

const initialState = { 

  data:   [],
  isError: false,
  isSuccess: false,
  isLoading: false, 
  message: '',
  error: '', 
 
}
 

 

// Product data
export const productData = createAsyncThunk('product/productData', async (data, thunkAPI) => { 
    try {
    return await authService.productData(data)
  } catch (error:any) {
    const message =
      (error.response && 
        error.response.data && 
        error.response.data.message) ||
      error.message ||
      error.toString() 
     return thunkAPI.rejectWithValue(message)
  }
})

export const authSlice = createSlice({
  name: 'product',
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
      //  Product
      .addCase(productData.pending, (state) => {
        state.isLoading = true 
      }) 
      .addCase(productData.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.data = action.payload 
      }) 
      .addCase(productData.rejected, (state:any, action) => {
        state.isLoading  = false
        state.isError  = true
        state.message  = action.payload
        state.data  = [] 
      })
  
  },
})

export const { reset  } = authSlice.actions
export default authSlice.reducer