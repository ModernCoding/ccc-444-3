import { de } from '@/_locales/de'
import { en } from '@/_locales/en'
// import { fr } from '@/_locales/fr'
// import { my } from '@/_locales/my'
// import { th } from '@/_locales/th'


export default defineI18nConfig (() => ({
  legacy: false,
  locale: 'en',
  defaultLocale: 'en',
  fallbackLocale: 'en',
  // messages: { de, en, fr, my, th }
  messages: { de, en }
}))