import React, { Component } from "react";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import * as firebase from "firebase";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      loading: false,
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
      return "";
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

  // fetching the data from firebase
  // componentDidMount() {
  //   this.setState({
  //     loading: true,
  //   });
  //   firebase
  //     .firestore()
  //     .collection("products")
  //     .get()
  //     .then((snapshot) => {
  //       const productsItem = snapshot.docs.map((elm) => {
  //         const data = elm.data();
  //         data["id"] = elm.id;
  //         // console.log(data);
  //         return data;
  //       });
  //       this.setState({
  //         products: productsItem,
  //         loading: false,
  //       });
  //     });
  // }

  //second method to fetch
  // this method is live as we change something on our firebase server it returns us the value
  componentDidMount() {
    this.setState({
      loading: true,
    });
    firebase
      .firestore()
      .collection("products")
      .onSnapshot((snapshot) => {
        const productsItem = snapshot.docs.map((elm) => {
          const data = elm.data();
          data["id"] = elm.id;
          // console.log(data);
          return data;
        });
        this.setState({
          products: productsItem,
          loading: false,
        });
      });
  }

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
        {/* using conditional rendering for loading by using && */}
        {this.state.loading && (
          <h1 style={{ textAlign: "center" }}>Loading Cart Items ..</h1>
        )}
        <div className="container my-3">
          <h3>Total Price : {this.totalPriceCharge()}</h3>
        </div>
      </div>
    );
  }
}
