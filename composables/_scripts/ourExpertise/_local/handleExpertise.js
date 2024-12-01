export const handleExpertise = screenProperties => {

  const screen = getWindowWidths (screenProperties.widths.main)


  document

    .querySelectorAll ([
        '.o-expertise-in-modal .o-expertise-text h1',
        '#our-expertise .o-expertise-text h1',
      ] [ +(screenProperties.ratioIndex > 1) ])


    .forEach (h1 => {
      
        h1.removeAttribute ('style')

        ;(size => h1.style.fontSize = `${ size }px`) (
          TWICE_54_BY_PHI_POWER_3
            * PHI ** (+screen.isAtLeastSmHalf + +screen.isAtLeastLgHalf)
        )
      
      })


  if (screenProperties.ratioIndex > 1) { return }

  ;(slogan =>

    slogan && (size => slogan.style.fontSize = `${ size }px`) (
        TWICE_54_BY_PHI_POWER_4
          * PHI ** (+screen.isAtLeastSmHalf + +screen.isAtLeastLgHalf)
      )
  
  ) (
    document
      .querySelector ('.o-expertise-in-modal .o-expertise-slogan h1')
  )

}