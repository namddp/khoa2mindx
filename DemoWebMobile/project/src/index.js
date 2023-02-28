import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import SidebarProvider from "./components/Context/SidebarContext";
import CartProvider from "./components/Context/CartContext";
ReactDOM.render(
  <SidebarProvider>
    <CartProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CartProvider>
  </SidebarProvider>,
  document.getElementById("root")
);

reportWebVitals();
