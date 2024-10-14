export default () => (header => {

  if (!header) { return }
    

  const fontSize = (fontSize =>

      [ TWICE_54_BY_PHI_POWER_5, fontSize, TWICE_54_BY_PHI_POWER_3 ] [
        +(fontSize > TWICE_54_BY_PHI_POWER_5)
          + +(fontSize > TWICE_54_BY_PHI_POWER_3)
      ]

    ) (header.getBoundingClientRect ().height / PHI ** 3)


  ;(function _set (navs = header.querySelectorAll ('*'), i = 0) {

      if (i >= navs.length) { return }

      navs [ i ].style.fontSize = `${ fontSize }px`
      return _set (navs, ++i)

    }) ()


  const localeHeight = (lH =>

      [ TWICE_54_BY_PHI_POWER_4, lH, TWICE_54_BY_PHI_POWER_2 ] [
        +(lH > TWICE_54_BY_PHI_POWER_4)
          + +(lH > TWICE_54_BY_PHI_POWER_2)
      ]

    ) (header.getBoundingClientRect ().height / PHI)


  document.querySelectorAll ('.o-locale').forEach (locale => {
      locale.style.fontSize = `${ fontSize }px`
      locale.style.height = `${ localeHeight }px`
      locale.style.width = `${ localeHeight * PHI }px`
    })

  document.querySelectorAll ('.o-locale-label').forEach (label => {
      label.style.fontSize = `${ fontSize }px`
    })


  ;(locales => {

    if (!locales) { return }
    locales.style.gap = `${ localeHeight / PHI ** 2 }px`

    locales.querySelectorAll ('button').forEach (button => {
        button.style.gap = `${ localeHeight / PHI }px`
      })

  }) (document.querySelector ('#locales'))

}) (document.querySelector ('#__nuxt > header'))