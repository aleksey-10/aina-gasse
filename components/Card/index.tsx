import { I18nContext } from "next-i18next";
import { useCallback, useContext, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "../../interfaces/Product";
import RootState from "../../interfaces/RootState";
import { priceFormatter } from "../../utils/Text";
import { Fade } from 'react-reveal';
import { Button } from "../Button";
import { addProduct } from '../../redux/Catalog/actions';
import styles from './styles.module.scss';

interface Props {
  product: Product;
}

export const Card = ({ product }: Props) => {
  const { title, description, price, imageUrl } = product;
  const { i18n } = useContext(I18nContext);
  const isPageLoading = useSelector<RootState, boolean>(state => state.Layout.isPageLoading);
  const dispatch = useDispatch();

  const handleAddButton = useCallback(() => {
    dispatch(addProduct(product));
  }, [product]);

  return (
    <Fade when={!isPageLoading}>
      <div className={styles.card}>
        <div className={styles.picture}>
          <img
            src={imageUrl}
            alt={title}
            className={styles.img}
          />
        </div>
        <div className={styles.info}>
          <h5>{title}</h5>
          <p className={styles.description}>{description}</p>
          <h3 className={styles.price}>
            {priceFormatter(price)}
          </h3>
          <Button onClick={handleAddButton} className={styles['buy-button']}>
            {i18n.t('Add to cart')}
          </Button>
        </div>
      </div>
    </Fade>
  );
};
