import React, { Component } from "react";
import "./Cart.css";
import bin from "./bin.png";
import add from "./add.png";
import minus from "./minus.png";
class CartComponent extends Component {
  // state is used is constructors in class based components and useState is hook is used in function based components

  render() {
    //Destructuring props
    const { price, title, img } = this.props.product;
    return (
      <div className="cart-body">
        <span
          style={{ display: "flex", justifyContent: "center", width: "150px" }}
        >
          <img
            src={img}
            alt="Sorry For Error !!"
            style={{
              height: "100px",
              marginTop: "10px",
              padding: "10px",
            }}
          />
        </span>
        <div className="right-side">
          <h5 style={{ marginTop: "19px", fontSize: "21px" }}>{title}</h5>
          <p style={{ marginTop: "-10px" }}>Rs : {price}</p>
          <p style={{ marginTop: "-20px" }}>Qty : {this.props.product.qty}</p>
          <img
            src={minus}
            alt="Sorry For Error !!"
            className="image-buttons"
            onClick={() => this.props.onDecreaseQuantity(this.props.product)}
          />
          <img
            src={add}
            alt="Sorry For Error !!"
            className="image-buttons left"
            onClick={() => this.props.onIncreaseQuantity(this.props.product)}
          />
          <img
            src={bin}
            alt="Sorry For Error !!"
            className="image-buttons left"
            onClick={() => this.props.onDeleteComponent(this.props.product.id)}
          />
        </div>
      </div>
    );
  }
}
export default CartComponent;
