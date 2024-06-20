/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useTranslation } from "react-i18next";
import { LocalStorage } from "@localStorage/localStorage";
import { LocalStorageKey } from "@enums/localStorage";
import i18n from "../../../i18n";
import styles from "./LanguageSelector.module.scss";

interface Text {
  isText: boolean;
}

export const LanguageSelector = ({ isText }: Text) => {
  const { t } = useTranslation();
  const lang = LocalStorage.getItem(LocalStorageKey.Lang) ?? "ru";

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    LocalStorage.setItem(LocalStorageKey.Lang, language);
    window.location.reload();
  };

  const getSpanStyles = (language: string) => {
    return language === lang
      ? `${styles.blockLangActive}`
      : `${styles.blockLang}`;
  };

  return (
    <div className={styles.language}>
      {isText && <span className={styles.lang}>{t("language")}</span>}
      <div className={styles.list}>
        <span
          className={getSpanStyles("ky")}
          onClick={() => changeLanguage("ky")}
        >
          KG
        </span>
        <span
          className={getSpanStyles("ru")}
          onClick={() => changeLanguage("ru")}
        >
          RU
        </span>
        <span
          className={getSpanStyles("en")}
          onClick={() => changeLanguage("en")}
        >
          EN
        </span>
      </div>
    </div>
  );
};
