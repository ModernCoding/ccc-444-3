export default screenProperties => (ratioIndex => {

  const slogan = document.querySelector ([
      '#index > .o-slogan',
      '#index-machine > .o-slogan'
    ] [ ratioIndex ])


  if (!slogan) { return }


  const maxHeight = [
      slogan.getBoundingClientRect ().height,
      screenProperties.heights.main
    ] [ ratioIndex ]


  const fontSize = (fontSize =>

      [ TWICE_54_BY_PHI_POWER_4, fontSize ] [
        +(fontSize > TWICE_54_BY_PHI_POWER_4)
      ]

    ) (maxHeight / PHI ** 2)


  ratioIndex < 1 && (slogan.style.height = 'auto')
    /*
      in 2-part mode,
      need to temporarilly unset previously computed height
    */

  slogan.style.fontSize = `${ fontSize }px`


  ;(function _set (size = fontSize) {

      switch (true) {
        
        case size <= TWICE_54_BY_PHI_POWER_4:
        case slogan.getBoundingClientRect ().height < maxHeight:
          return

        default:
          slogan.style.fontSize = `${ size / PHI }px`
          return _set (size / PHI)

      }

    }) ()


  ratioIndex < 1 && (slogan.style.height = `${ maxHeight }px`)
    /*
      in 2-part mode, setting back previously computed height
    */


}) (screenProperties.ratioIndex - 2)