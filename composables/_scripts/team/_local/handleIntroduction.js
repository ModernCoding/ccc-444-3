export const handleIntroduction = screenProperties => {

  const introduction = document.querySelector ([
      '#central-content > .o-introduction',
      '#footer-right-content > .o-introduction'
    ] [ +(screenProperties.ratioIndex < 3) ])


  if (!introduction) { return }


  const maxHeight = [
      screenProperties.heights.main,
      screenProperties.heights.footer
    ] [ +(screenProperties.ratioIndex < 3) ]


  const fontSize = (fontSize =>

      [ TWICE_54_BY_PHI_POWER_4, fontSize ] [
        +(fontSize > TWICE_54_BY_PHI_POWER_4)
      ]

    ) (maxHeight / PHI ** 2)


  const h1 = introduction.querySelector ('h1')
  if (!h1) { return }


  const spans = h1.querySelectorAll ('span')
  spans.forEach (s => s.style.fontSize = `${ fontSize }px`)


  ;(function _set (size = fontSize) {

      switch (true) {
        
        case size <= TWICE_54_BY_PHI_POWER_4:

          spans.forEach (s =>
              s.style.fontSize = `${ TWICE_54_BY_PHI_POWER_4 }px`
            )

          return


        case introduction.getBoundingClientRect ().height < maxHeight:
          return

        default:
          spans.forEach (s => s.style.fontSize = `${ size / PHI }px`)
          return _set (size / PHI)

      }

    }) ()

}