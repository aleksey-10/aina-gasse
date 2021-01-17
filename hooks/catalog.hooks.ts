import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "../interfaces/Product";
import RootState from "../interfaces/RootState";
import { fillCart, fillCatalog } from "../redux/Catalog/actions";

export const useCatalog = () => {
  const cart = useSelector<RootState, Product[]>(state => state.Catalog.cart);
  const products = useSelector<RootState, Product[]>(state => state.Catalog.data);
  const dispatch = useDispatch();

  const loadCart = () => {
    const cartFromStorage: string | null = localStorage.getItem('cart');

    if (cartFromStorage) {
      dispatch(fillCart(JSON.parse(cartFromStorage)));
    }
  };

  const handleFillCatalog = (products: Product[]) => {
    dispatch(fillCatalog(products));
  };

  const handleAddProduct = useCallback((id: number | string) => {
    const newCart = [...cart, { ...products.find(product => product.id === id)}];

    dispatch(fillCart(newCart));
    localStorage.setItem('cart', JSON.stringify(newCart));
  }, [cart, products]);

  return {
    cart,
    products,
    addProduct: handleAddProduct,
    fillCatalog: handleFillCatalog,
    loadCart,
  };
};
