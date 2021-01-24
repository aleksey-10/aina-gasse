import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Button } from '../../../Button';
import { Menu } from './components/Menu';
// import  Bag from '../../../../assets/icons/shopping-bag.svg';
import { Logo } from '../../../Logo';
import { Fade } from 'react-reveal';
import styles from './styles.module.scss';
import { useSelector } from 'react-redux';
import RootState, { LayoutState } from '../../../../interfaces/RootState';
import { I18nContext } from 'next-i18next';
import { useCatalog } from '../../../../hooks/catalog.hooks';
import { Link } from '../../../../i18n';

interface HeaderStyles {
  backgroundColor?: string;
  boxShadow?: string;
}

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerStyles, setHeaderStyles] = useState<HeaderStyles>({backgroundColor: 'transparent', boxShadow: 'none'});
  const { i18n } = useContext(I18nContext);
  const { isPageLoading, isFirstLoadCompleted } = useSelector<RootState, LayoutState>(state => state.Layout);
  const { loadCart, cartProductsCount } = useCatalog();

  useEffect(() => {
    if (!isFirstLoadCompleted) {
      loadCart();
    }
  }, [isFirstLoadCompleted]);

  const handleScroll = useCallback((event) => {
    const { scrollTop } = event.target;
    const hasInitialStyles = Boolean(Object.values(headerStyles).length);

    if ((scrollTop => 32 && hasInitialStyles) || (scrollTop < 32 && !hasInitialStyles)) {
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
    <Fade when={!isPageLoading}>
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
                  {i18n.t('Catalog')}
                </Button>
              </a>
            </Link>

            <Link href="/checkout">
              <a className={styles.cart}>
                <Button type="icon" className={`lnr lnr-cart ${styles['cart-button']}`} />
                {Boolean(cartProductsCount) && (
                  <div className={styles['cart-count']}>{cartProductsCount}</div>
                )}
              </a>
            </Link>
          </div>
        </div>
      </header>
    </Fade>
  );
};
