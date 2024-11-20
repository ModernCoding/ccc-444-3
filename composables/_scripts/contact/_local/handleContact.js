const _adjustEmail = (email, size, minSize, maxWidth) => {

  switch (true) {
    
    case size <= minSize:
      email.style.fontSize = `${ minSize }px`
      return

    case email.getBoundingClientRect ().width < maxWidth:
      return

    default:
      email.style.fontSize = `${ size / PHI }px`
      return _adjustEmail (email, size / PHI, minSize)

  }

}


const _handleOnePartMode = (screenProperties, logoProperties) => {

  document
    .querySelectorAll ("#contact *")
    .forEach (e => e.removeAttribute ('style'))

  
  ;(taxId =>

      taxId && (marginTop => {

        taxId.style.marginTop = `${ marginTop }px`
        taxId.style.marginBottom = `${ -marginTop }px`
    
      }) (

        logoProperties.height
          - screenProperties.heights.aside
          - screenProperties.paddingTops.corrected.main

          /*
            delta aside height / logo height
              & corrected main padding top to:
                - remove from top
                - compensate at bottom
          */
      
      )
    
    ) (document.querySelector ('#contact > .o-tax-id'))


  const address = document.querySelector ('#contact > .o-address')

  const contactInfo
    = document.querySelector ('#contact > .o-contact-info')


  address && address.querySelectorAll ('*').forEach (hx =>
      hx.style.fontSize = `${ TWICE_54_BY_PHI_POWER_3 }px`
    )

  contactInfo && contactInfo.querySelectorAll ('*').forEach (e =>
      e.style.fontSize = `${ TWICE_54_BY_PHI_POWER_3 }px`
    )


  const email = contactInfo.querySelector ('a')

  email && _adjustEmail (
      email,
      TWICE_54_BY_PHI_POWER_3,
      TWICE_54_BY_PHI_POWER_5,
      screenProperties.widths.main
    )

}


export const handleContact = (screenProperties, logoProperties) => {

  if (screenProperties.ratioIndex < 2) {
    return _handleOnePartMode (screenProperties, logoProperties)
  }


  const maxHeights = {

      '.o-address': [

          screenProperties.heights.aside

            - logoProperties.height

            - (taxId => 
                taxId ? taxId.getBoundingClientRect ().height : 0
              ) (document.querySelector ('.o-tax-id')),


          screenProperties.heights.main / PHI

        ] [ +(screenProperties.ratioIndex > 2) ],


      '.o-contact-info': [
          screenProperties.heights.footer,
          screenProperties.heights.main / PHI ** 2
        ] [ +(screenProperties.ratioIndex > 2) ]

    }


  const maxWidth = screenProperties.widths [
      [ 'aside', 'main' ] [ +(screenProperties.ratioIndex > 2) ]
    ]


  const address = document.querySelector ('.o-address')

  address && (() => {

    address.removeAttribute ('style')

    address
      .querySelectorAll ('*')
      .forEach (hx => hx.removeAttribute ('style'))

  }) ()


  let appliedFontSize = 0


  ;(function _set (keys, i = 0) {

      if (i >= keys.length) { return }

      const element = document.querySelector (keys [ i ])
      if (!element) { return _set (keys, ++i) }


      const maxHeight = [
          maxHeights [ keys [ i ] ],
          screenProperties.heights.footer
        ] [ +screenProperties.isSentenceInFooter ]


      const fontSize = (fontSize =>

          [ TWICE_54_BY_PHI_POWER_4, fontSize ] [
            +(fontSize > TWICE_54_BY_PHI_POWER_4)
          ]

        ) (maxHeight)


      const subkeys = element.querySelectorAll ('*')
      subkeys.forEach (sE => sE.style.fontSize = `${ fontSize }px`)


      ;(function _setFontSize (size = fontSize) {

          appliedFontSize = size


          const _height = ((h = 0) => {

              subkeys
                .forEach (sE => h += sE.getBoundingClientRect ().height)

              return h

            }) ()


          switch (true) {
            
            case size <= TWICE_54_BY_PHI_POWER_4:

              subkeys.forEach (sE =>
                  sE.style.fontSize = `${ TWICE_54_BY_PHI_POWER_4 }px`
                )
              
              return _set (keys, ++i)


            case _height < maxHeight:
              return _set (keys, ++i)


            default:

              subkeys
                .forEach (sE => sE.style.fontSize = `${ size / PHI }px`)

              return _setFontSize (size / PHI)

          }

        }) ()

    }) (Object.keys (maxHeights))


  const email = document.querySelector ('.o-contact-info > a')
  if (!email) { return }

  const footerContent = document.querySelector ('#footer-right-content')
  if (!footerContent) { return }

  _adjustEmail (
    email,
    appliedFontSize,
    TWICE_54_BY_PHI_POWER_5,
    screenProperties.widths.main
  )


  if (!address) { return }


  address.querySelectorAll ('*').forEach (hx => (function _adjust (
    size = appliedFontSize,
    minSize = TWICE_54_BY_PHI_POWER_5
  ) {

      switch (true) {
        
        case size <= minSize:
          hx.style.fontSize = `${ minSize }px`
          return

        case hx.scrollWidth < maxWidth:
          return

        default:
          hx.style.fontSize = `${ size / PHI }px`
          return _adjust (size / PHI)

      }

    }) ())


  ;(h2 => {

      switch (true) {

        case  !h2:
          break


        case  h2.scrollWidth >= maxWidth:

        case  address.getBoundingClientRect ().height
              >= maxHeights [ '.o-address' ]:

          h2.style.display = 'none'
          break


        default:
          break

      }

    }) (address.querySelector ('h2'))


  address.getBoundingClientRect ().height
    >= maxHeights [ '.o-address' ] && (address.style.display = 'none')

}