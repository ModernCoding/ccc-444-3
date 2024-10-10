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


  ;(lang => {

      const langHeight = (lH =>

          [ TWICE_54_BY_PHI_POWER_4, lH, TWICE_54_BY_PHI_POWER_2 ] [
            +(lH > TWICE_54_BY_PHI_POWER_4)
              + +(lH > TWICE_54_BY_PHI_POWER_2)
          ]

        ) (header.getBoundingClientRect ().height / PHI)


      lang.style.height = `${ langHeight }px`
      lang.style.width = `${ langHeight * PHI }px`

    }) (header.querySelector ('.o-lang'))

}) (document.querySelector ('#__nuxt > header'))