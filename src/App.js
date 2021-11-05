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
    products.map((elm) => {
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
      //   this.state.products[index].qty = this.state.products[index].qty - 1;
      //   this.setState({ products: this.state.products });

      // now we are decreasing quantity on firebase
      const docRef = firebase
        .firestore()
        .collection("products")
        .doc(this.state.products[index].id);

      docRef
        .update({ qty: this.state.products[index].qty - 1 })
        .then(() => {
          console.log("doc updated successfully");
        })
        .catch((error) => {
          console.log("Error : ", error);
        });
    }
  };

  handleIncreaseQuantity = (retunProduct) => {
    const index = this.state.products.indexOf(retunProduct);
    /* this.state.products[index].qty = this.state.products[index].qty + 1;
     this.setState({ products: this.state.products }); */

    // we dont want to increase qunatity on our page
    // now we have to update the quantity in firebase so we will do that

    const docRef = firebase
      .firestore()
      .collection("products")
      .doc(this.state.products[index].id);

    // update fxn will return a promise we will handle it
    docRef
      .update({
        qty: this.state.products[index].qty + 1,
      })
      .then(() => {
        console.log("doc updated successfully");
      })
      .catch((err) => {
        console.log("Error : ", err);
      });
  };
  handleDeleteComponent = (id) => {
    // console.log("delete function with id -> ", id);
    // const items = this.state.products.filter((item) => item.id !== id); // items array contains filtered array without that particulat component
    // this.setState({ products: items });

    const docRef = firebase.firestore().collection("products").doc(id);

    docRef
      .delete()
      .then(() => {
        console.log("doc deleted successfully");
      })
      .catch((err) => {
        console.log("Error : ", err);
      });
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

      //where is used to filter data
      // .where("price", ">", 999)

      //order by is used to sort data
      .orderBy("price", "desc")
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

  // adding data in firebase
  addNewItem = () => {
    firebase
      .firestore()
      .collection("products")
      .add({
        img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSOt24Y-4GpfX9_PxPxzgVb8HLwuVMo7Cx6yt3-Xy3QXpc38_llqBgr-zyzLuQ0tSStnngrTN7QGYw&usqp=CAc",
        price: 999,
        qty: 5,
        title: "Power Bank",
      })
      .then((elm) => {
        console.log("new item added", elm);
      })
      .catch((error) => {
        console.log("error occured", error);
      });
  };

  render() {
    const { products } = this.state;
    return (
      <div>
        <Navbar count={this.getCount()} />
        <button onClick={this.addNewItem}>Add New Cart Item</button>
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
