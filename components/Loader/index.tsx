import React from 'react';
import styles from './styles.module.scss';
import { useSize } from '../../hooks/size.hooks';

interface Props {
  size?: string;
}

export const Loader = ({ size = '' }: Props) => {
  const fontSize = useSize(size, { sm: 22, md: 36, lg: 72 });

  return (
    <div className={styles.wrapper}>
      <div className={styles.loader} style={{ fontSize }}>
        {/* <div className={styles.line} /> */}
      </div>
    </div>
  );
};
