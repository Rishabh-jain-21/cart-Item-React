import React from "react";
import CartComponent from "./CartComponent";

const Cart = (props) => {
  const { products } = props;
  return (
    <div className="Cart-body container">
      {products.map((product) => {
        return (
          <CartComponent
            product={product}
            key={product.id}
            onIncreaseQuantity={props.onIncreaseQuantity}
            onDecreaseQuantity={props.onDecreaseQuantity}
            onDeleteComponent={props.onDeleteComponent}
            qty={product.qty}
          />
        );
      })}
    </div>
  );
};

export default Cart;
