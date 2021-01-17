import { ReactNode } from 'react';
import classnames from 'classnames';
import styles from './styles.module.scss';

const TYPES = ['default', 'primary', 'icon', 'link', 'text'];

interface Props {
  children?: ReactNode;
  onClick?(): void;
  type?: string;
  className?: string;
  isActive?: boolean;
};

export const Button = ({ children, onClick, type = 'default', className = '', isActive = false }: Props) => {
  const classNames = classnames({
    [styles.button]: true,
    [styles[`button--${type}`]]: TYPES.some(typeName => typeName === type),
    [className]: className,
    [styles.active]: isActive,
  });

  return (
    <button onClick={onClick} className={classNames}>
      {children}
    </button>
  );
};
