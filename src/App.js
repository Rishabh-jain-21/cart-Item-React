import React, { Component } from "react";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          id: 1,
          price: 3999,
          title: "Boat Watch",
          qty: 1,
          img: "https://rukminim1.flixcart.com/image/416/416/kkprmvk0/smartwatch/v/j/n/storm-android-ios-boat-original-imafzzu29tguvtqg.jpeg?q=70",
        },
        {
          id: 2,
          price: 13999,
          title: "LED TV",
          qty: 1,
          img: "https://m.media-amazon.com/images/I/913DBkJKHZL._AC_SR180,120_QL70_.jpg",
        },
        {
          id: 3,
          price: 41999,
          title: "DELL I5",
          qty: 1,
          img: "https://m.media-amazon.com/images/I/51qwcXo1lCL._AC_UY327_FMwebp_QL65_.jpg",
        },
      ],
    };
  }
  getCount = () => {
    const { products } = this.state;

    let count = 0;
    products.forEach((elm) => {
      count += elm.qty;
    });

    return count;
  };
  totalPriceCharge = () => {
    const { products } = this.state;
    let total = 0;
    products.map((elm) => {
      total = total + elm.qty * elm.price;
    });
    return total;
  };
  handleDecreaseQuantity = (retunProduct) => {
    // console.log("decrease this", retunProduct);
    const index = this.state.products.indexOf(retunProduct);
    if (this.state.products[index].qty >= 1) {
      this.state.products[index].qty = this.state.products[index].qty - 1;
      this.setState({ products: this.state.products });
    }
  };
  handleIncreaseQuantity = (retunProduct) => {
    // console.log("increase the quantity", retunProduct);

    const index = this.state.products.indexOf(retunProduct);
    this.state.products[index].qty = this.state.products[index].qty + 1;
    this.setState({ products: this.state.products });
  };
  handleDeleteComponent = (id) => {
    // console.log("delete function with id -> ", id);
    const items = this.state.products.filter((item) => item.id !== id); // items array contains filtered array without that particulat component
    this.setState({ products: items });
  };
  render() {
    const { products } = this.state;
    return (
      <div>
        <Navbar count={this.getCount()} />
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteComponent={this.handleDeleteComponent}
        />
        <div className="container my-3">
          <h3>Total Price : {this.totalPriceCharge()}</h3>
        </div>
      </div>
    );
  }
}
