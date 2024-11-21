const FONT_SIZE_FACTORS = {
    '.o-address': [ 1, 2, 1, 0 ],
    '.o-contact-info': [ 2, 1 ]
  }


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


const _calcFontSize = (fontSize, minSize, key, i) => (s =>
    [ minSize, s ] [ +(s > minSize) ]
  ) (fontSize / PHI ** FONT_SIZE_FACTORS [ key ] [ i ])


export const handleContact = (screenProperties, logoProperties) => {

  document
    .querySelectorAll ("#contact *")
    .forEach (e => e.removeAttribute ('style'))


  const smallestPartHeight = screenProperties.ratioIndex < 2

      ? (
          screenProperties.heights.main
            - screenProperties.paddingTops.corrected.main
        ) / (1 + PHI + PHI ** 2)

      : null


  const address = document.querySelector ('.o-address')
  const contactInfo = document.querySelector ('.o-contact-info')


  screenProperties.ratioIndex < 2 && (taxId => {

      address && (
          address.style.height = `${ smallestPartHeight * PHI ** 2 }px`
        )

      contactInfo && (
          contactInfo.style.height = `${ smallestPartHeight * PHI }px`
        )

      taxId && (taxId.style.height = `${ smallestPartHeight }px`)

    }) (document.querySelector ('#contact > .o-tax-id'))


  const maxHeights = {

      '.o-address': [

          smallestPartHeight * PHI ** 2,


          screenProperties.heights.aside

            - logoProperties.height

            - (taxId => 
                taxId ? taxId.getBoundingClientRect ().height : 0
              ) (document.querySelector ('.o-tax-id')),


          screenProperties.heights.main / PHI

        ] [ screenProperties.ratioIndex - 1 ],


      '.o-contact-info': [
          smallestPartHeight * PHI,
          screenProperties.heights.footer / PHI ** 2,
          screenProperties.heights.main / PHI ** 2
        ] [ screenProperties.ratioIndex - 1 ]

    }


  const maxWidths = {

      '.o-address': screenProperties.widths [
          [ 'aside', 'main' ] [ +(screenProperties.ratioIndex > 2) ]
        ],

      '.o-contact-info': screenProperties.widths.main

    }


  ;(function _set (keys, i = 0) {

      if (i >= keys.length) { return }

      const element = document.querySelector (keys [ i ])
      if (!element) { return _set (keys, ++i) }


      const maxHeight = [
          maxHeights [ keys [ i ] ],
          screenProperties.heights.footer
        ] [ +screenProperties.isSentenceInFooter ]


      const fontSize = (fontSize =>

          [ TWICE_54_BY_PHI_POWER_5, fontSize ] [
            +(fontSize > TWICE_54_BY_PHI_POWER_5)
          ]

        ) (maxHeight)


      const subkeys = element.querySelectorAll ('*')

      
      subkeys.forEach ((sK, iSK) =>

          (s => sK.style.fontSize = `${ s }px`) (
                
              _calcFontSize (
                fontSize,
                TWICE_54_BY_PHI_POWER_5,
                keys [ i ],
                iSK
              )
            
            )
        
        )
              

      ;(function _setFontSize (size = fontSize) {

          const _height = ((h = 0) => {

              subkeys
                .forEach (sE => h += sE.getBoundingClientRect ().height)

              return h

            }) ()


          switch (true) {
            
            case size <= TWICE_54_BY_PHI_POWER_5:

              subkeys.forEach (sE =>
                  sE.style.fontSize = `${ TWICE_54_BY_PHI_POWER_5 }px`
                )
              
              return _set (keys, ++i)


            case _height >= maxHeight:
            case element.scrollWidth >= maxWidths [ keys [ i ] ]:

              subkeys.forEach ((sK, iSK) =>

                  (s => sK.style.fontSize = `${ s }px`) (
                        
                      _calcFontSize (
                        size / PHI,
                        TWICE_54_BY_PHI_POWER_5,
                        keys [ i ],
                        iSK
                      )
                    
                    )
                
                )


              return _setFontSize (size / PHI)


            default:
              return _set (keys, ++i)

          }

        }) ()

    }) (Object.keys (maxHeights))


  if (!address) { return }


  ;(h2 => {

      switch (true) {

        case  !h2:
          break


        case  h2.scrollWidth >= maxWidths [ '.o-address' ]:

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