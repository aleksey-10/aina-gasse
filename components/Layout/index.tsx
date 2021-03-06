import Head from 'next/head';
import { useRouter } from 'next/router';
import { ReactNode, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RootState from '../../interfaces/RootState';
import {
  setFirstLoadComplete,
  setPageLoading,
} from '../../redux/Layout/actions';
import { Intro } from '../Intro';
import { Header, Main, Footer, Empty } from './components';
import styles from './styles.module.scss';

interface Props {
  children: ReactNode;
  title: string;
  metaTags?: ReactNode[];
}

const Layout = ({ children, title, metaTags }: Props) => {
  const dispatch = useDispatch();
  const isFirstLoadCompleted = useSelector<RootState, boolean>(
    (state) => state.Layout.isFirstLoadCompleted,
  );
  const router = useRouter();

  const routeChangeStart = () => {
    dispatch(setPageLoading(true));
  };

  const routeChangeComplete = () => {
    dispatch(setPageLoading(false));
  };

  useEffect(() => {
    router.events.on('routeChangeStart', routeChangeStart);
    router.events.on('routeChangeComplete', routeChangeComplete);

    return () => {
      router.events.off('routeChangeStart', routeChangeStart);
      router.events.off('routeChangeComplete', routeChangeComplete);
    };
  });

  const introHandler = useCallback(() => {
    dispatch(setFirstLoadComplete(true));
  }, [dispatch]);

  return (
    <>
      <Head>
        <title>{title}</title>
        {metaTags}
      </Head>
      <div className={styles.layout}>
        {!isFirstLoadCompleted && <Intro onIntroEnd={introHandler} />}
        <Header />
        <Main>{children}</Main>
        <Footer />
      </div>
    </>
  );
};

Layout.Header = Header;
Layout.Main = Main;
Layout.Footer = Footer;
Layout.Empty = Empty;

export { Layout };
