import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../redux/addtocart/addtocartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
