import { store } from '../redux/store';
import { Provider } from 'react-redux';
import NextNProgress from 'nextjs-progressbar';
import config from 'react-reveal/globals';
import '../styles/styles.scss';

config({ ssrFadeout: true });

export default function App({ Component, pageProps }) {
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
