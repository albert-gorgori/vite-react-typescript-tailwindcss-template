import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import es from './locales/es/es.json';
import en from './locales/en/en.json';

const resources = {
  en: {
    translation: en
  },
  es: {
    translation: es
  }
}


i18next.use(initReactI18next).init({resources, lng:"es"})

export default i18next