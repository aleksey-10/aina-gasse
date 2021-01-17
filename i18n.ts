import NextI18Next from 'next-i18next';
import path from 'path';

const localeSubpaths = {
  en: 'en',
  ru: 'ru',
  ua: 'ua',
};

const NextI18NextInstance = new NextI18Next({
  browserLanguageDetection: false,
  ns: ['common'],
  fallbackLng: 'ru',
  defaultLanguage: 'ru',
  otherLanguages: ['en', 'ua', 'ru'],
  localeSubpaths,
  localePath: path.resolve('./public/static/locales')
});

export const { appWithTranslation, useTranslation, withTranslation, Link, i18n} = NextI18NextInstance;
export default NextI18NextInstance;
