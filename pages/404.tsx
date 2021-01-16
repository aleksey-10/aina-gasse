import React, { ReactNode } from 'react';
import { Fade } from 'react-reveal';
import Link from 'next/link';
import { Button } from '../components/Button';
import { Layout } from '../components/Layout';
import { withTranslation } from '../i18n';

interface Props {
  t(str: string): ReactNode;
}

function NotFound({ t }: Props) {
  return (
    <Layout title={t('Page not found').toString()}>
      <section className="container section">
        <Fade>
          <h1>404</h1>
          <h3 style={{ marginBottom: 16 }}>{t('Page not found')}</h3>
          <Link href="/">
            <a>
              <Button type="link">
                {t('Turn back to the main page')}
              </Button>
            </a>
          </Link>
        </Fade>
      </section>
    </Layout>
  );
};

export default withTranslation('common')(NotFound);
