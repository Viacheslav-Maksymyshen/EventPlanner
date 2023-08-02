import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./locales/en.json";
import uaTranslation from "./locales/ua.json";

const resources = {
  en: {
    translation: enTranslation,
  },
  ua: {
    translation: uaTranslation,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("language") || "en", // Використовуємо збережену мову з localStorage або встановлюємо мову за замовчуванням ("en")
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
