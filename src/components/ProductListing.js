import React from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useEffect } from "react";
import { setProducts } from "../redux/actions/productActions";
import ProductComponent from "./ProductComponent";
import { getAllProducts } from "../redux/actions/allProductsActions";
import Loading from "./Loading";
import Error from "./Error";

export default function ProductListing() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.allProducts);
  const { loading, error, products } = product;

  // const fetchProducts = async () => {
  //   const response = await axios
  //     .get("https://fakestoreapi.com/products")
  //     .catch((err) => {
  //       console.log("Something went wrong, Err:", err);
  //     });
  //   dispatch(setProducts(response.data));
  // };

  // useEffect(() => {
  //   fetchProducts();
  // }, []);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <div className="p-2">
      <h1>MyShop</h1>
      {/* <ProductComponent /> */}
      {loading ? <Loading /> : error ? <Error /> : <ProductComponent />}
    </div>
  );
}
