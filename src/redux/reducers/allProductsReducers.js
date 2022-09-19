import { ActionType } from "../types/actions-types";

export const getAllProducts = (state = { products: [] }, action) => {
  switch (action.type) {
    case ActionType.SELECTED_PRODUCT_REQUEST: {
      return {
        loading: true,
        ...state,
      };
    }

    case ActionType.SELECTED_PRODUCT_SUCCESS: {
      return {
        loading: false,
        products: action.payload,
      };
    }

    case ActionType.SELECTED_PRODUCT_FAILED: {
      return {
        loading: false,
        error: action.payload,
      };
    }

    default:
      return state;
  }
};
