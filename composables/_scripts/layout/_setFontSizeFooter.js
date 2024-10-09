export default () => (footer => {

  if (!footer) { return }


  const fontSize = (fontSize =>

      [ TWICE_54_BY_PHI_POWER_4, fontSize, TWICE_54_BY_PHI_POWER_2 ] [
        +(fontSize > TWICE_54_BY_PHI_POWER_4)
          + +(fontSize > TWICE_54_BY_PHI_POWER_2)
      ]

    ) (footer.getBoundingClientRect ().height / PHI ** 2)


  ;(function _set (navs = footer.querySelectorAll ('*'), i = 0) {

    if (i >= navs.length) { return }

    navs [ i ].style.fontSize = `${ fontSize }px`
    return _set (navs, ++i)

  }) ()

}) (document.querySelector ('#__nuxt > footer'))