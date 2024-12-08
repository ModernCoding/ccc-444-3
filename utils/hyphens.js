import * as moduleDe from 'hyphen/de'
import * as moduleEn from 'hyphen/en'
import * as moduleFr from 'hyphen/fr'


export const hyphenate = (sentence, locale) => {

  if (![ 'de', 'en', 'fr' ].includes (locale)) { return sentence }

  const _hyphenate = {
      de: moduleDe.hyphenateSync,
      en: moduleEn.hyphenateSync,
      fr: moduleFr.hyphenateSync
    } [ locale ]


  if (!_hyphenate) { return sentence }
  return _hyphenate (sentence)

}