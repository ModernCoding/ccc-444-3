export const handleContactInfo = screenProperties => {

  const location = document.querySelector ([
      '#contact > .o-location',
      '#footer-content .o-location'
    ] [ +screenProperties.isSentenceInFooter ])


  if (!location) { return }


  const maxHeight = [
      location.getBoundingClientRect ().height,
      screenProperties.heights.footer
    ] [ +screenProperties.isSentenceInFooter ]


  const fontSize = (fontSize =>

      [ TWICE_54_BY_PHI_POWER_4, fontSize ] [
        +(fontSize > TWICE_54_BY_PHI_POWER_4)
      ]

    ) (maxHeight)


  const h1 = location.querySelector ('h1')
  if (!h1) { return }


  h1.style.fontSize = `${ fontSize }px`


  ;(function _set (size = fontSize) {

      switch (true) {
        
        case size <= TWICE_54_BY_PHI_POWER_4:
        case h1.getBoundingClientRect ().height < maxHeight:
          return

        default:
          h1.style.fontSize = `${ size / PHI }px`
          return _set (size / PHI)

      }

    }) ()

}