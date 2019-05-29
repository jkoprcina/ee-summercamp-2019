import React from "react";
import "../styles/basket.css";

const Basket = props => {
  return (
    <>
      <div
        style={{
          display: props.quantity === 0 ? "none" : "block",
          textDecorationLine: props.bought ? "line-through" : "none"
        }}
        className="singleItem"
      >
        <span onClick={() => props.onBuyItem(props.name)}>
          {props.name} {props.quantity}
        </span>
        <span
          className="prettyMinus"
          onClick={() => props.onRemoveItem(props.name)}
        >
          &#8722;
        </span>
      </div>
    </>
  );
};

export default Basket;
