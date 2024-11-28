export const handleIntroduction = screenProperties => {

  const introduction = document.querySelector ([
      '#central-content > .o-introduction',
      '#footer-right-content > .o-introduction'
    ] [ +(screenProperties.ratioIndex < 3) ])


  if (!introduction) { return }


  const maxHeight = [
      screenProperties.heights.main,
      screenProperties.heights.footer
    ] [ +(screenProperties.ratioIndex < 3) ]


  const fontSize = (fontSize =>

      [ TWICE_54_BY_PHI_POWER_4, fontSize ] [
        +(fontSize > TWICE_54_BY_PHI_POWER_4)
      ]

    ) (maxHeight / PHI ** 2)


  const h1 = introduction.querySelector ('h1')
  if (!h1) { return }

  const button = introduction.querySelector ('button')
  if (!button) { return }


  h1.style.fontSize = `${ fontSize }px`

  button.style.gap = `${ fontSize / PHI ** 3 }px`
  introduction.style.gap = `${ fontSize / PHI }px`


  button.querySelectorAll ('p').forEach ((p, i) => {

      const fontSizeToApply = fontSize / PHI ** (
          1 + 1 ** +(screenProperties.ratioIndex > 2) 
        )
      
      p.style.fontSize = `${ fontSizeToApply }px`
      p.style.height = `${ fontSizeToApply * PHI }px`


      ;(span => {
        if (!span) { return }
        span.style.height = `${ fontSizeToApply }px`
        span.style.width = `${ fontSizeToApply * PHI }px`
      }) (p.querySelector ('span'))


      ;(i => {
        if (!i) { return }
        i.style.fontSize = `${ fontSizeToApply / PHI }px`
      }) (p.querySelector ('i'))


      ;(strong => {
        if (!strong) { return }
        strong.style.fontSize = `${ fontSizeToApply }px`
      }) (p.querySelector ('strong'))


      i > 0 && (() => {
          p.style.gap = `${ fontSize / PHI ** 3 }px`
          p.style.paddingRight = `${ fontSize / PHI }px`
        }) ()

    })


  ;(function _set (size = fontSize) {

      switch (true) {
        
        case size <= TWICE_54_BY_PHI_POWER_4:
        case introduction.getBoundingClientRect ().height < maxHeight:
          
          return


        default:
          
          h1.style.fontSize = `${ size / PHI }px`

          button.style.gap = `${ size / PHI ** 4 }px`

          introduction.style.gap = `${
              size / PHI ** (
                2 + 1 ** +(screenProperties.ratioIndex > 2) 
              )
            }px`


          button.querySelectorAll ('p').forEach ((p, i) => {

              const fontSizeToApply = size / PHI ** 2

              p.style.fontSize = `${ fontSizeToApply }px`
              p.style.height = `${ fontSizeToApply * PHI }px`


              ;(span => {
                if (!span) { return }
                span.style.height = `${ fontSizeToApply }px`
                span.style.width = `${ fontSizeToApply * PHI }px`
              }) (p.querySelector ('span'))


              ;(i => {
                if (!i) { return }
                i.style.fontSize = `${ fontSizeToApply / PHI }px`
              }) (p.querySelector ('i'))


              ;(strong => {
                if (!strong) { return }
                strong.style.fontSize = `${ fontSizeToApply }px`
              }) (p.querySelector ('strong'))

              i > 0 && (() => {
                  p.style.gap = `${ size / PHI ** 4 }px`
                  p.style.paddingRight = `${ size / PHI ** 2 }px`
                }) ()

            })

          
          return _set (size / PHI)

      }

    }) ()

}