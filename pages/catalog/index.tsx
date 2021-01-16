import { ReactNode } from "react";
import { Card } from "../../components/Card";
import { Layout } from "../../components/Layout";
import { withTranslation } from "../../i18n";
import { FAKE_CATALOG_DATA } from "../../utils/Catalog";
import styles from './styles.module.scss';

interface Props {
  t(s: string): ReactNode;
}

function Catalog({ t }: Props) {
  return (
    <Layout title={t('Catalog').toString()}>
      <div className="container">
        <h2 className={styles.title}>{t('Catalog')}</h2>
        <div className={styles['product-list']}>
          {FAKE_CATALOG_DATA.map(product => <Card key={product.id} {...product} />)}
        </div>
      </div>
    </Layout>
  );
};

Catalog.getInitialProps = async () => ({
  namespacesRequired: ['common', 'footer'],
});

export default withTranslation('common')(Catalog);
