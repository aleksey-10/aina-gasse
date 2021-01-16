import { ReactNode } from "react";
import { Layout } from "../components/Layout";
import { withTranslation } from "../i18n";

interface Props {
  t(s: string): ReactNode;
}

function Catalog({ t }: Props) {
  return (
    <Layout title={t('Catalog').toString()}>
      <h1>{t('Catalog')}</h1>
    </Layout>
  );
};

Catalog.getInitialProps = async () => ({
  namespacesRequired: ['common', 'footer'],
});

export default withTranslation('common')(Catalog);
