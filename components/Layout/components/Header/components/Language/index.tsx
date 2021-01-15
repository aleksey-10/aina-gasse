import React, { useCallback } from 'react';
//import { useTranslation } from 'react-i18next';
import { LANGUAGES } from '../../../../../../utils/Menu';
import { Button } from '../../../../../Button';
import styles from './styles.module.scss';

export const Language = ({ onChange }) => {
  //const { i18n } = useTranslation();
const i18n = {language: 'translation'};
  const handleChangeLanguage = useCallback((key) => {
    //i18n.changeLanguage(key);
    onChange();
    console.log(i18n);
  }, [i18n, onChange]);

  return (
    <ul className={styles.list}>
      {LANGUAGES.map(key => (
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
  )
};
