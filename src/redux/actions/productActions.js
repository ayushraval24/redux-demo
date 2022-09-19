import { ActionType } from "../types/actions-types";
import axios from "axios";

export const setProducts = (products) => {
  return {
    type: ActionType.SET_PRODUCTS,
    payload: products,
  };
};

export const selectProduct = (product) => {
  return {
    type: ActionType.SELECTED_PRODUCT,
    payload: product,
  };
};

export const removeSelectedProduct = (product) => {
  return {
    type: ActionType.REMOVE_SELECTED_PRODUCT,
  };
};
