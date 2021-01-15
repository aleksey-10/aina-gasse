import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Button } from '../../../../../Button';
import { Language } from '../Language';
import { useMenu } from '../../../../../../hooks/menu.hooks';
import styles from './styles.module.scss';

interface Props {
  visible: boolean;
  onClose(): void;
}

export const Menu = ({ visible, onClose }: Props) => {
  const [width, setWidth] = useState<number | string>(0);
  const menu = useMenu();

  useEffect(() => {
    if (visible) {
      setWidth('100%');
    }
  }, [visible, setWidth]);

  const handleTransitionEnd = useCallback(() => {
    if (!visible) {
      setWidth(0);
    }
  }, [visible]);

  return (
    <div
      className={styles.mask}
      onClick={onClose}
      style={{ opacity: Math.sign(Number(visible)), width }}
      onTransitionEnd={handleTransitionEnd}
    >
      <nav
        className={styles.nav}
        style={{ transform: `translateX(${visible ? 0 : '-100%'})` }}
        onClick={event => event.stopPropagation()}
      >
        <Button
          type="icon"
          className={styles.times}
          onClick={onClose}
        >
          &times;
        </Button>
        <ul className={styles.list}>
          {menu.map(({ label, path }) => (
            <li key={path}>
              <Link href={path}>
                <a onClick={onClose}>
                  <Button type="link" className={styles.link}>
                    {label}
                  </Button>
                </a>
              </Link>
            </li>
          ))}
        </ul>

        <Language onChange={onClose} />

        <a href="mailto:gassefashionhouse@gmail.com">
          <Button type="text" className={styles.email}>gassefashionhouse@gmail.com</Button>
        </a>
      </nav>
    </div>
  );
};

Menu.propTypes = {
  visible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
