import { createSlice } from "@reduxjs/toolkit";

// 장바구니 redux
// 다른 상태가 필요하기 때문에 redux 하나 더
const cart = createSlice({
  name: "장바구니",
  initialState: [],
  reducers: {
    추가하기: (state, action) => {
      state.push(action.payload); // 빈 배열이었던 state에 데이터가 들어감
    },

    count증가: (state, action) => {
      state.map((item) => {
        if (item.id === action.payload) {
          item.quantity++;
        }
      });
    },

    count감소: (state, action) => {
      state.map((item) => {
        if (item.id === action.payload) {
          if (item.quantity > 1) item.quantity--;
        }
      });
    },

    삭제하기: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { 추가하기, count증가, count감소, 삭제하기 } = cart.actions;
export default cart;
