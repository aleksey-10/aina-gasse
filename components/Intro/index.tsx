import React, { useEffect } from 'react';
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
            <Fade {...titleProps} left ssrReveal>
              Aina
            </Fade>
          </h1>
          <h1 className={styles.lastName}>
            <Fade {...titleProps} right ssrReveal>
              Gass&#201;
            </Fade>
          </h1>
        </div>
        <div className={styles.description}>
          <Fade
            cascade
            duration={1500}
            bottom
            ssrReveal
          >
            Designer
          </Fade>
        </div>
      </div>
    </div>
  );
};
