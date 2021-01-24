import CartItem from "./Cart";
import Product from "./Product";

export interface LayoutState {
  isFirstLoadCompleted: boolean;
  isPageLoading: boolean;
}

export interface CatalogState {
  data: Product[];
  cart: CartItem[];
}

export default interface RootState {
  Layout: LayoutState;
  Catalog: CatalogState;
};
