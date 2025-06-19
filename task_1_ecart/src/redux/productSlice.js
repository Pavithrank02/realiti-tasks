import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
  },

  reducers: {
    productList: (state, action) => {
      state.products = action.payload
    }
  }
})

export const { productList } = productSlice.actions
export default productSlice.reducer