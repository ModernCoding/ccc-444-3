export const handleGoogleMapsLink = screenProperties => {

  const googleMapsLink = document.querySelector ('.o-google-maps-link')
  if (!googleMapsLink) { return }


  googleMapsLink.removeAttribute ('style')

  googleMapsLink
    .querySelectorAll ('*')
    .forEach (element => element.removeAttribute ('style'))


  const strong = googleMapsLink.querySelector ('strong')
  if (!strong) { return }

  const div = googleMapsLink.querySelector ('div')
  if (!div) { return }

  const i = googleMapsLink.querySelector ('i')
  if (!i) { return }

  const a = googleMapsLink.querySelector ('a')
  if (!a) { return }


  const size = (size =>

      [ TWICE_54_BY_PHI_POWER_3, size, TWICE_54_BY_PHI ] [
        +(size > TWICE_54_BY_PHI_POWER_3)
        + +(size > TWICE_54_BY_PHI)
      ]

    ) (screenProperties.heights.footer / PHI)


  googleMapsLink.style.height = `${ size }px`

  a.style.paddingRight = `${ size / PHI ** 2 }px`
  a.style.gap = `${ size / PHI ** 2 }px`

  strong.style.fontSize = `${ size / PHI ** 2 }px`
  i.style.fontSize = `${ size / PHI ** 2 }px`

  div.style.height = `${ size / PHI }px`
  div.style.width = `${ size }px`


  ;(function _set (s = size) {

      switch (true) {
        
        case  s < TWICE_54_BY_PHI_POWER_3:

        case  a.getBoundingClientRect ().width
              < screenProperties.widths [
                  [ 'aside', 'main' ] [
                    +(screenProperties.ratioIndex > 2)
                  ]
                ]:

          return


        default:

          googleMapsLink.style.height = `${ s / PHI }px`

          a.style.paddingRight = `${ s / PHI ** 3 }px`
          a.style.gap = `${ s / PHI ** 3 }px`
      
          strong.style.fontSize = `${ s / PHI ** 3 }px`
          i.style.fontSize = `${ s / PHI ** 3 }px`

          div.style.height = `${ s / PHI ** 2 }px`
          div.style.width = `${ s / PHI }px`

          return _set (s / PHI)

      }

    }) ()

}