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

      locale.style.width = `${
        localeHeight * PHI ** +(
          getWindowWidths (window.innerWidth).isAtLeastSmMinus
        )
      }px`

    })


  document.querySelectorAll ('.o-locale-label').forEach (label => {
      label.style.fontSize = `${ fontSize }px`
    })


  ;(nav =>
      nav && (nav.style.gap = `${ localeHeight / PHI ** 2 }px`)
    ) (document.querySelector ('#__nuxt > header > nav:last-child'))


  ;(headerLeftModal =>
      headerLeftModal && headerLeftModal.removeAttribute ('style')
    ) (document.querySelector ('#header-left-modal'))


  ;(headerLeftModal => {

    if (!headerLeftModal) { return }


    const width = parseFloat (

        window
          .getComputedStyle (headerLeftModal)
          .getPropertyValue ('width')
          .split ('px')
          .join ('')

      ) - localeHeight * PHI

    headerLeftModal.style.width = `${ width }px`

  }) (

    document.querySelector (
      '#header-left-modal[data-number-of-parts="1"][data-is-shown="1"]'
    )

  )


  ;(locales => {

      if (!locales) { return }
      locales.style.gap = `${ localeHeight / PHI ** 2 }px`

      locales.querySelectorAll ('button').forEach (button =>
          button.style.gap
            = `${ localeHeight / PHI ** 3 }px ${ localeHeight / PHI }px`
        )

    }) (document.querySelector ('#locales'))


  ;(menu => {

      if (!menu) { return }
      menu.style.gap = `${ localeHeight / PHI ** 2 }px`

      menu.querySelectorAll ('a').forEach (a =>
          a.style.gap
            = `${ localeHeight / PHI ** 3 }px ${ localeHeight / PHI }px`
        )

      menu.querySelectorAll ('a > *').forEach (element =>
          element.style.fontSize = `${ fontSize }px`
        )

    }) (document.querySelector ('#menu'))

}) (document.querySelector ('#__nuxt > header'))