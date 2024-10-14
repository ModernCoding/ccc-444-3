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


  const h1 = slogan.querySelector ('h1')
  if (!h1) { return }

  const button = slogan.querySelector ('button')
  if (!button) { return }


  h1.style.fontSize = `${ fontSize }px`

  button.style.gap = `${ fontSize / PHI ** 3 }px`
  slogan.style.gap = `${ fontSize / PHI }px`


  button.querySelectorAll ('p').forEach ((p, i) => {
      
      p.style.fontSize = `${ fontSize / PHI }px`

      i > 0 && (() => {
          p.style.paddingRight = `${ fontSize / PHI ** 4 }px`
          p.style.paddingLeft = `${ fontSize / PHI ** 4 }px`
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
          slogan.style.gap = `${ size / PHI ** 2 }px`


          button.querySelectorAll ('p').forEach ((p, i) => {

              p.style.fontSize = `${ size / PHI ** 2 }px`

              i > 0 && (() => {
                  p.style.paddingRight = `${ size / PHI ** 5 }px`
                  p.style.paddingLeft = `${ size / PHI ** 5 }px`
                }) ()

            })

          
          return _set (size / PHI)

      }

    }) ()


  ratioIndex < 1 && (slogan.style.height = `${ maxHeight }px`)
    /*
      in 2-part mode, setting back previously computed height
    */

}) (screenProperties.ratioIndex - 2)