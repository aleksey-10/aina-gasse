const { nextI18NextRewrites } = require('next-i18next/rewrites');;

const localeSubpaths = {
  en: 'en',
  ru: 'ru',
  ua: 'ua',
};

module.exports = {
  //i18n: {
  //  locales: ['en-US', 'ru', 'ua'],
  //  defaultLocale: 'ru',
  //},
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: { localeSubpaths },
}
