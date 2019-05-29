import React from "react";
import GrocerieItem from "./GrocerieItem";

const Groceries = props => {
  return (
    <div>
      {props.items.map((item, index) => {
        return <GrocerieItem key={index} name={item[0]} onAddItem={props.onAddItem()} 
        />;
      })}
    </div>
  );
};

export default Groceries;
