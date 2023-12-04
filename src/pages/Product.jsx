import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { 추가하기, count증가, count감소, 삭제하기 } from "../redux/cart";

export default function Product() {
  const { id } = useParams();
  // console.log(id);
  const [selected, setSelected] = useState("");
  const [quantity, setQuantity] = useState(0);
  const products = useSelector((state) => state.상품들);
  const cart = useSelector((state) => state.카트);
  // console.log(cart);
  const dispatch = useDispatch((state) => state.카트);
  const product = products.find((item) => item.id === id); // 6라인의 products임

  const cartItem = { ...product, selected, quantity };

  return (
    <>
      <div>
        <h1>상세 페이지</h1>
        <div
          style={{
            display: "flex",
            gap: "44px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "200px",
              height: "240px",
              backgroundColor: "#068FFF",
            }}
          >
            {product.name}
          </div>
          <div>
            <h3>가격: {product.price}</h3>
            <h3>좋아요: {product.likes}</h3>
            <h3>구매옵션</h3>
            <select
              style={{
                width: "100px",
              }}
              onChange={(e) => {
                setSelected(e.target.value);
              }}
            >
              <option value="">선택하세요</option>
              {product.options.map((option) => {
                return (
                  <option key={option} value={option}>
                    {option}
                  </option>
                );
              })}
            </select>
            <h3>구매옵션 : {selected}</h3>
            {/* 여기에 추가하기 */}
            {/* 개수 추가하기 */}
            <div style={{ display: selected === "" ? "none" : "block" }}>
              <span>개수 : {quantity}</span> &nbsp;
              <button
                onClick={() => {
                  setQuantity(quantity + 1);
                }}
              >
                +
              </button>
              {/* 총 금액 추가하기 */}
              <div>총 금액 : {quantity * product.price}</div>
            </div>
            <button
              onClick={() => {
                if (selected === "") {
                  alert("옵션을 선택하세요!");
                }
                // dispatch(추가하기(product));
                else dispatch(추가하기(cartItem));

                // 14라인의 product임
                // 클릭을 한 product가 cart.js의 추가하기의 action.payload로 들어감
              }}
            >
              장바구니에 담기
            </button>
          </div>
        </div>
      </div>
      {/* 장바구니 페이지 */}
      <h1>장바구니</h1>
      <div>
        {cart.map((상품) => {
          return (
            <div
              style={{
                border: "1px solid black",
              }}
            >
              <h3>{상품.name}</h3>
              <h3>가격 : {상품.price} 원</h3>
              <h3>옵션 : {상품.selected}</h3>
              <div style={{ display: "flex", alignItems: "center" }}>
                <h3>
                  개수 :
                  <button onClick={() => dispatch(count감소(상품.id))}>
                    -
                  </button>
                  &nbsp;
                  {상품.quantity} &nbsp;
                  <button onClick={() => dispatch(count증가(상품.id))}>
                    +
                  </button>
                </h3>
              </div>
              <h3>총 비용 : {상품.quantity * 상품.price}</h3>
              {/* 연산자 쓰려면 무조건 중괄호 안에 쓰기 */}
              <button onClick={() => dispatch(삭제하기(상품.id))}>
                삭제하기
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}
