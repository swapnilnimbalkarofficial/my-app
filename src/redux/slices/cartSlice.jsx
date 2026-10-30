import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartValue: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addToCart: function (state, action) {
      console.log("Add to cart called", action);
      state.cartValue.push(action.payload);
    },

    removeFromCart: function (state, action) {
      console.log("Remove cart", action);
      state.cartValue = state.cartValue.filter(
        (item) => item.id !== action.payload,
      );
    },
  },
});

// Export action creators
export const { addToCart, removeFromCart } = cartSlice.actions;

// Export reducer
export default cartSlice.reducer;
