export default (screenProperties, isSloganInFooter) => (ratioIndex => {

  const slogan = document.querySelector ([
      '#index > .o-slogan',
      '#index-machine > .o-slogan',
      '#__nuxt > footer .o-slogan',
    ] [ ratioIndex * +!isSloganInFooter + 2 * +isSloganInFooter ])


  if (!slogan) { return }


  const maxHeight = [
      slogan.getBoundingClientRect ().height,
      screenProperties.heights.main,
      screenProperties.heights.footer
    ] [ ratioIndex * +!isSloganInFooter + 2 * +isSloganInFooter ]


  const fontSize = (fontSize =>

      [ TWICE_54_BY_PHI_POWER_4, fontSize ] [
        +(fontSize > TWICE_54_BY_PHI_POWER_4)
      ]

    ) (maxHeight / PHI ** 2)


  ratioIndex === 0 && (slogan.style.height = 'auto')
    /*
      in 2-part mode,
      need to temporarilly unset previously computed height
    */


  const h1 = slogan.querySelector ('h1')
  if (!h1) { return }

  const button = slogan.querySelector ('button')
  if (!button) { return }


  h1.style.fontSize = `${ fontSize }px`

  button.style.gap = `${ fontSize / PHI ** 3 }px`
  slogan.style.gap = `${ fontSize / PHI }px`


  button.querySelectorAll ('p').forEach ((p, i) => {

      const fontSizeToApply
        = fontSize / PHI ** (1 + 1 ** !isSloganInFooter)
      
      p.style.fontSize = `${ fontSizeToApply }px`
      p.style.height = `${ fontSizeToApply * PHI }px`


      ;(div => {
        if (!div) { return }
        div.style.height = `${ fontSizeToApply }px`
        div.style.width = `${ fontSizeToApply * PHI }px`
      }) (p.querySelector ('div'))


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
        case slogan.getBoundingClientRect ().height < maxHeight:
          
          return


        default:
          
          h1.style.fontSize = `${ size / PHI }px`

          button.style.gap = `${ size / PHI ** 4 }px`

          slogan.style.gap
            = `${ size / PHI ** (2 + 1 ** !isSloganInFooter) }px`


          button.querySelectorAll ('p').forEach ((p, i) => {

              const fontSizeToApply = size / PHI ** 2

              p.style.fontSize = `${ fontSizeToApply }px`
              p.style.height = `${ fontSizeToApply * PHI }px`


              ;(div => {
                if (!div) { return }
                div.style.height = `${ fontSizeToApply }px`
                div.style.width = `${ fontSizeToApply * PHI }px`
              }) (p.querySelector ('div'))


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


  ratioIndex === 0 && (slogan.style.height = `${ maxHeight }px`)
    /*
      in 2-part mode, setting back previously computed height
    */

}) (screenProperties.ratioIndex - 2)