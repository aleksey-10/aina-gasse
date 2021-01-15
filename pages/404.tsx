import React from 'react';
//import { useTranslation } from 'react-i18next';
import { Fade } from 'react-reveal';
import Link from 'next/link';
import { Button } from '../components/Button';
import { Layout } from '../components/Layout';

export default () => {
  //const { t } = useTranslation();
  const t = data => data;
  return (
    <Layout title="Page not found">
      <section className="container section">
        <Fade>
          <h1>404</h1>
          <h3 style={{ marginBottom: 16 }}>{t('notFound.title')}</h3>
          <Link href="/">
            <Button type="link">
              {t('notFound.back')}
            </Button>
          </Link>
        </Fade>
      </section>
    </Layout>
  );
};
