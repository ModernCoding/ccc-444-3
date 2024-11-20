const _adjust = (
  element,
  size,
  minSize,
  maxWidth,
  considerScrollWidth = false
) => {

  switch (true) {
    
    case size <= minSize:
      element.style.fontSize = `${ minSize }px`
      return


    case [
      element.getBoundingClientRect ().width,
      element.scrollWidth
    ] [ +considerScrollWidth ] < maxWidth:
      
      return


    default:
      element.style.fontSize = `${ size / PHI }px`
      return _adjust (element, size / PHI, minSize, considerScrollWidth)

  }

}


const _handleOnePartMode = (screenProperties, logoProperties) => {

  document
    .querySelectorAll ("#contact *")
    .forEach (e => e.removeAttribute ('style'))

  
  const address = document.querySelector ('#contact > .o-address')

  const contactInfo
    = document.querySelector ('#contact > .o-contact-info')


  const taxId = document.querySelector ('#contact > .o-tax-id')


  address && address.querySelectorAll ('*').forEach (hx =>
      hx.style.fontSize = `${ TWICE_54_BY_PHI_POWER_4 }px`
    )

  contactInfo && contactInfo.querySelectorAll ('*').forEach (e =>
      e.style.fontSize = `${ TWICE_54_BY_PHI_POWER_4 }px`
    )


  const email = contactInfo.querySelector ('a')

  email && _adjust (
      email,
      TWICE_54_BY_PHI_POWER_4,
      TWICE_54_BY_PHI_POWER_5,
      screenProperties.widths.main
    )


  document.querySelectorAll ('#contact *:not(a)').forEach (hx =>

      _adjust (
        hx,
        TWICE_54_BY_PHI_POWER_4,
        TWICE_54_BY_PHI_POWER_5,
        screenProperties.widths.main,
        true
      )

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

  _adjust (
    email,
    appliedFontSize,
    TWICE_54_BY_PHI_POWER_5,
    screenProperties.widths.main
  )


  if (!address) { return }


  address.querySelectorAll ('*').forEach (hx =>

      _adjust (
        hx,
        appliedFontSize,
        TWICE_54_BY_PHI_POWER_5,
        maxWidth,
        true
      )

    )


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