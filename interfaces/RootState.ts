import Product from "./Product";

export interface LayoutState {
  isFirstLoadCompleted: boolean;
  isPageLoading: boolean;
}

export interface CatalogState {
  data: Product[];
  cart: Product[];
}

export default interface RootState {
  Layout: LayoutState;
  Catalog: CatalogState;
};
