export const handleText = screenProperties => {

  const screen = getWindowWidths (screenProperties.widths.main)


  const titleSize = TWICE_54_BY_PHI_POWER_4
      * PHI ** (+screen.isAtLeastSmHalf + +screen.isAtLeastLgHalf)


  document

    .querySelectorAll ([
        '.o-philosophy-in-modal h1',
        '.o-philosophy-in-main h1',
      ] [ +(screenProperties.ratioIndex > 1) ])


    .forEach (h1 => {
      
        h1.removeAttribute ('style')

        const divs = h1.querySelectorAll ('div')
        divs.forEach (div => div.removeAttribute ('style'))

        h1.style.fontSize = `${ titleSize }px`
        divs.forEach (div => div.style.fontSize = `${ titleSize }px`)
      
      })


  document

    .querySelectorAll ([
        '.o-philosophy-in-modal h2',
        '.o-philosophy-in-main h2',
      ] [ +(screenProperties.ratioIndex > 1) ])


    .forEach (h2 => {
      
        h2.removeAttribute ('style')

        const spans = h2.querySelectorAll ('span')
        spans.forEach (span => span.removeAttribute ('style'))


        h2.style.fontSize = `${ titleSize / PHI }px`

        spans.forEach (span =>
            span.style.fontSize = `${ titleSize / PHI }px`
          )
      
      })


  const textSize
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
          .forEach (e => e.style.fontSize = `${ textSize }px`)
      
      })


  document
    .querySelectorAll ('.o-external-link')
    .forEach (a => a.style.gap = `${ textSize * PHI }px`)

}