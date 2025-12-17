import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",

  initialState: {
    items: [],
  },

  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;

      const exist = state.items.find((item) => item.id === product.id);

      if (exist) {
        exist.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }
    },

    removeFromCart: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
    },

    increaseQty: (state, action) => {
      const id = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item) item.quantity += 1;
    },

    decreaseQty: (state, action) => {
      const id = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },

    buyNowbtn: (state, action) => {
      const product = action.payload;

      const exist = state.items.find((item) => item.id === product.id);

      if (exist) {
        alert("Product already in cart");
        return;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQty,
  decreaseQty,
  navitoCart,
  navigateTocart,
  buyNowbtn,
} = cartSlice.actions;

export default cartSlice.reducer;
