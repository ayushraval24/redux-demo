import { ActionType } from "../types/actions-types";
import axios from "axios";

export const getAllProducts = () => async (dispatch, state) => {
  dispatch({
    type: ActionType.SELECTED_PRODUCT_REQUEST,
  });

  try {
    const response = await axios.get("https://fakestoreapi.com/products");

    dispatch({
      type: ActionType.SELECTED_PRODUCT_SUCCESS,
      payload: response.data,
    });
  } catch (err) {
    dispatch({
      type: ActionType.SELECTED_PRODUCT_FAILED,
      payload: err,
    });
  }
};
