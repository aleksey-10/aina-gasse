import { useMemo } from "react";
//import { useTranslation } from "react-i18next";
import { MENU } from "../utils/Menu";

export const useMenu = () => {
  //const { t } = useTranslation();
const t = (data) => data;
  const menu = useMemo(() => {
    //const hash = t('menu', { returnObjects: true });

    return MENU.map(key => ({
      key,
      label: t(key),
      get path() {
        return '/' + this.key;
      },
    }))
  }, [t]);

  return menu;
};
