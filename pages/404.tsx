import React, { ReactNode } from 'react';
import { Layout } from '../components/Layout';
import { withTranslation } from '../i18n';

interface Props {
  t(str: string): ReactNode;
}

function NotFound({ t }: Props) {
  return (
    <Layout title={t('Page not found').toString()}>
      <Layout.Empty
        title="404"
        description={t('Page not found').toString()}
        button={{ text: t('Turn back to the main page').toString(), link: '/'}}
      />
    </Layout>
  );
};

export default withTranslation('common')(NotFound);
