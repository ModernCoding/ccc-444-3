/*
  XS, 0
  
  SM_HALF, 299.434588481236
  SM_MINUS, 343.121506177483
  SM, 370.121506177483
  SM_PLUS, 399.246117974981
  SM_TWICE, 457.495341569977
  
  MD_HALF, 484.495341569977
  MD_MINUS, 555.182259266225
  MD, 598.869176962472
  MD_PLUS, 645.99378875997
  MD_TWICE, 740.243012354966

  LG_HALF, 783.929930051213
  LG_MINUS, 898.303765443708
  LG, 968.990683139955
  LG_PLUS, 1045.23990673495
  LG_TWICE, 1197.73835392494

  XL_HALF, 1268.42527162119
  XL_MINUS, 1453.48602470993
  XL, 1567.85986010243
  XL_PLUS, 1691.23369549492
  XL_TWICE, 1937.98136627991

  XXL_HALF, 2052.35520167246
  XXL_MINUS, 2351.78979015369
  XXL, 2536.85054324244
  XXL_PLUS, 2736.47360222994
  XXL_TWICE, 3135.71972020492
*/

  
const XS = 0

const SM_HALF = ONCE_54_BY_PHI_POWER_MINUS_4 * PHI / 2
const SM_MINUS = ONCE_54_BY_PHI_POWER_MINUS_4 / PHI * 3 / 2
const SM = ONCE_54_BY_PHI_POWER_MINUS_4
const SM_PLUS = ONCE_54_BY_PHI_POWER_MINUS_4 * PHI * 2 / 3
const SM_TWICE = TWICE_54_BY_PHI_POWER_MINUS_3

const MD_HALF = ONCE_54_BY_PHI_POWER_MINUS_5 * PHI / 2
const MD_MINUS = ONCE_54_BY_PHI_POWER_MINUS_5 / PHI * 3 / 2
const MD = ONCE_54_BY_PHI_POWER_MINUS_5
const MD_PLUS = ONCE_54_BY_PHI_POWER_MINUS_5 * PHI * 2 / 3
const MD_TWICE = TWICE_54_BY_PHI_POWER_MINUS_4

const LG_HALF = ONCE_54_BY_PHI_POWER_MINUS_6 * PHI / 2
const LG_MINUS = ONCE_54_BY_PHI_POWER_MINUS_6 / PHI * 3 / 2
const LG = ONCE_54_BY_PHI_POWER_MINUS_6
const LG_PLUS = ONCE_54_BY_PHI_POWER_MINUS_6 * PHI * 2 / 3
const LG_TWICE = TWICE_54_BY_PHI_POWER_MINUS_5

const XL_HALF = ONCE_54_BY_PHI_POWER_MINUS_7 * PHI / 2
const XL_MINUS = ONCE_54_BY_PHI_POWER_MINUS_7 / PHI * 3 / 2
const XL = ONCE_54_BY_PHI_POWER_MINUS_7
const XL_PLUS = ONCE_54_BY_PHI_POWER_MINUS_7 * PHI * 2 / 3
const XL_TWICE = TWICE_54_BY_PHI_POWER_MINUS_6

const XXL_HALF = ONCE_54_BY_PHI_POWER_MINUS_8 * PHI / 2
const XXL_MINUS = ONCE_54_BY_PHI_POWER_MINUS_8 / PHI * 3 / 2
const XXL = ONCE_54_BY_PHI_POWER_MINUS_8
const XXL_PLUS = ONCE_54_BY_PHI_POWER_MINUS_8 * PHI * 2 / 3
const XXL_TWICE = TWICE_54_BY_PHI_POWER_MINUS_7


const SCREEN_SIZES = [

  XS,

  SM_HALF,
  SM_MINUS,
  SM,
  SM_PLUS,
  SM_TWICE,

  MD_HALF,
  MD_MINUS,
  MD,
  MD_PLUS,
  MD_TWICE,

  LG_HALF,
  LG_MINUS,
  LG,
  LG_PLUS,
  LG_TWICE,

  XL_HALF,
  XL_MINUS,
  XL,
  XL_PLUS,
  XL_TWICE,

  XXL_HALF,
  XXL_MINUS,
  XXL,
  XXL_PLUS,
  XXL_TWICE

]


export const getWindowWidths = width => {

  const gridIndex = (function _get (i = SCREEN_SIZES.length - 1) {
      return i < 1 || width >= SCREEN_SIZES [ i ] ? i : _get (--i)
    }) ()


  return {

    isAtLeastXs: gridIndex >= 0,

    isAtLeastSmHalf: gridIndex >= 1,
    isAtLeastSmMinus: gridIndex >= 2,
    isAtLeastSm: gridIndex >= 3,
    isAtLeastSmPlus: gridIndex >= 4,
    isAtLeastSmTwice: gridIndex >= 5,

    isAtLeastMdHalf: gridIndex >= 6,
    isAtLeastMdMinus: gridIndex >= 7,
    isAtLeastMd: gridIndex >= 8,
    isAtLeastMdPlus: gridIndex >= 9,
    isAtLeastMdTwice: gridIndex >= 10,

    isAtLeastLgHalf: gridIndex >= 11,
    isAtLeastLgMinus: gridIndex >= 12,
    isAtLeastLg: gridIndex >= 13,
    isAtLeastLgPlus: gridIndex >= 14,
    isAtLeastLgTwice: gridIndex >= 15,

    isAtLeastXlHalf: gridIndex >= 16,
    isAtLeastXlMinus: gridIndex >= 17,
    isAtLeastXl: gridIndex >= 18,
    isAtLeastXlPlus: gridIndex >= 19,
    isAtLeastXlTwice: gridIndex >= 20,

    isAtLeastXxlHalf: gridIndex >= 21,
    isAtLeastXxlMinus: gridIndex >= 22,
    isAtLeastXxl: gridIndex >= 23,
    isAtLeastXxlPlus: gridIndex >= 24,
    isAtLeastXxlTwice: gridIndex >= 25

  }

}