import { ReactNode } from 'react';
import styles from './styles.module.scss';

interface Props {
  children: ReactNode;
}

export const ModalBody = ({ children }: Props) => (
  <div className={styles.body}>{children}</div>
);
