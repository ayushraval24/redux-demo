import { ActionType } from "../types/actions-types";

const initialState = {
  products: [],
};

export const productReducers = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};

export const selectedProductReducers = (state = {}, action) => {
  switch (action.type) {
    case ActionType.SELECTED_PRODUCT:
      return {
        ...state,
        ...action.payload,
      };
    
    case ActionType.REMOVE_SELECTED_PRODUCT:
      return {};
    
    default:
      return state;
  }
};
