import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    name: "멋진 바지",
    price: 20000,
    options: [28, 30, 32],
    likes: 100,
  },
  {
    id: "2",
    name: "멋진 셔츠",
    price: 10000,
    options: ["small", "medium", "large"],
    likes: 200,
  },
  {
    id: "3",
    name: "멋진 신발",
    price: 30000,
    options: [230, 240, 250, 260, 270],
    likes: 300,
  },
];

const products = createSlice({
  name: "상품들",
  initialState: initialState,
  reducers: {
    sortByPrice: (state) => {
      state.sort((a, b) => a.price - b.price);
    },
    reset: (state) => initialState,
  },
});
export const { sortByPrice, reset } = products.actions;
export default products;
