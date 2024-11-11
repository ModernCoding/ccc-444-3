import { de } from '@/_locales/de'
import { en } from '@/_locales/en'
import { fr } from '@/_locales/fr'
import { kh } from '@/_locales/kh'
import { my } from '@/_locales/my'
import { th } from '@/_locales/th'
import { vi } from '@/_locales/vi'


export default defineI18nConfig (() => ({
  legacy: false,
  locale: 'en',
  defaultLocale: 'en',
  fallbackLocale: 'en',
  messages: { de, en, fr, kh, my, th, vi }
}))