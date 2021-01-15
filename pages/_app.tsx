import { useState } from 'react';
import { Intro } from '../components/Intro';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import config from 'react-reveal/globals';
import '../styles/styles.scss';

config({ ssrFadeout: true });

function App({ Component, pageProps }) {
  const [isIntroShown, setIntroShown] = useState<boolean>(false);

  return (
    <Provider store={store}>
      {!isIntroShown && <Intro onIntroEnd={() => setIntroShown(true)}/>}
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
