import { I18nContext } from "next-i18next";
import { useContext, useMemo } from "react";
import { useSelector } from "react-redux";
import Product from "../../interfaces/Product";
import RootState from "../../interfaces/RootState";
import { toCamelCase } from "../../utils/Text";
import { Fade } from 'react-reveal';
import styles from './styles.module.scss';

interface Props extends Product {}

export const Card = ({ id, title, description, price, imageUrl, collection }: Props) => {
  const { i18n } = useContext(I18nContext);
  const isPageLoading = useSelector<RootState, boolean>(state => state.Layout.isPageLoading);

  const priceToShow = useMemo(() => {
    if (!price) {
      return toCamelCase(i18n.t('Negotiable Price'));
    }

    if (typeof price === 'string') {
      return price;
    }

    return `₴ ${price}`;
  }, [price]);

  return (
    <Fade when={!isPageLoading}>
      <div>
        <div className={styles.picture}>
          <img
            src={imageUrl}
            alt={title}
            className={styles.img}
          />
        </div>
        <h4>{title}</h4>
        <p>{description}</p>
        <h3>{priceToShow}</h3>
      </div>
    </Fade>
  );
};
