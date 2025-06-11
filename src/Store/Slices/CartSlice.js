import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  items: [],
  ShippingCosts: 30,
  totallCoust: 0,
};

const calculateTotalCost = (items, shipping) => {
  const productsTotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  return +(productsTotal + shipping).toFixed(2);
};

const CartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    DeleteItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      state.totallCoust = calculateTotalCost(state.items, state.ShippingCosts);


    },

    AddItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity = (existingItem.quantity || 1) + (newItem.quantity || 1);
      } else {
        state.items.push({
          ...newItem,
          quantity: newItem.quantity || 1
        });
      }

      state.totallCoust = calculateTotalCost(state.items, state.ShippingCosts);
    },

    increaseQuantity: (state, action) => {
      const item = state.items.find(i => i.id === action.payload);
      if (item) {
        item.quantity = (item.quantity || 1) + 1;
      }
      state.totallCoust = calculateTotalCost(state.items, state.ShippingCosts);
    },

    DecreaseQuantity: (state, action) => {
      const item = state.items.find(i => i.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
      state.totallCoust = calculateTotalCost(state.items, state.ShippingCosts);
    },

    clearCart: (state) => {
      state.items = [];
      state.totallCoust = calculateTotalCost(state.items, state.ShippingCosts);
    }
  }
});

export const { DeleteItem, AddItem, increaseQuantity, DecreaseQuantity, clearCart } = CartSlice.actions;
export const CartSliceReducer = CartSlice.reducer;
