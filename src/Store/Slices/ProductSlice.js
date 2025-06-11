import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (category) => {
    const url = category && category !== "all"
      ? `https://dummyjson.com/products/category/${category}`
      : `https://dummyjson.com/products`;

    const response = await axios.get(url);
    return response.data.products;
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    loading: false,
    error: null,
    filterCategory: "all", 
    searchTerm: "",        
  },

  reducers: {
    setFilterCategory: (state, action) => {
      state.filterCategory = action.payload;
      console.log("Category selected:", action.payload);
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
      console.log("Search term:", action.payload);
    }
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export const { setFilterCategory, setSearchTerm } = productsSlice.actions;
export default productsSlice.reducer;
