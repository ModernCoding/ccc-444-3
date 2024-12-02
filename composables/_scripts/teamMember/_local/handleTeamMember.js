export const handleTeamMember = screenProperties => {

  const screen = getWindowWidths (screenProperties.widths.main)


  document

    .querySelectorAll ([
        '.o-team-member-in-modal h1',
        '.o-team-member h1',
      ] [ +(screenProperties.ratioIndex > 1) ])


    .forEach (h1 => {
      
        h1.removeAttribute ('style')

        const spans = h1.querySelectorAll ('span')
        spans.forEach (span => span.removeAttribute ('style'))


        ;(size => {
        
          h1.style.fontSize = `${ size }px`
          spans.forEach (span => span.style.fontSize = `${ size }px`)

        }) (
          TWICE_54_BY_PHI_POWER_4
            * PHI ** (+screen.isAtLeastSmHalf + +screen.isAtLeastLgHalf)
        )
      
      })


  document

    .querySelectorAll ([
        '.o-team-member-in-modal h2',
        '.o-team-member h2',
      ] [ +(screenProperties.ratioIndex > 1) ])


    .forEach (h2 => {
      
        h2.removeAttribute ('style')

        ;(size => h2.style.fontSize = `${ size }px`) (
          TWICE_54_BY_PHI_POWER_5
            * PHI ** (+screen.isAtLeastSmHalf + +screen.isAtLeastLgHalf)
        )
      
      })


  document

    .querySelectorAll ([
        '.o-team-member-in-modal p, .o-team-member-in-modal ul',
        '.o-team-member p, .o-team-member ul',
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