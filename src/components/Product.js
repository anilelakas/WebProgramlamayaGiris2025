import React, { useState } from "react";
import "./Product.css";
import product1 from "../images/airpods.jpg";
import product2 from "../images/airfryer.jpg";
import product3 from "../images/crocs.jpg";
import product4 from "../images/iphone.jpg";
import product5 from "../images/jordan.jpg";
import product6 from "../images/macbook.jpg";
import product7 from "../images/samsonite.jpg";
import product8 from "../images/tv.jpg";
import product9 from "../images/watch.jpg";

export const Product = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    if (count < 5) {
      setCount((prev) => prev + 1);
    }
  };

  const decrease = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
    }
  };

  return (
    <div className="products">
      <div className="product">
        <img src={product1} style={{ margin: "65px" }} />
        <div className="description">
          <p>
            <b> Apple Airpods 4 </b>
          </p>
          <p> 7699 TL</p>
        </div>
        <button className="addToCartBttn">Sepete Ekle</button>
        <div className="amount">
          <button className="amountButton" onClick={decrease}>
            <h3>-</h3>
          </button>
          <p className="amountNumber" id="counter">
            <b>{count}</b>
          </p>
          <button className="amountButton" onClick={increase}>
            <h3>+</h3>
          </button>
        </div>
      </div>
      <div className="product">
        <img src={product2} style={{ margin: "65px" }} />
        <div className="description">
          <p>
            <b> Phillips Airfryer</b>
          </p>
          <p> 3000 TL</p>
        </div>
        <button className="addToCartBttn">Sepete Ekle</button>
        <div className="amount">
          <button className="amountButton" onClick={decrease}>
            <h3>-</h3>
          </button>
          <p className="amountNumber" id="counter">
            <b>{count}</b>
          </p>
          <button className="amountButton" onClick={increase}>
            <h3>+</h3>
          </button>
        </div>
      </div>
      <div className="product">
        <img src={product3} style={{ margin: "65px" }} />
        <div className="description">
          <p>
            <b>Crocs Terlik</b>
          </p>
          <p> 1000 TL</p>
        </div>
        <button className="addToCartBttn">Sepete Ekle</button>
        <div className="amount">
          <button className="amountButton" onClick={decrease}>
            <h3>-</h3>
          </button>
          <p className="amountNumber" id="counter">
            <b>{count}</b>
          </p>
          <button className="amountButton" onClick={increase}>
            <h3>+</h3>
          </button>
        </div>
      </div>
      <div className="product">
        <img src={product4} style={{ margin: "65px" }} />
        <div className="description">
          <p>
            <b> Apple iPhone 15 </b>
          </p>
          <p> 60000 TL</p>
        </div>
        <button className="addToCartBttn">Sepete Ekle</button>
        <div className="amount">
          <button className="amountButton" onClick={decrease}>
            <h3>-</h3>
          </button>
          <p className="amountNumber" id="counter">
            <b>{count}</b>
          </p>
          <button className="amountButton" onClick={increase}>
            <h3>+</h3>
          </button>
        </div>
      </div>
      <div className="product">
        <img src={product5} style={{ margin: "65px" }} />
        <div className="description">
          <p>
            <b>Nike Jordan Ayakkabı</b>
          </p>
          <p> 2500 TL</p>
        </div>
        <button className="addToCartBttn">Sepete Ekle</button>
        <div className="amount">
          <button className="amountButton" onClick={decrease}>
            <h3>-</h3>
          </button>
          <p className="amountNumber" id="counter">
            <b>{count}</b>
          </p>
          <button className="amountButton" onClick={increase}>
            <h3>+</h3>
          </button>
        </div>
      </div>
      <div className="product">
        <img src={product6} style={{ margin: "65px" }} />
        <div className="description">
          <p>
            <b> Apple Macbook Pro </b>
          </p>
          <p> 30000 TL</p>
        </div>
        <button className="addToCartBttn">Sepete Ekle</button>
        <div className="amount">
          <button className="amountButton" onClick={decrease}>
            <h3>-</h3>
          </button>
          <p className="amountNumber" id="counter">
            <b>{count}</b>
          </p>
          <button className="amountButton" onClick={increase}>
            <h3>+</h3>
          </button>
        </div>
      </div>
      <div className="product">
        <img src={product7} style={{ margin: "65px" }} />
        <div className="description">
          <p>
            <b> Samsonite Valiz </b>
          </p>
          <p> 1500 TL</p>
        </div>
        <button className="addToCartBttn">Sepete Ekle</button>
        <div className="amount">
          <button className="amountButton" onClick={decrease}>
            <h3>-</h3>
          </button>
          <p className="amountNumber" id="counter">
            <b>{count}</b>
          </p>
          <button className="amountButton" onClick={increase}>
            <h3>+</h3>
          </button>
        </div>
      </div>
      <div className="product">
        <img src={product8} style={{ margin: "65px" }} />
        <div className="description">
          <p>
            <b> Sony Bravia OLED TV </b>
          </p>
          <p> 7699 TL</p>
        </div>
        <button className="addToCartBttn">Sepete Ekle</button>
        <div className="amount">
          <button className="amountButton" onClick={decrease}>
            <h3>-</h3>
          </button>
          <p className="amountNumber" id="counter">
            <b>{count}</b>
          </p>
          <button className="amountButton" onClick={increase}>
            <h3>+</h3>
          </button>
        </div>
      </div>
      <div className="product">
        <img src={product9} style={{ margin: "65px" }} />
        <div className="description">
          <p>
            <b> Apple Watch</b>
          </p>
          <p> 2700 TL</p>
        </div>
        <button className="addToCartBttn">Sepete Ekle</button>
        <div className="amount">
          <button className="amountButton" onClick={decrease}>
            <h3>-</h3>
          </button>
          <p className="amountNumber" id="counter">
            <b>{count}</b>
          </p>
          <button className="amountButton" onClick={increase}>
            <h3>+</h3>
          </button>
        </div>
      </div>
    </div>
  );
};
