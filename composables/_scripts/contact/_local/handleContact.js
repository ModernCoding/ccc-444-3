export const handleContact = screenProperties =>
  
  (function _set (elements, i = 0) {

    if (i >= elements.length) { return }
    if (!elements [ i ]) { return _set (elements, ++i) }


    const maxHeight = [
        elements [ i ].getBoundingClientRect ().height,
        screenProperties.heights.footer
      ] [ +screenProperties.isSentenceInFooter ]


    const fontSize = (fontSize =>

        [ TWICE_54_BY_PHI_POWER_4, fontSize ] [
          +(fontSize > TWICE_54_BY_PHI_POWER_4)
        ]

      ) (maxHeight)


    const subElements = elements [ i ].querySelectorAll ('*')
    subElements.forEach (sE => sE.style.fontSize = `${ fontSize }px`)


    ;(function _setFontSize (size = fontSize) {

        const _height = ((h = 0) => {

            subElements
              .forEach (sE => h += sE.getBoundingClientRect ().height)

            return h

          }) ()


        switch (true) {
          
          case size <= TWICE_54_BY_PHI_POWER_4:
          case _height < maxHeight:

            return _set (elements, ++i)


          default:

            subElements
              .forEach (sE => sE.style.fontSize = `${ size / PHI }px`)

            return _setFontSize (size / PHI)

        }

      }) ()

  }) ([
    document.querySelector ('.o-address'),
    document.querySelector ('.o-contact-info')
  ])