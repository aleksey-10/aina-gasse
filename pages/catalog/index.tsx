import { ReactNode, useEffect } from "react";
import { Card } from "../../components/Card";
import { Layout } from "../../components/Layout";
import { useCatalog } from "../../hooks/catalog.hooks";
import { withTranslation } from "../../i18n";
import Product from "../../interfaces/Product";
import { FAKE_CATALOG_DATA } from "../../utils/Catalog";
import styles from './styles.module.scss';

interface Props {
  t(s: string): ReactNode;
  productsFromServer: Product[];
}

function Catalog({ t, productsFromServer }: Props) {
  const { addProduct, fillCatalog, products } = useCatalog();

  useEffect(() => {
    fillCatalog(productsFromServer);
  });

  return (
    <Layout title={t('Catalog').toString()}>
      <div className="container">
        <section className="section">
          <h2 className={styles.title}>{t('Catalog')}</h2>
          <div className={styles['product-list']}>
            {products.map(product => (
              <Card
                key={product.id}
                product={product}
                addProduct={addProduct}
              />)
            )}
          </div>
        </section>
      </div>
    </Layout>
  );
};

Catalog.getInitialProps = async () => {
  const response = await fetch(`${process.env.API_URL}/products`);
  const productsFromServer = await response.json();

  return {
    namespacesRequired: ['common'],
    productsFromServer,
  }
};

export default withTranslation('common')(Catalog);
