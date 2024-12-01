export const handleExpertise = screenProperties => {

  const screen = getWindowWidths (screenProperties.widths.main)

  const fontSize = TWICE_54_BY_PHI_POWER_5 * PHI ** (
      +screen.isAtLeastSmHalf + +screen.isAtLeastLgHalf
    )


  document

    .querySelectorAll ([
        '.o-expertise-in-modal .o-expertise-text h1',
        '#our-expertise .o-expertise-text h1',
      ] [ +(screenProperties.ratioIndex > 1) ])

    .forEach (h1 => {
        h1.removeAttribute ('style')
        h1.style.fontSize = `${ fontSize * PHI }px`
      })


  document

    .querySelectorAll ([
        '.o-expertise-in-modal .o-expertise-know-how',
        '#our-expertise .o-expertise-know-how',
      ] [ +(screenProperties.ratioIndex > 1) ])


    .forEach (knowHow => {
      
        knowHow.removeAttribute ('style')
        knowHow.style.gap = `${ fontSize / PHI ** 2 }px`


        knowHow.querySelectorAll ('p').forEach ((p, i) => {
          
          p.style.fontSize = `${ fontSize }px`
          p.style.height = `${ fontSize * PHI }px`


          ;(span => {
            if (!span) { return }
            span.style.height = `${ fontSize }px`
            span.style.width = `${ fontSize * PHI }px`
          }) (p.querySelector ('span'))


          ;(i => {
            if (!i) { return }
            i.style.fontSize = `${ fontSize / PHI }px`
          }) (p.querySelector ('i'))


          ;(strong => {
            if (!strong) { return }
            strong.style.fontSize = `${ fontSize }px`
          }) (p.querySelector ('strong'))


          i > 0 && (() => {
              p.style.gap = `${ fontSize / PHI ** 2 }px`
              p.style.paddingRight = `${ fontSize }px`
            }) ()

        })
      
      })


  if (screenProperties.ratioIndex > 1) { return }


  ;(slogan => slogan && (slogan.style.fontSize = `${ fontSize }px`)) (
    document
      .querySelector ('.o-expertise-in-modal .o-expertise-slogan h1')
  )

}