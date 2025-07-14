import React from "react";
import "./Product.css";
import product1 from "../images/airpods.jpg";

export const Product = () => {
  return (
    <div className="products">
      <div className="product">
        <img src={product1} style={{ margin: "60px" }} />
        <div className="description">
          <p>
            <b> Apple Airpods 4 </b>
          </p>
          <p> 7699 TL</p>
        </div>
        <button className="addToCartBttn">Sepete Ekle</button>
      </div>
    </div>
  );
};
