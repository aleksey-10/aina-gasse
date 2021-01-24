import { ReactNode } from 'react';
import classnames from 'classnames';
import styles from './styles.module.scss';

interface Props {
  children: ReactNode;
  align?: string;
}

export const ModalHeader = ({ children, align }: Props) => {
  const classNames = classnames({
    [styles.header]: true,
    [styles[align]]: align,
  });

  return (
    <header className={classNames}>
      <h3>{children}</h3>
    </header>
  );
};
