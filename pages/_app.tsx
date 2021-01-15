import { useState } from 'react';
import { Intro } from '../components/Intro';
import '../styles/styles.scss';

function MyApp({ Component, pageProps }) {
  const [introShown, setIntroShown] = useState<boolean>(false);

  if (!introShown) {
    return (
      <Intro  onIntroEnd={() => {
        setIntroShown(true);
      }} />
    );
  }

  return <Component {...pageProps} />;
}

export default MyApp;
