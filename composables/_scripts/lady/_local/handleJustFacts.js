export const handleJustFacts = (
  screenPropertiesStore,
  logoProperties
) => {

  const justFacts = document.querySelector ('.o-just-facts')
  if (!justFacts) { return }

  justFacts.removeAttribute ('style')

  const h1 = justFacts.querySelector ('h1')
  if (!h1) { return }
  

  const { screenProperties: { value: screenProperties } }
    = storeToRefs (screenPropertiesStore)


  const _setFontSize = (maxHeight, maxWidth, fontSize) => {

      h1.style.fontSize = `${ fontSize }px`


      switch (true) {
        
        case fontSize <= TWICE_54_BY_PHI_POWER_4:

          return h1.style.fontSize = `${ TWICE_54_BY_PHI_POWER_4 }px`


        case h1.getBoundingClientRect ().height >= maxHeight:
        case h1.scrollWidth >= maxWidth:

          return _setFontSize (maxHeight, maxWidth, fontSize / PHI)


        default:
          return

      }

    }


  ;[

    () => {

        const marginTop = screenProperties.heights.header / PHI

        const height = screenProperties.heights.aside
            - logoProperties.value.height


        justFacts.style.height = `${ height }px`

        _setFontSize (
          height,
          screenProperties.widths.main,
          height / PHI ** 2
        )

      },
  

    () => (height => {

        justFacts.style.height = `${ height }px`
        
        _setFontSize (
          height,
          screenProperties.widths.aside,
          height / PHI ** 2
        )

      }) (screenProperties.heights.footer)
  
  ] [ +(screenProperties.ratioIndex < 2) ] ()

}