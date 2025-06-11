import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProductsCategory = createAsyncThunk(
  'category',
  async () => {
    const response = await axios.get(`https://dummyjson.com/products`);
    return response.data.products                    
  }
);

const CategorySlice = createSlice({
  name: 'category',   
  initialState: {
    itemCategories: [],
    loading: false, 
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsCategory.pending, (state,action) => {
        state.loading = true;
        state.error = null;
    
      })
      .addCase(fetchProductsCategory.fulfilled, (state, action) => {
        state.loading = false;
           state.itemCategories =action.payload
      })
      .addCase(fetchProductsCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});


export const CategoryReducer =CategorySlice.reducer;
