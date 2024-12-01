export const handleSlogan = screenProperties => {

  const slogan = document
      .querySelector ('#footer-right-content > .o-expertise-slogan')


  if (!slogan) { return }
  slogan.removeAttribute ('style')


  const fontSize = (fontSize =>

      [ TWICE_54_BY_PHI_POWER_4, fontSize ] [
        +(fontSize > TWICE_54_BY_PHI_POWER_4)
      ]

    ) (screenProperties.heights.footer / PHI ** 2)


  const h1 = slogan.querySelector ('h1')
  if (!h1) { return }

  h1.style.fontSize = `${ fontSize }px`


  ;(function _set (size = fontSize) {

      switch (true) {
        
        case  size <= TWICE_54_BY_PHI_POWER_4:
          return h1.style.fontSize = `${ TWICE_54_BY_PHI_POWER_4 }px`


        case  slogan.getBoundingClientRect ().height
                < screenProperties.heights.footer:

          return


        default:
          h1.style.fontSize = `${ size / PHI }px`
          return _set (size / PHI)

      }

    }) ()


  slogan.getBoundingClientRect ().height
    >= screenProperties.heights.footer && (
        slogan.style.display = 'none'
      )

}