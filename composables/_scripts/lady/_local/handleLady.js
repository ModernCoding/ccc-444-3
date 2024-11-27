const _handleFontSize = (screenProperties, p) => {

  (screen =>

    (factor => {

      p.querySelectorAll ('span').forEach (span =>
          span.style.fontSize
            = `${ TWICE_54_BY_PHI_POWER_4 * factor }px`
        )


      screenProperties.ratioIndex < 2 && (

          p.style.paddingTop
            = `${ TWICE_54_BY_PHI_POWER_3 * factor * PHI }px`
        
        )

    }) (PHI ** (+screen.isAtLeastSmHalf + +screen.isAtLeastSm))

  ) (getWindowWidths (screenProperties.widths.main))

}


export const handleLady = screenProperties => {

  const lady = document.querySelector ('.o-lady')

  if (!lady) { return }
  lady.removeAttribute ('style')


  const p = lady.querySelector ('p')
  if (!p) { return }
  
  p.removeAttribute ('style')

  p.querySelectorAll ('span').forEach (span =>
      span.removeAttribute ('style')
    )


  if (screenProperties.ratioIndex < 2) {
    return _handleFontSize (screenProperties, p)
  }


  const ladyHeight = [
      screenProperties.heights.main / PHI,
      lady.getBoundingClientRect ().height
    ] [ +(screenProperties.ratioIndex > 2) ]


  const fontSize = [ ladyHeight, TWICE_54_BY_PHI ] [
      +(ladyHeight > TWICE_54_BY_PHI)
    ]


  ;(function _setFontSize (size = fontSize) {


    p.querySelectorAll ('span').forEach (span =>
        span.style.fontSize = `${ size }px`
      )


    switch (true) {

      case size <= TWICE_54_BY_PHI_POWER_5:

        return p.querySelectorAll ('span').forEach (span =>
            span.style.fontSize = `${ TWICE_54_BY_PHI_POWER_5 }px`
          )


      case p.getBoundingClientRect ().height < ladyHeight:
        return 

      default:
        return _setFontSize (size / PHI)

    }

  }) ()


  if (screenProperties.ratioIndex > 2) { return }


  const menu = document.querySelector ('.o-lady-menu')
  if (!menu) { return }


  ;((menuHeight, ladyHeight) => {

    if (menuHeight + ladyHeight > screenProperties.heights.main) {
      return
    }


    lady.style.height
      = `${ screenProperties.heights.main - menuHeight }px`

  }) (
    menu.getBoundingClientRect ().height,
    lady.getBoundingClientRect ().height
  )

}