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
        
        ) (ladyFigcaption.getBoundingClientRect ().height / PHI ** 2)

    }) (document.querySelector ('.o-lady-picture > figcaption'))

}