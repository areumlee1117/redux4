import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./redux/config";

// const initialState = [
//   {
//     id: nanoid(),
//     name: "멋진 바지",
//     price: 20000,
//     options: [28, 30, 32],
//     likes: 100,
//   },
//   {
//     id: nanoid(),
//     name: "멋진 셔츠",
//     price: 10000,
//     options: ["small", "medium", "large"],
//     likes: 200,
//   },
//   {
//     id: nanoid(),
//     name: "멋진 신발",
//     price: 30000,
//     options: [230, 240, 250, 260, 270],
//     likes: 300,
//   },
// ];

// const products = createSlice({
//   name: "상품들",
//   initialState: initialState,
//   reducers: {
//     sortByPrice: (state) => {
//       state.sort((a, b) => a.price - b.price);
//     },
//     reset: (state) => initialState,
//   },
// });
// export const { sortByPrice, reset } = products.actions;

// 장바구니 redux
// 다른 상태가 필요하기 때문에 redux 하나 더

// const cart = createSlice({
//   name: "장바구니",
//   initialState: [],
//   reducers: {
//     추가하기: (state, action) => {
//       state.push(action.payload); // 빈 배열이었던 state에 데이터가 들어감
//     },
//   },
// });

// export const { 추가하기 } = cart.actions;

// const store = configureStore({
//   reducer: {
//     상품들: products.reducer,
//     카트: cart.reducer,
//   },
// });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();
