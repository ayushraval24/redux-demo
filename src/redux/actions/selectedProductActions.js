import axios from "axios";
import { ActionType } from "../types/actions-types";

export const getSelectedProduct = (id) => async (dispatch, state) => {
  dispatch({
    type: ActionType.SELECTED_PRODUCT_REQUEST,
  });

  console.log(state);

  try {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
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
