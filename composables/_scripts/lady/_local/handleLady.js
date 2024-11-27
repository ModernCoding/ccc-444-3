export const handleLady = screenProperties => {

  (ladyFigcaption => {

      if (!ladyFigcaption) { return }
      ladyFigcaption.removeAttribute ('style')

      ;(fontSize =>

          ladyFigcaption.style.fontSize = `${
              [ fontSize, TWICE_54_BY_PHI_POWER_3 ] [
                +(fontSize > TWICE_54_BY_PHI_POWER_3)
              ]
            }px`
        
        ) (screenProperties.heights.main / PHI ** 4)

    }) (document.querySelector ('.o-lady-picture > figcaption'))

}