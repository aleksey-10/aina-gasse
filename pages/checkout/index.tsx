import { ReactNode } from "react";
import { Card } from "../../components/Card";
import { Layout } from "../../components/Layout";
import { useCatalog } from "../../hooks/catalog.hooks";
import { withTranslation } from "../../i18n";
import styles from './styles.module.scss';

interface Props {
  t(s: string): ReactNode;
}

const Checkout = ({ t }: Props) => {
  const { cart } = useCatalog();

  return (
    <Layout title={t('Cart').toString()}>
      {!cart?.length
        ? (
          <Layout.Empty
            title={t('Cart').toString()}
            description={t('Your cart is empty').toString()}
            button={{ text: t('Go to the catalog').toString(), link: '/catalog' }}
          />
        ) : (
          <div className={`container ${styles.products}`}>
            {cart.map(product => (
              <div key={product.id}>
                <div>{t('Count')}: {product.count}</div>
                <Card
                  className={styles.card}
                  product={product}
                />
              </div>
            ))}
          </div>
        )
      }
    </Layout>
  );
};

Checkout.getInitialProps = async () => {
  return { namespacesRequired: ['common'] };
};

export default withTranslation('common')(Checkout);
