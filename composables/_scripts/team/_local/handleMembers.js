export const handleMembers = screenProperties => {

  const members = document.querySelector ('.o-members')
  if (!members) { return }

  members.removeAttribute ('style')


  members
    .querySelectorAll ('*')
    .forEach (e => e.removeAttribute ('style'))


  const layoutPaddingRight = (nuxt =>

      !nuxt ? 0 : parseInt (

          window
            .getComputedStyle (document.querySelector ('#__nuxt'))
            .getPropertyValue ('padding-right')
            .split ('px')
            .join ('')

        )

    ) (document.querySelector ('#__nuxt'))


  const screen = getWindowWidths (screenProperties.widths.main)


  members.querySelectorAll ('a figcaption > *').forEach (hx =>

      (size => hx.style.fontSize = `${ size }px`) (

        TWICE_54_BY_PHI_POWER_5
          * PHI ** (+screen.isAtLeastSmMinus + +screen.isAtLeastMdMinus)
      
      )

    )


  ;((p, ul) => {

      p && ul && (size => {

        p.style.fontSize = `${ size }px`
        p.style.paddingBottom = `${ size * PHI }px`
        ul.style.paddingBottom = `${ size * PHI ** 2 }px`

        ul
          .querySelectorAll ('li')
          .forEach (li => li.style.fontSize = `${ size }px`)

      }) (

        TWICE_54_BY_PHI_POWER_4
          * PHI ** (+screen.isAtLeastSmHalf + +screen.isAtLeastMdTwice)

      )

    }) (
      document.querySelector ('#team-girls p'),
      document.querySelector ('#team-girls ul')
    )

}