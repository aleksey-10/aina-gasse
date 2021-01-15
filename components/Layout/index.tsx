import Head from 'next/head';
import { ReactNode } from 'react';
import { Header, Main, Footer } from "./components";
import styles from './styles.module.scss';

interface Props {
  children: ReactNode;
  title: string;
}

const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className={styles.layout}>
        <Header />
        <Main>
          {children}
        </Main>
        <Footer />
      </div>
    </>
  );
};

Layout.Header = Header;
Layout.Main = Main;
Layout.Footer = Footer;

export { Layout };
