import React from "react";

const GrocerieItem = props => {
  return (
    <div className="singleItem" onClick={() => props.onAddItem(props.name)}>
      <span>{props.name}</span>
      <span className="prettyPlus">&#43;</span>
    </div>
  );
};

export default GrocerieItem;
