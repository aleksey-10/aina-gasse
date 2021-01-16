import { CatalogState } from "../../interfaces/RootState";
import { ADD_PRODUCT, FILL_CART, FILL_CATALOG } from "../types";
import { CatalogTypes } from "./actions";

const initialState: CatalogState = {
  data: [],
  cart: [],
};

export default function Catalog(state: CatalogState = initialState, action: CatalogTypes) {
  switch (action.type) {
    case FILL_CATALOG:
      return {
        ...state,
        data: action.payload,
      }

    case FILL_CART:
      return {
        ...state,
        cart: action.payload,
      }

    case ADD_PRODUCT:
      return {
        ...state,
        cart: [
          ...state.cart,
          { ...state.data.find(({ id }) => id === action.payload) },
        ],
      };

    default:
      return state;
  }
};
