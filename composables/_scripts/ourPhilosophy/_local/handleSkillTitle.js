export const handleSkillTitle = screenProperties => {

  const whyGuests = document.querySelector ('.o-expertise-skill-title')
  if (!whyGuests) { return }

  whyGuests.removeAttribute ('style')

  const h1 = whyGuests.querySelector ('h1')
  if (!h1) { return }


  const _setFontSize = (maxHeight, maxWidth, fontSize) => {

      h1.style.fontSize = `${ fontSize }px`


      switch (true) {
        
        case fontSize <= TWICE_54_BY_PHI_POWER_4:

          return h1.style.fontSize = `${ TWICE_54_BY_PHI_POWER_4 }px`


        case h1.getBoundingClientRect ().height >= maxHeight:
        case h1.scrollWidth >= maxWidth:

          return _setFontSize (maxHeight, maxWidth, fontSize / PHI)


        default:
          return

      }

    }


  ;(height => {

    whyGuests.style.height = `${ height }px`
    
    _setFontSize (
      height,
      screenProperties.widths.main,
      height / PHI ** 2
    )

  }) (screenProperties.heights.footer)

}