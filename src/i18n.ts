import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import XHR from "i18next-xhr-backend";
import { LocalStorage } from "./localStorage";
import { LocalStorageKey } from "./enums";

i18n
  .use(XHR)
  .use(initReactI18next)
  .init({
    fallbackLng: LocalStorage.getItem(LocalStorageKey.Lang) || "ru",
    debug: true,
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
    interpolation: {
      escapeValue: false,
    },
    supportedLngs: ["en", "ru", "ky"],
  });

export default i18n;
