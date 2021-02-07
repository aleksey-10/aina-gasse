//import { Fade } from 'react-reveal';
import { useMenu } from '../../../../hooks/menu.hooks';
import { Link } from '../../../../i18n';
import styles from './styles.module.scss';

export const Footer = () => {
  const menu = useMenu();

  return (
    //<Fade bottom>
    <footer className={styles.footer}>
      <ul className={`${styles.list} container`}>
        {menu.map(({ label, path }) => (
          <li key={path}>
            <Link href={path}>
              <a className={styles.label}>{label}</a>
            </Link>
          </li>
        ))}
      </ul>
    </footer>
    //</Fade>
  );
};
