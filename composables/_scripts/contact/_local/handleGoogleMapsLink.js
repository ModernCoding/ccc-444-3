export const handleGoogleMapsLink = screenProperties => {

  const location = document.querySelector ([
      '#contact > .o-location',
      '#footer-right-content .o-location'
    ] [ +screenProperties.isSentenceInFooter ])


  if (!location) { return }


  const maxHeight = [
      screenProperties.heights.footer,
      location.getBoundingClientRect ().height,
      screenProperties.heights.main
    ] [ screenProperties.ratioIndex - 1 ]


  const maxWidth = location.getBoundingClientRect ().width

      - parseInt (
          window
            .getComputedStyle (location)
            .getPropertyValue ('padding-left')
            .split ('px')
            .join ('')
        )

      // - parseInt (
      //     window
      //       .getComputedStyle (location)
      //       .getPropertyValue ('margin-left')
      //       .split ('px')
      //       .join ('')
      //   )


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
        
        case  size <= TWICE_54_BY_PHI_POWER_4:
          return

        case  h1.getBoundingClientRect ().height >= maxHeight:
        case  h1.getBoundingClientRect ().width >= maxWidth:

          h1.style.fontSize = `${ size / PHI }px`
          return _set (size / PHI)
        
        default:
          return

      }

    }) ()

}