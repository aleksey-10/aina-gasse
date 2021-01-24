import CartItem from "../../interfaces/Cart";
import Product from "../../interfaces/Product";
import { FILL_CART, FILL_CATALOG } from "../types";

interface FillCatalog {
  type: string;
  payload: Product[];
}

interface FillCart {
  type: string;
  payload: CartItem[];
}

export const fillCatalog = (payload: Product[]): FillCatalog => ({ type: FILL_CATALOG, payload });

export const fillCart = (payload: Product[]): FillCart => ({ type: FILL_CART, payload })

export type CatalogTypes = FillCart | FillCatalog;
