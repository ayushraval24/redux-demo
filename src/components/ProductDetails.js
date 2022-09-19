import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  selectProduct,
  removeSelectedProduct,
} from "../redux/actions/productActions";
import { useEffect } from "react";
import { getAllProducts } from "../redux/actions/allProductsActions";

export default function ProductDetails() {
  const { productId } = useParams();
  console.log("this is productId", productId);
  const product = useSelector((state) => state.selectedProduct);
  console.log(product);
  const dispatch = useDispatch();

  const fetchSelectedProduct = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log("Error: ", err);
      });
    dispatch(selectProduct(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "") {
      fetchSelectedProduct();
      return () => {
        dispatch(removeSelectedProduct());
      };
    }
  }, [productId]);

  return (
    <div className="m-5">
      <div className="container product_details">
        <div className="row">
          <div className="col-md-6 border-end border-secondary p-3">
            <img
              src={product.image}
              alt="product_image"
              className="product_detail_image"
            />
          </div>
          <div className="col-md-6 p-5 text-start">
            <h2 className="mb-3 p-2">{product.title}</h2>
            <h2 className="mb-3 p-2">${product.price}</h2>
            <h3 className="border border-primary mb-3 p-2">
              {product.category}
            </h3>
            <h4 className="text-secondary p-2 text-justify">
              {product.description}
            </h4>
            <div className="btn btn-danger fs-4 px-5">Add to Cart</div>
          </div>
        </div>
      </div>
    </div>
  );
}
