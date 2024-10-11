export default () => (footer => {

  if (!footer) { return }


  const footerHeight = footer.getBoundingClientRect ().height


  const fontSize = (fontSize =>

      [ TWICE_54_BY_PHI_POWER_4, fontSize ] [
        +(fontSize > TWICE_54_BY_PHI_POWER_4)
      ]

    ) (footerHeight / PHI ** 2)


  ;(function _set (navs = footer.querySelectorAll ('nav'), i = 0) {

    if (i >= navs.length) { return }

    const subNavs = navs [ i ].querySelectorAll ('*')
    if (subNavs.length < 1) { return _set (navs, ++i) }


    subNavs
      .forEach (subNav => subNav.style.fontSize = `${ fontSize }px`)


    ;(function _subSet (size = fontSize) {

        switch (true) {
          
          case  size <= TWICE_54_BY_PHI_POWER_4:

          case  navs [ i ].getBoundingClientRect ().height
                  < footerHeight:

            return


          default:

            subNavs.forEach (subNav =>
                subNav.style.fontSize = `${ size / PHI }px`
              )

            return _subSet (size / PHI)

        }

      }) ()


    return _set (navs, ++i)

  }) ()

}) (document.querySelector ('#__nuxt > footer'))