import { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "../interfaces/Product";
import CartItem from '../interfaces/Cart';
import RootState from "../interfaces/RootState";
import { fillCart, fillCatalog } from "../redux/Catalog/actions";

interface ReturnedType {
  cart: CartItem[];
  cartProductsCount: number;
  products: Product[];
  addProduct(id: number | string): void;
  fillCatalog(products: Product[]): void;
  loadCart(): void;
}

export const useCatalog = (): ReturnedType => {
  const cart = useSelector<RootState, CartItem[]>(state => state.Catalog.cart);
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
    let newCart = [];
    const alreadyInCart = cart.some(product => product._id === id);

    if (alreadyInCart) {
      newCart = cart.map(product => {
        if (product._id === id) {
          return {...product, count: product.count + 1};
        }

        return product;
      });
    } else {
      newCart = [...cart, { ...products.find(product => product._id === id), count: 1 }];
    }

    dispatch(fillCart(newCart));
    localStorage.setItem('cart', JSON.stringify(newCart));
  }, [cart, products]);

  const cartProductsCount = useMemo(() => {
    return cart.reduce((acc, { count }) => acc + count, 0);
  }, [cart]);

  return {
    cart,
    cartProductsCount,
    products,
    addProduct: handleAddProduct,
    fillCatalog: handleFillCatalog,
    loadCart,
  };
};
