import { I18nContext } from "next-i18next";
import { useContext } from "react";
import { useSelector } from "react-redux";
import Product from "../../interfaces/Product";
import RootState from "../../interfaces/RootState";
import { priceFormatter } from "../../utils/Text";
import { Fade } from 'react-reveal';
import { Button } from "../Button";
import styles from './styles.module.scss';

interface Props {
  product: Product;
  addProduct(id: number | string): void;
}

export const Card = ({ product, addProduct }: Props) => {
  const { title, description, price, imageUrl, id } = product;
  const { i18n } = useContext(I18nContext);
  const isPageLoading = useSelector<RootState, boolean>(state => state.Layout.isPageLoading);

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
          <Button onClick={() => addProduct(id)} className={styles['buy-button']}>
            {i18n.t('Add to cart')}
          </Button>
        </div>
      </div>
    </Fade>
  );
};
