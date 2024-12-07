import * as moduleDe from 'hyphen/de'
import * as moduleEn from 'hyphen/en'
import * as moduleFr from 'hyphen/fr'


export const hyphenate = (sentence, locale) =>

  ![ 'de', 'en', 'fr' ].includes (locale) ? sentence : {
      de: moduleDe.hyphenateSync,
      en: moduleEn.hyphenateSync,
      fr: moduleFr.hyphenateSync
    } [ locale ] (sentence)