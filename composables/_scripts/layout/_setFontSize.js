export default () => {

  (header => {

    if (!header) { return }

    const fontSize = (fontSize =>

      [ TWICE_54_BY_PHI_POWER_5, fontSize, TWICE_54_BY_PHI_POWER_3 ] [
        +(fontSize > TWICE_54_BY_PHI_POWER_5)
          + +(fontSize > TWICE_54_BY_PHI_POWER_3)
      ]

    ) (header.getBoundingClientRect ().height / PHI ** 2)


    header.querySelectorAll ('nav').forEach (nav =>
      nav.style.fontSize = `${ fontSize }px`
    )

  }) (document.querySelector ('#__nuxt > header'))


  ;(footer => {

    if (!footer) { return }

    const fontSize = (fontSize =>

      [ TWICE_54_BY_PHI_POWER_4, fontSize, TWICE_54_BY_PHI_POWER_2 ] [
        +(fontSize > TWICE_54_BY_PHI_POWER_4)
          + +(fontSize > TWICE_54_BY_PHI_POWER_2)
      ]

    ) (footer.getBoundingClientRect ().height / PHI ** 2)


    footer.querySelectorAll ('*').forEach (nav =>
      nav.style.fontSize = `${ fontSize }px`
    )

  }) (document.querySelector ('#__nuxt > footer'))

}