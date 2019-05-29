import React, { Component } from "react";
import Basket from "./components/Basket";
import Groceries from "./components/Groceries";
import "./styles/app.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        ["Strawberry", 0, false],
        ["Blueberry", 0, false],
        ["Orange", 0, false],
        ["Banana", 0, false],
        ["Apple", 0, false],
        ["Carrot", 0, false],
        ["Celery", 0, false],
        ["Mushroom", 0, false],
        ["Green Pepper", 0, false],
        ["Eggs", 0, false],
        ["Cheese", 0, false],
        ["Butter", 0, false]
      ],
      basketIsEmpty : true
    };
  }

  checkIfBasketIsEmpty(){
    let basketIsEmptyCopy = true;
    this.state.items.forEach(item => {
      if (item[1] > 0) {
        basketIsEmptyCopy = false;
      }
    });
    this.setState({ basketIsEmpty : basketIsEmptyCopy });
  } 

  handleAddItem = selectedItemName => {
    let itemsCopy = [...this.state.items];
    itemsCopy.forEach(item => {
      if (selectedItemName === item[0] && !item[2]) {
        item[1]++;
      }
    });
    this.checkIfBasketIsEmpty();
    this.setState({ items: itemsCopy });
  };

  handleRemoveItem = selectedItemName => {
    let itemsCopy = [...this.state.items];
    itemsCopy.forEach(item => {
      if (selectedItemName === item[0] && item[1] > 0 && !item[2]) {
        item[1]--;
      }
    });
    this.checkIfBasketIsEmpty();
    this.setState({ items: itemsCopy });
  };

  handleDeleteBasket = () => {
    let itemsCopy = [...this.state.items];
    itemsCopy.forEach(item => {
      item[1] = 0;
      item[2] = false;
    });
    this.checkIfBasketIsEmpty();
    this.setState({ items: itemsCopy });
  };

  handleBuyItem = selectedItemName => {
    let itemsCopy = [...this.state.items];
    itemsCopy.forEach(item => {
      if (selectedItemName === item[0]) {
        item[2] = !item[2];
      }
    });
    this.setState({ items: itemsCopy });
  };

  render() {
    const { items } = this.state;
    return (
      <>
        <div>
          <h2>Groceries</h2>
          <Groceries items={items} onAddItem={() => this.handleAddItem} />
        </div>
        <div>
          <h2>Basket</h2>
          {this.state.basketIsEmpty ?
          ( "The basket is empty") :
          (<div>
            {items.map((item, index) => (
              <Basket
                key={index}
                name={item[0]}
                quantity={item[1]}
                bought={item[2]}
                onRemoveItem={this.handleRemoveItem}
                onBuyItem={this.handleBuyItem}
              />
            ))}
          </div>)}
          <br />
          <button onClick={this.handleDeleteBasket}>Delete basket</button>
        </div>
      </>
    );
  }
}

export default App;
