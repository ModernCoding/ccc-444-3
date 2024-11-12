export default (screenProperties, isLocationInFooter) => {

  const location = document.querySelector ([
      '#contact > .o-location',
      '#__nuxt > footer .o-location'
    ] [ +isLocationInFooter ])


  if (!location) { return }


  const maxHeight = [
      screenProperties.heights.main,
      screenProperties.heights.footer
    ] [ +isLocationInFooter ]


  const fontSize = (fontSize =>

      [ TWICE_54_BY_PHI_POWER_4, fontSize ] [
        +(fontSize > TWICE_54_BY_PHI_POWER_4)
      ]

    ) (maxHeight / PHI ** [ 5, 2 ] [ +isLocationInFooter ])


  location.style.fontSize = `${ fontSize }px`


  ;(function _set (size = fontSize) {

      switch (true) {
        
        case size <= TWICE_54_BY_PHI_POWER_4:
        case location.getBoundingClientRect ().height < maxHeight:
          return

        default:
          location.style.fontSize = `${ size / PHI }px`
          return _set (size / PHI)

      }

    }) ()

}