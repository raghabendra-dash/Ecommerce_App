import React from "react";
import ReactDOM from "react-dom/client";
import "./Style/index.css";
import "./Style/Navbar.css";
import "./Style/ImageSlider.css";
import "./Style/Cards_item.css";
import "./Style/CartItems.css";
import "./Style/Wishlist.css";
import App from "./App";
import { Provider } from "react-redux";
import myStore from "./Redux_Store/store";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={myStore}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
