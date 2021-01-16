import Head from 'next/head';
import { ReactNode, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RootState from '../../interfaces/RootState';
import { setFirstLoadComplete } from '../../redux/Layout/actions';
import { Intro } from '../Intro';
import { Header, Main, Footer } from "./components";
import styles from './styles.module.scss';

interface Props {
  children: ReactNode;
  title: string;
  metaTags?: ReactNode[];
}

const Layout = ({ children, title, metaTags }: Props) => {
  const dispatch = useDispatch();
  const isFirstLoadCompleted: boolean = useSelector((state: RootState) => state.Layout.isFirstLoadCompleted);

  const introHandler = useCallback(() => {
    dispatch(setFirstLoadComplete(true));
  }, []);

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className={styles.layout}>
        {!isFirstLoadCompleted && <Intro onIntroEnd={introHandler}/>}
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
