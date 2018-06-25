import React, { Component } from "react";
import "./App.css";
import ProductList from './containers/product_list';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h3>Product Landing Page</h3>
        </header>
        <ProductList />
      </div>
    );
  }
}

export default App;