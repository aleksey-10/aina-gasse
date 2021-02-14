import { ReactNode, useCallback, useEffect, useState } from 'react';
import { Button } from '../../components/Button';
import { Card } from '../../components/Card';
import { Layout } from '../../components/Layout';
import Modal from '../../components/Modal';
import { useCatalog } from '../../hooks/catalog.hooks';
import { withTranslation } from '../../i18n';
import Product from '../../interfaces/Product';
import { Fade } from 'react-reveal';
import styles from './styles.module.scss';

interface Props {
  t(s: string): ReactNode;
  productsFromServer: Product[];
}

function Catalog({ t, productsFromServer }: Props) {
  const { addProduct, fillCatalog, products } = useCatalog();
  const [isModalVisible, setModalVisible] = useState<boolean>(false);

  useEffect(() => {
    fillCatalog(productsFromServer);

    // fetch(`${process.env.API_URL}/products`, {
    //   method: 'POST',
    //   body: JSON.stringify(productsFromServer),
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // })
  }, [productsFromServer, fillCatalog]);

  const handleAddProduct = useCallback(
    (id) => {
      addProduct(id);

      setModalVisible(true);
    },
    [addProduct, setModalVisible],
  );

  const handleCloseModal = useCallback(() => {
    setModalVisible(false);
  }, [setModalVisible]);

  return (
    <Layout title={t('Catalog').toString()}>
      <Modal visible={isModalVisible} onClose={handleCloseModal}>
        <Modal.Header align="center">{t('Added to cart')}</Modal.Header>
        <Modal.Footer align="center">
          <Button onClick={handleCloseModal}>{t('Continue shopping')}</Button>
        </Modal.Footer>
      </Modal>
      <div className="container">
        <section className="section">
          <Fade>
            <h2 className={styles.title}>{t('Catalog')}</h2>
          </Fade>
          <div className={styles['product-list']}>
            {products.map((product) => (
              <Card
                key={product._id}
                product={product}
                addProduct={handleAddProduct}
              />
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}

Catalog.getInitialProps = async () => {
  const response = await fetch(`${process.env.API_URL}/products`);
  const productsFromServer = await response.json();

  return {
    namespacesRequired: ['common'],
    productsFromServer,
  };
};

export default withTranslation('common')(Catalog);
