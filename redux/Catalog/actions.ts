import Product from "../../interfaces/Product";
import { ADD_PRODUCT } from "../types";

interface AddProduct {
  type: string;
  payload: Product;
}

export const addProduct = (payload: Product) => ({ type: ADD_PRODUCT, payload });

export type CatalogTypes = AddProduct;
