import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getSelectedProduct } from "../redux/actions/selectedProductActions";

export default function ProductComponent() {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.allProducts.products);
  // const products = useSelector((state) => state.allProducts.products);


  return (
    <div className="container">
      <div className="row p-2 m-3">
        {products.map((product) => (
          <div
            className="col-md-3 mb-5 d-flex align-items-stretch"
            key={product.id}
          >
            <div className="card p-3 shadow">
              <Link
                to={`/product/${product.id}`}
                style={{ textDecoration: "none" }}
              >
                <img
                  src={product.image}
                  className="card-img-top card_image"
                  alt="..."
                />
                <hr className="mb-0" />
                <div className="card-body text-start text-justify text-black">
                  <h5 className="card-title fw-bold mb-1">{product.title}</h5>
                  <p className="card-text fw-bold mb-1">${product.price}</p>
                  <p className="card-text">{product.category}</p>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
