import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Fade } from 'react-reveal';
import styles from './styles.module.scss';
//import { Loader } from '../Loader';

interface Props {
  loading?: boolean;
  onIntroEnd(): void;
}

export const Intro = ({ onIntroEnd }: Props) => {
  const introDuration = 4000;

  useEffect(() => {
    setTimeout(onIntroEnd, introDuration);
  })

  const titleProps = { big: true, cascade: true, duration: 1500, delay: 300 };

  return (
    <div className={styles.wrapper}>
      <div className={styles.intro}>
        <div className={styles.text}>
          <h1 className={styles.firstName}>
            <Fade {...titleProps} left ssrFadeout={false}>
              Aina
            </Fade>
          </h1>
          <h1 className={styles.lastName}>
            <Fade {...titleProps} right ssrFadeout={false}>
              Gass&#201;
            </Fade>
          </h1>
        </div>
        <div className={styles.description}>
          <Fade
            ssrFadeout={false}
            cascade
            duration={1500}
            bottom
          >
            Designer
          </Fade>
        </div>
      </div>
    </div>
  );
};

Intro.defaultProps = {
  loading: false,
};

Intro.propTypes = {
  onIntroEnd: PropTypes.func,
  loading: PropTypes.bool,
};
