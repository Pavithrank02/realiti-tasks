import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice'
import productReducer from './productSlice'
export const store = configureStore({
  reducer: {
    addCart: cartReducer,
    product: productReducer,
  }
})