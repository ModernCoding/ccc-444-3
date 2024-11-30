export const handleNames = (
  screenPropertiesStore,
  logoProperties
) => {

  const { screenProperties: { value: screenProperties } }
    = storeToRefs (screenPropertiesStore)


  let appliedFontSize = 0
  

  const _setFontSize = (h1, maxHeight, maxWidth, fontSize) => {

      appliedFontSize === 0 && (appliedFontSize = fontSize)

      h1.style.fontSize = `${ fontSize }px`


      switch (true) {
        
        case fontSize <= TWICE_54_BY_PHI_POWER_4:

          TWICE_54_BY_PHI_POWER_4 < appliedFontSize
            && (appliedFontSize = TWICE_54_BY_PHI_POWER_4)

          return h1.style.fontSize = `${ TWICE_54_BY_PHI_POWER_4 }px`


        case h1.getBoundingClientRect ().height >= maxHeight:
        case h1.scrollWidth >= maxWidth:

          return _setFontSize (h1, maxHeight, maxWidth, fontSize / PHI)


        default:

          return fontSize < appliedFontSize
              && (appliedFontSize = fontSize)

      }

    }


  // resizing process starts here

  const names = document
      .querySelectorAll ('#footer-central-content > .o-country-name, #footer-right-content > .o-profile-name')
  

  names.forEach (name => {

      name.removeAttribute ('style')

      const h1 = name.querySelector ('h1')
      if (!h1) { return }


      ;[

        () => {

            const height = screenProperties.heights.aside
                - logoProperties.value.height


            name.style.height = `${ height }px`

            _setFontSize (
              h1,
              height,
              screenProperties.widths.aside,
              height / PHI ** 2
            )

          },
      

        () => (height => {

            name.style.height = `${ height }px`
            
            _setFontSize (
              h1,
              height,
              screenProperties.widths.main,
              height / PHI ** 2
            )

          }) (screenProperties.heights.footer)
      
      ] [ +(screenProperties.ratioIndex < 2) ] ()

    })


  // equalizing font sizes
  
  names.forEach (name =>

    (h1 =>
      h1 && (h1.style.fontSize = `${ appliedFontSize }px`)
    ) (name.querySelector ('h1'))

  )

}