export const handleContact = screenProperties => {

  const MAX_HEIGHTS = {

      '.o-address': screenProperties.heights.main / PHI,

      '.o-contact-info': [
          screenProperties.heights.footer,
          screenProperties.heights.main / PHI ** 2
        ] [ +(screenProperties.ratioIndex > 2) ]

    }


  let appliedFontSize = 0


  ;(function _set (keys, i = 0) {

      if (i >= keys.length) { return }

      const element = document.querySelector (keys [ i ])
      if (!element) { return _set (keys, ++i) }


      const maxHeight = [
          MAX_HEIGHTS [ keys [ i ] ],
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
            case _height < maxHeight:

              return _set (keys, ++i)


            default:

              subkeys
                .forEach (sE => sE.style.fontSize = `${ size / PHI }px`)

              return _setFontSize (size / PHI)

          }

        }) ()

    }) (Object.keys (MAX_HEIGHTS))


  const email = document.querySelector ('.o-contact-info > a')
  if (!email) { return }

  const footerContent = document.querySelector ('#footer-right-content')
  if (!footerContent) { return }


  ;(function _adjust (
    size = appliedFontSize,
    minSize = TWICE_54_BY_PHI_POWER_5
  ) {

      switch (true) {
        
        case  size <= minSize:

        case  email.getBoundingClientRect ().width
              < screenProperties.widths.main:

          return


        default:

          email.style.fontSize = `${ size / PHI }px`
          return _adjust (size / PHI)

      }

    }) ()

}