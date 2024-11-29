import { hyphenateSync as hyphenateDe } from "hyphen/de"
import { hyphenateSync as hyphenateEn } from "hyphen/en"
import { hyphenateSync as hyphenateFr } from "hyphen/fr"


export const hyphenate = (sentence, locale) =>

  ![ 'de', 'en', 'fr' ].includes (locale) ? sentence : {
      de: hyphenateDe,
      en: hyphenateEn,
      fr: hyphenateFr
    } [ locale ] (sentence)