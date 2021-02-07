import { FC } from 'react';
import styles from './styles.module.scss';

export const Main: FC = ({ children }) => {
  return <main className={styles.main}>{children}</main>;
};
