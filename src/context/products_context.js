import axios from "axios";
<<<<<<< HEAD
import React, { useContext, useEffect, useReducer } from "react";
=======
import React, { useContext, useEffect, useReducer, useState } from "react";
>>>>>>> 4edc8b6525763ef3b99aea13002a722dee200efe
import reducer from "../reducers/products_reducer";
import { products_url as url } from "../utils/constants";
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from "../actions";

const initialState = {
<<<<<<< HEAD
  opensiderBarContent: false,
  products_loading: false,
  products_error: false,
  products: [],
  featured_products: [],
=======
  isSiderbarOpen: false,
>>>>>>> 4edc8b6525763ef3b99aea13002a722dee200efe
};

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

<<<<<<< HEAD
  const sidebarOpen = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };

  const sidebarClose = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };

  const fetchProducts = async (url) => {
    dispatch({ type: GET_PRODUCTS_BEGIN });
    try {
      const respone = await axios.get(url);
      const productsData = respone.data;
      console.log(productsData);
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: productsData });
    } catch (error) {
      dispatch({ type: GET_PRODUCTS_ERROR });
    }
  };

  useEffect(() => {
    fetchProducts(url);
  }, []);

  return (
    <ProductsContext.Provider value={{ ...state, sidebarClose, sidebarOpen }}>
=======
  const openSiderBar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };

  const closeSideBar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };

  useEffect(() => {
    openSiderBar();
  }, []);

  return (
    <ProductsContext.Provider value={{ ...state, openSiderBar, closeSideBar }}>
>>>>>>> 4edc8b6525763ef3b99aea13002a722dee200efe
      {children}
    </ProductsContext.Provider>
  );
};
// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext);
};
