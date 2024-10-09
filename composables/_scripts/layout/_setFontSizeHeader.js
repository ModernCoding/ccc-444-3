export default () => (header => {

  if (!header) { return }
    

  const fontSize = (fontSize =>

      [ TWICE_54_BY_PHI_POWER_5, fontSize, TWICE_54_BY_PHI_POWER_3 ] [
        +(fontSize > TWICE_54_BY_PHI_POWER_5)
          + +(fontSize > TWICE_54_BY_PHI_POWER_3)
      ]

    ) (header.getBoundingClientRect ().height / PHI ** 2)


  ;(function _set (navs = header.querySelectorAll ('*'), i = 0) {

    if (i >= navs.length) { return }

    navs [ i ].style.fontSize = `${ fontSize }px`
    return _set (navs, ++i)

  }) ()

}) (document.querySelector ('#__nuxt > header'))