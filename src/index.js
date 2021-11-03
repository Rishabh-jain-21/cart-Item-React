import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBO8ZlrS0dAiMFCeJPGzXmh0zocIPxm9cY",
  authDomain: "cart-9f767.firebaseapp.com",
  projectId: "cart-9f767",
  storageBucket: "cart-9f767.appspot.com",
  messagingSenderId: "422883632604",
  appId: "1:422883632604:web:e804cc07d71dbed845db19",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
