import Product from "../../interfaces/Product";
import { FILL_CART, FILL_CATALOG } from "../types";

interface FillData {
  type: string;
  payload: Product[];
}

export const fillCatalog = (payload: Product[]): FillData => ({ type: FILL_CATALOG, payload });

export const fillCart = (payload: Product[]): FillData => ({ type: FILL_CART, payload })

export type CatalogTypes = FillData;
