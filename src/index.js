import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ProductsProvider } from "./context/products_context";
import { FilterProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { UserProvider } from "./context/user_context";
import { Auth0Provider } from "@auth0/auth0-react";

// dev-n1xmsn1b70a8padt.us.auth0.com
// 8qPjkK7wWu8yA8u9oeTenPR6caCjxZVj
ReactDOM.render(
  <Auth0Provider
    domain="dev-n1xmsn1b70a8padt.us.auth0.com"
    clientId="8qPjkK7wWu8yA8u9oeTenPR6caCjxZVj"
    redirectUri={window.location.origin}
    cacheLocation="localstorage"
  >
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>,
  document.getElementById("root")
);
