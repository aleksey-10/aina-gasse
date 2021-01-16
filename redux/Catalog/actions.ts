import Product from "../../interfaces/Product";
import { ADD_PRODUCT, FILL_CART, FILL_CATALOG } from "../types";

interface FillData {
  type: string;
  payload: Product[];
}

interface AddProduct {
  type: string;
  payload: number | string;
}

export const fillCatalog = (payload: Product[]): FillData => ({ type: FILL_CATALOG, payload });

export const fillCart = (payload: Product[]): FillData => ({ type: FILL_CART, payload })

export const addProduct = (payload: number | string): AddProduct => ({ type: ADD_PRODUCT, payload });


export type CatalogTypes = AddProduct | FillData;
