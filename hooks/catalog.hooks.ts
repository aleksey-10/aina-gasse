import { useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "../interfaces/Product";
import RootState from "../interfaces/RootState";
import { addProduct, fillCart, fillCatalog } from "../redux/Catalog/actions";

export const useCatalog = () => {
  const cart = useSelector<RootState, Product[]>(state => state.Catalog.cart);
  const products = useSelector<RootState, Product[]>(state => state.Catalog.data);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const cartFromStorage: string | null = localStorage.getItem('cart');

  //   if (cartFromStorage) {
  //     dispatch(fillCart(JSON.parse(cartFromStorage)));
  //   }
  // }, [localStorage]);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const handleFillCatalog = (products: Product[]) => {
    dispatch(fillCatalog(products));
  };

  const handleAddProduct = (id: number | string) => {
    dispatch(addProduct(id));
  };

  return {
    cart,
    products,
    addProduct: handleAddProduct,
    fillCatalog: handleFillCatalog,
  };
};
