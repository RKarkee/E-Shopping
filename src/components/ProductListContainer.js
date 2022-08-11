import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductList } from "../redux/services/productListServices";
import ProductList from "./ProductList";

const ProductListContainer = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.payload);
  const productsLoading = useSelector((state) => state.products.loading);
  const productsError = useSelector((state) => state.products.errors);
  const props = {
    products,
    productsLoading,
    productsError,
  };
  const fetchProductlist = () => {
    return dispatch(fetchProductList());
  };

  return <ProductList fetchProductlist={fetchProductlist} {...props} />;
};

export default ProductListContainer;
