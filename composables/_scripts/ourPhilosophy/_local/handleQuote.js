export const handleQuote = screenProperties => {

  const quote = document.querySelector ('.o-philosophy-quote')
  if (!quote) { return }

  quote.removeAttribute ('style')

  const h1 = quote.querySelector ('h1')
  if (!h1) { return }


  const fontSize = (fontSize =>

      [ TWICE_54_BY_PHI_POWER_5, fontSize ] [
        +(fontSize > TWICE_54_BY_PHI_POWER_5)
      ]

    ) (screenProperties.heights.footer / PHI ** 2)


  const spans = h1.querySelectorAll ('span')
  spans.forEach (s => s.style.fontSize = `${ fontSize }px`)


  ;(function _set (size = fontSize) {

      switch (true) {
        
        case  size <= TWICE_54_BY_PHI_POWER_5:

          spans.forEach (s =>
              s.style.fontSize = `${ TWICE_54_BY_PHI_POWER_5 }px`
            )

          return


        case  quote.getBoundingClientRect ().height
                < screenProperties.heights.footer:

          return


        default:
          spans.forEach (s => s.style.fontSize = `${ size / PHI }px`)
          return _set (size / PHI)

      }

    }) ()


  quote.getBoundingClientRect ().height
    >= screenProperties.heights.footer && (
        quote.style.display = 'none'
      )

}