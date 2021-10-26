import React from "react";
import cartImg from "./shopping-cart.png";
import shop from "./shop.png";
const Navbar = (props) => {
  return (
    <div style={styles.nav}>
      <div
        style={{ display: "flex", alignItems: "center", color: "aliceblue" }}
      >
        <img
          src={shop}
          alt="icon_photu"
          style={{ height: 45, paddingLeft: "20px" }}
        />
        <h2 style={{ marginTop: "10px" }}>Shop-Shit</h2>
      </div>
      <div style={styles.cartIconContainer}>
        <img style={styles.cartIcon} src={cartImg} alt="cart-Photu" />
        <span style={styles.cartCount}>{props.count}</span>
      </div>
    </div>
  );
};
// defining styles for navbar

const styles = {
  cartIcon: {
    height: 32,
    marginRight: 20,
  },
  nav: {
    height: 70,
    background: "rgb(42 43 65)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cartIconContainer: {
    position: "relative",
    paddingRight: "10px",
  },
  cartCount: {
    height: "25px",
    width: "25px",
    background: "yellow",
    borderRadius: "50%",
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    right: 15,
    top: -9,
  },
};
export default Navbar;
