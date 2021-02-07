import { ReactNode } from 'react';
import classnames from 'classnames';
import styles from './styles.module.scss';

interface Props {
  children: ReactNode;
  align?: string;
}

export const ModalFooter = ({ children, align }: Props) => {
  const classNames = classnames({
    [styles.footer]: true,
    [styles[align]]: align,
  });

  return <footer className={classNames}>{children}</footer>;
};
