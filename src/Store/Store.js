import { configureStore } from '@reduxjs/toolkit';
import productsSliceReducer from './Slices/ProductSlice';
import { CartSliceReducer } from './Slices/CartSlice';
import { CategoryReducer } from "./Slices/CategorySlice";
import { OrderSliceReducer } from './Slices/OrderSlice';
import { pastOrdersReducer } from "./Slices/PastOrdersSlice";
import authReducer from "./Slices/authSlice";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('reduxState');
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (err) {
    console.warn("Failed to load state from localStorage:", err);
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const stateToSave = {
      auth: state.auth,
      pastOrders: state.pastOrders,
      Cart: state.Cart,  
    };
    const serializedState = JSON.stringify(stateToSave);
    localStorage.setItem('reduxState', serializedState);
  } catch (err) {
    console.warn("Failed to save state to localStorage:", err);
  }
};

const persistedState = loadState();

export const store = configureStore({
  reducer: {
    products: productsSliceReducer,
    Cart: CartSliceReducer,
    categories: CategoryReducer,
    order: OrderSliceReducer,
    pastOrders: pastOrdersReducer,
    auth: authReducer,
  },
  preloadedState: persistedState,
});

store.subscribe(() => {
  saveState(store.getState());
});
