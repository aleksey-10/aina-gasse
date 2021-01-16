import React, { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '../../../Button';
import { Menu } from './components/Menu';
import  Bag from '../../../../assets/icons/shopping-bag.svg';
import { Logo } from '../../../Logo';
import { Fade } from 'react-reveal';
//import { useTranslation } from 'react-i18next';
import styles from './styles.module.scss';
import { useSelector } from 'react-redux';
import RootState from '../../../../interfaces/RootState';

interface HeaderStyles {
  backgroundColor?: string;
  boxShadow?: string;
}

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerStyles, setHeaderStyles] = useState<HeaderStyles>({backgroundColor: 'transparent', boxShadow: 'none'});
  //const { t } = useTranslation();
  const isFirstLoadCompleted: boolean = useSelector((state: RootState) => state.Layout.isFirstLoadCompleted);
  const t = (data) => data;

  const handleScroll = useCallback(event => {
    const { scrollTop } = event.target;
    const hasInitialStyles = Boolean(Object.values(headerStyles).length);

    if ((scrollTop => 32 && hasInitialStyles) || (scrollTop < 32 && !hasInitialStyles)) {
      console.log('change');
      setHeaderStyles(scrollTop > 32
        ? {}
        : {backgroundColor: 'transparent', boxShadow: 'none'}
      );
    }
  }, [setHeaderStyles, headerStyles]);

  useEffect(() => {
    const root = document.getElementById('__next');

    root.addEventListener('scroll', handleScroll);

    return () => {
      root.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <Fade when={isFirstLoadCompleted}>
      <header className={styles.header} style={headerStyles}>
        <Menu visible={menuOpen} onClose={() => setMenuOpen(false)} />

        <div className={`container ${styles.content}`}>
          <Button
            className={`lnr lnr-menu ${styles.left}`}
            type="icon"
            onClick={() => setMenuOpen(true)}
          />
          <div className={styles.logo}>
            <Link href="/">
              <a><Logo /></a>
            </Link>
          </div>

          <div className={styles.right}>
            <Link href="/catalog">
              <a>
                <Button type="text" className={styles.catalog}>
                  {t('Catalog')}
                </Button>
              </a>
            </Link>

            <Link href="/cart">
              <a>
                <Button type="icon">
                  b
                  {/*<img src={Bag} />*/}
                </Button>
              </a>
            </Link>
          </div>
        </div>
      </header>
    </Fade>
  );
};
