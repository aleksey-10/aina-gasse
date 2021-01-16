import { CatalogState } from "../../interfaces/RootState";
import { ADD_PRODUCT } from "../types";
import { CatalogTypes } from "./actions";

const initialState: CatalogState = {
  data: [],
};

export default function Catalog(state: CatalogState = initialState, action: CatalogTypes) {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        data: [...state.data, { ...action.payload }],
      };

    default:
      return state;
  }
};
