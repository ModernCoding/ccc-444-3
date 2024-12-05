export const handleText = screenProperties => {

  const screen = getWindowWidths (screenProperties.widths.main)


  document

    .querySelectorAll ([
        '#guest-tech-team-lead-in-modal h1',
        '#guest-tech-team-lead h1',
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
        '#guest-tech-team-lead-in-modal p, #guest-tech-team-lead-in-modal ul',
        '#guest-tech-team-lead p, #guest-tech-team-lead ul',
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