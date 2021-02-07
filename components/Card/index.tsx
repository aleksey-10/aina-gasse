import { I18nContext } from 'next-i18next';
import { useContext, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import Product from '../../interfaces/Product';
import RootState from '../../interfaces/RootState';
import { priceFormatter } from '../../utils/Text';
import { Fade } from 'react-reveal';
import { Button } from '../Button';
import styles from './styles.module.scss';

interface Props {
  product: Product;
  addProduct?(id: number | string): void;
  className?: string;
}

export const Card = ({ product, addProduct, className }: Props) => {
  const { title, description, price, imageUrl, _id } = product;
  const { i18n } = useContext(I18nContext);
  const isPageLoading = useSelector<RootState, boolean>(
    (state) => state.Layout.isPageLoading,
  );
  const [imgLoaded, setImgLoaded] = useState<boolean>(false);

  const classNames = useMemo(() => {
    const classes = [styles.card];

    if (className) {
      classes.push(className);
    }

    return classes.join(' ');
  }, [className]);

  return (
    <Fade when={!isPageLoading && imgLoaded}>
      <div className={classNames}>
        <div className={styles.picture}>
          <img
            src={imageUrl}
            alt={title}
            className={styles.img}
            onLoad={() => setImgLoaded(true)}
          />
        </div>
        <div className={styles.info}>
          <div>
            <h5>{title}</h5>
            <p className={styles.description}>{description}</p>
          </div>
          <div className={styles.bottom}>
            <h3 className={styles.price}>{priceFormatter(price)}</h3>
            {addProduct && (
              <div className={styles['buy-button']}>
                <Button onClick={() => addProduct(_id)}>
                  {i18n.t('Add to cart')}
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
};
