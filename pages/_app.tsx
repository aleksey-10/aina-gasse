import App, { AppContext } from 'next/app';
import { store } from '../redux/store';
import { Provider } from 'react-redux';
import config from 'react-reveal/globals';
import { appWithTranslation } from '../i18n';
import { PageLoader } from '../components/PageLoader';
import '../styles/styles.scss';

config({ ssrFadeout: true });

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PageLoader />
      <Component {...pageProps} />
    </Provider>
  );
}

MyApp.getInitialProps = async (appContext: AppContext) => ({
  ...(await App.getInitialProps(appContext)),
});

export default appWithTranslation(MyApp);
