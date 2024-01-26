import { createSlice } from '@reduxjs/toolkit'
import cartSliceReducer from './cartSlice';

const initialState = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : { cartItems: [] };

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {},
});

export default cartSlice.reducer;