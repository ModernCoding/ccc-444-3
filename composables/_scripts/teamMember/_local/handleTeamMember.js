export const handleTeamMember = screenProperties => {

  const screen = getWindowWidths (screenProperties.widths.main)


  document

    .querySelectorAll ([
        '.o-team-member-in-modal h1',
        '.o-team-member h1',
      ] [ +(screenProperties.ratioIndex > 1) ])


    .forEach (h1 => {
      
        h1.removeAttribute ('style')

        ;(size => h1.style.fontSize = `${ size }px`) (
          TWICE_54_BY_PHI_POWER_4
            * PHI ** (+screen.isAtLeastSmHalf + +screen.isAtLeastLgHalf)
        )
      
      })


  document

    .querySelectorAll ([
        '.o-team-member-in-modal p',
        '.o-team-member p',
      ] [ +(screenProperties.ratioIndex > 1) ])


    .forEach (p => {
      
        p.removeAttribute ('style')

        ;(size =>
            p
              .querySelectorAll ('*')
              .forEach (e => e.style.fontSize = `${ size }px`)
          ) (
            TWICE_54_BY_PHI_POWER_4 * PHI ** (+screen.isAtLeastMdPlus)
          )
      
      })

}