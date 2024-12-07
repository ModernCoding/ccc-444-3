export const handleText = screenProperties => {

  const screen = getWindowWidths (screenProperties.widths.main)


  document

    .querySelectorAll ([
        '.o-philosophy-in-modal h1',
        '.o-philosophy-in-main h1',
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


  const fontSize
    = TWICE_54_BY_PHI_POWER_4 * PHI ** (+screen.isAtLeastMdPlus)


  document

    .querySelectorAll ([

        `
          .o-philosophy-in-modal p,
          .o-philosophy-in-modal ul
        `,

        `
          .o-philosophy-in-main p,
          .o-philosophy-in-main ul
        `

      ] [ +(screenProperties.ratioIndex > 1) ])


    .forEach (p => {
      
        p.removeAttribute ('style')

        p
          .querySelectorAll ('*')
          .forEach (e => e.style.fontSize = `${ fontSize }px`)
      
      })


  document
    .querySelectorAll ('.o-external-link')
    .forEach (a => a.style.gap = `${ fontSize * PHI }px`)

}