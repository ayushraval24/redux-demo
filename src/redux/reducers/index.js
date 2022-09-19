import { combineReducers } from "redux";
import { productReducers } from "./productReducers";
import { selectedProductReducers } from "./productReducers";
import { getAllProducts } from "./allProductsReducers";

export const rootReducer = combineReducers({
  allProducts: getAllProducts,
  // allProducts: productReducers,
  selectedProduct: selectedProductReducers,
});
