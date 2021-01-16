import App, { AppContext } from 'next/app';
import { store } from '../redux/store';
import { Provider } from 'react-redux';
import NextNProgress from 'nextjs-progressbar';
import config from 'react-reveal/globals';
import { appWithTranslation } from '../i18n';
import '../styles/styles.scss';

config({ ssrFadeout: true });

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <NextNProgress
        color="#c5abcc"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
      />

      <Component {...pageProps} />
    </Provider>
  );
}

MyApp.getInitialProps = async (appContext: AppContext) => ({ ...await App.getInitialProps(appContext) })

export default appWithTranslation(MyApp);
