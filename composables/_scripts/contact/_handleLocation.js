export default (
  screenProperties,
  isLocationInFooter
) => (ratioIndex => {

  const location = document.querySelector ([
      '#contact > .o-location',
      '#__nuxt > footer .o-location'
    ] [ +isLocationInFooter ])


  if (!location) { return }


  const maxHeight = [
      // location.getBoundingClientRect ().height,
      screenProperties.heights.main,
      screenProperties.heights.footer
    ] [ +isLocationInFooter ]


  const fontSize = (fontSize =>

      [ TWICE_54_BY_PHI_POWER_4, fontSize ] [
        +(fontSize > TWICE_54_BY_PHI_POWER_4)
      ]

    ) (maxHeight / PHI ** 2)


  ratioIndex === 0 && (location.style.height = 'auto')
    /*
      in 2-part mode,
      need to temporarily unset previously computed height
    */


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


  ratioIndex === 0 && (location.style.height = `${ maxHeight }px`)
    /*
      in 2-part mode, setting back previously computed height
    */

}) (screenProperties.ratioIndex - 2)