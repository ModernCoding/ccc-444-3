export const handleLady = screenProperties => {

  (ladyFigcaption => {

      if (!ladyFigcaption) { return }
      ladyFigcaption.removeAttribute ('style')


      ;(fontSize =>

          (size => {

              ladyFigcaption.style.fontSize = `${ size }px`
              ladyFigcaption.style.height = `${ size * PHI ** 2 }px`

            }) (
              [ fontSize, TWICE_54_BY_PHI_POWER_3 ] [
                +(fontSize > TWICE_54_BY_PHI_POWER_3)
              ]
            )
        
        ) (screenProperties.heights.main / PHI ** 2)

    }) (document.querySelector ('.o-lady-picture > figcaption'))


  const lady = document.querySelector ('.o-lady')

  if (!lady) { return }
  lady.removeAttribute ('style')


  const p = lady.querySelector ('p')
  if (!p) { return }
  
  p.removeAttribute ('style')

  p.querySelectorAll ('span').forEach (span =>
      span.removeAttribute ('style')
    )

  const ladyHeight = lady.getBoundingClientRect ().height

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

}