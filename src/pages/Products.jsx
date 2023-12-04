import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { sortByPrice, reset } from "../redux/products";

export default function Products() {
  const products = useSelector((state) => state.상품들);
  const dispatch = useDispatch();

  return (
    <>
      {/* Header */}
      <div
        style={{
          marginTop: "56px",
          textAlign: "center",
        }}
      >
        <h2>🔥 여름 추천템 🔥</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "24px",
          }}
        >
          <button
            onClick={() => {
              dispatch(sortByPrice());
            }}
          >
            가격순정렬
          </button>
          <button
            onClick={() => {
              dispatch(reset());
            }}
          >
            리셋
          </button>
          {/* 7라인의 products임 */}
          {products.map((item) => {
            return (
              <Link to={`/products/${item.id}`}>
                <div
                  style={{
                    width: "200px",
                    height: "240px",
                    backgroundColor: "#068FFF",
                  }}
                >
                  <div>{item.name}</div>
                  <div>{item.price}</div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
