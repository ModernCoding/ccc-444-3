export const handleText = screenProperties => {

  const screen = getWindowWidths (screenProperties.widths.main)


  document

    .querySelectorAll ([
        '.o-expertise-skill-in-modal h1',
        '.o-expertise-skill-in-main h1',
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
        '.o-expertise-skill-in-modal p, .o-expertise-skill-in-modal ul',
        '.o-expertise-skill-in-main p, .o-expertise-skill-in-main ul',
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