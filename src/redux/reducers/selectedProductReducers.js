import { ActionType } from "../types/actions-types";

export const selectedProductReducers = (state = {}, action) => {
  switch (action.type) {
    case ActionType.SELECTED_PRODUCT_REQUEST:
      return {
        loading: true,
        ...state,
      };

    case ActionType.SELECTED_PRODUCT_SUCCESS:
      return {
        loading: false,
        product: action.payload,
        error: "",
      };

    case ActionType.SELECTED_PRODUCT_FAILED:
      return {
        loading: false,
        product: "",
        error: action.payload,
      };

    default:
      return state;
  }
};
