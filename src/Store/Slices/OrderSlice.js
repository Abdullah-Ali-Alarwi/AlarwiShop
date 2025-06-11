import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  customerName: "",   
  FristName: "",      
  LastName: "",       
  Country: "",        
  City: "",           
  Street: "",         
  Email: "",          
  PhonNumber: "",     
};

const OrderSlice = createSlice({
  name: "Order",
  initialState,
  reducers: {
    setOrderData: (state, action) => {
      return { ...state, ...action.payload };
    },

    clearOrderData: () => initialState,
  }
});

export const { setOrderData, clearOrderData } = OrderSlice.actions;
export const OrderSliceReducer = OrderSlice.reducer;
