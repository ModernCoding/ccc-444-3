export const handleNames = screenPropertiesStore => {

  const { screenProperties: { value: screenProperties } }
    = storeToRefs (screenPropertiesStore)


  const _setFontSize = (h1, maxHeight, maxWidth, fontSize) => {

      h1.style.fontSize = `${ fontSize }px`


      switch (true) {
        
        case fontSize <= TWICE_54_BY_PHI_POWER_4:
          return h1.style.fontSize = `${ TWICE_54_BY_PHI_POWER_4 }px`


        case h1.getBoundingClientRect ().height >= maxHeight:
        case h1.scrollWidth >= maxWidth:

          return _setFontSize (h1, maxHeight, maxWidth, fontSize / PHI)


        default:
          return

      }

    }


  // resizing process starts here

  const names = document
      .querySelectorAll ('#footer-central-content > .o-country-name, #__nuxt > footer .o-profile-name')


  names.forEach (name => {

    name.removeAttribute ('style')

    const h1 = name.querySelector ('h1')
    if (!h1) { return }


    ;(height => {

      name.style.height = `${ height }px`
      
      _setFontSize (
        
        h1,
        height,
        
        {
            country: screenProperties.widths.central,
            profile: screenProperties.widths.aside
          } [ name.classList [ 0 ].split ('-') [ 1 ] ],

        screenProperties.widths.main,
        height / PHI ** 2
      
      )

    }) (screenProperties.heights.footer)

  })

}