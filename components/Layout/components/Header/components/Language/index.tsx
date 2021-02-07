import { I18nContext } from 'next-i18next';
import React, { useCallback, useContext } from 'react';
//import { useTranslation } from 'react-i18next';
import { LANGUAGES } from '../../../../../../utils/Menu';
import { Button } from '../../../../../Button';
import styles from './styles.module.scss';

export const Language = ({ onChange }) => {
  const { i18n } = useContext(I18nContext);

  const handleChangeLanguage = useCallback(
    (key) => {
      i18n.changeLanguage(key);
      onChange();
    },
    [i18n, onChange],
  );

  return (
    <ul className={styles.list}>
      {LANGUAGES.map((key) => (
        <li key={key} className={styles.item}>
          <Button
            className={styles.button}
            type="icon"
            onClick={() => handleChangeLanguage(key)}
            isActive={i18n.language === key}
          >
            {key}
          </Button>
        </li>
      ))}
    </ul>
  );
};
