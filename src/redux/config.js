import { configureStore } from "@reduxjs/toolkit";
import products from "./products";
import cart from "./cart";

const store = configureStore({
  reducer: {
    상품들: products.reducer,
    카트: cart.reducer,
  },
});

export default store;
