import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase";
import { auth } from "../../firebase"; 

export const addPastOrderToFirestore = createAsyncThunk(
  'pastOrders/addPastOrderToFirestore',
  async (orderData, thunkAPI) => {
    try {
      const user = auth.currentUser;
      if (!user) throw new Error("User not authenticated");

      const docRef = await addDoc(collection(db, "pastOrders"), {
        ...orderData,
        userId: user.uid,
        createdAt: new Date().toISOString(),
      });

      return { id: docRef.id, ...orderData };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchPastOrdersFromFirestore = createAsyncThunk(
  'pastOrders/fetchPastOrdersFromFirestore',
  async (_, thunkAPI) => {
    try {
      const user = auth.currentUser;
      if (!user) throw new Error("User not authenticated");

      const q = query(collection(db, "pastOrders"), where("userId", "==", user.uid));
      const querySnapshot = await getDocs(q);

      let orders = [];
      querySnapshot.forEach((doc) => {
        orders.push({ id: doc.id, ...doc.data() });
      });

      return orders;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const pastOrdersSlice = createSlice({
  name: 'pastOrders',
  initialState: {
    orders: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addPastOrderToFirestore.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addPastOrderToFirestore.fulfilled, (state, action) => {
        state.loading = false;
        state.orders.push(action.payload);
      })
      .addCase(addPastOrderToFirestore.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchPastOrdersFromFirestore.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPastOrdersFromFirestore.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload;
      })
      .addCase(fetchPastOrdersFromFirestore.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const pastOrdersReducer = pastOrdersSlice.reducer;
export const { addPastOrder } = pastOrdersSlice.actions;