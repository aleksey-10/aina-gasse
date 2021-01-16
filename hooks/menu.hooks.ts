import { useMemo } from "react";
import { useTranslation } from "../i18n";
//import { useTranslation } from "react-i18next";
import { MENU } from "../utils/Menu";

export const useMenu = () => {
  const { t } = useTranslation();

  const menu = useMemo(() => {
    return MENU.map((key: string) => ({
      key,
      label: t(key),
      get path() {
        return `/${key.toLowerCase()}`;
      },
    }))
  }, [t]);

  return menu;
};
