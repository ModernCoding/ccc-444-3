import getId from './_getId'


export default (
  loaderPropertiesStore,
  loadingStore,
  logoPropertiesStore,
  screenPropertiesStore,
  parent
) => {

  if (!window) { return }

  const { id } = getId (parent)
  const logo = document.querySelector (`#${ id }`)
  if (!logo) { return }


  if (parent === 'loader') {
    loaderPropertiesStore.patchIsPortrait ()
    loaderPropertiesStore.patchHeights ()
  }


  logo.removeAttribute ('style')

  logo
    .querySelectorAll ('*')
    .forEach (e => e.removeAttribute ('style'))


  const container = document.querySelector ({
      aside: '#__nuxt > section > aside',
      loader: '#loader'
    } [ parent ])


  const [ header, section, footer ]

    = (function _get (parts, elements = [], i = 0) {

        return i >= parts.length ? elements : _get (
            parts, [
              ...elements,
              document.querySelector (`#${ id } > ${ parts [ i ] }`)
            ], ++i
          )

      }) ([ 'header', 'section', 'footer' ])


  const { height: containerHeight } = container.getBoundingClientRect ()


  logo.style.width = '100%'

  const { height: sectionHeight } = section.getBoundingClientRect ()
  let { width: logoWidth } = logo.getBoundingClientRect ()


  const maxHeight = ((sP, lP) => ({
        aside: sP.heights.aside - sP.paddingTops.corrected.aside,
        loader: lP.heights.logo
      } [ parent ])
    ) (
      screenPropertiesStore.$state.screenProperties,
      loaderPropertiesStore.$state.loaderProperties
    )


  const logoHeight = (height =>
      [ height, maxHeight ] [ +(height > maxHeight) ]
    ) (logoWidth / PHI)


  logoWidth = logoHeight * PHI

  logo.style.height = `${ logoHeight }px`
  logo.style.width = `${ logoWidth }px`


  ;(nav =>
    nav && (nav.style.height = `${ logoHeight / PHI }px`)
  ) (container.querySelector ('nav'))


  header.style.height = `${ logoHeight / PHI - sectionHeight / 2 }px`

  footer.style.height
    = `${ logoHeight / (PHI ** 2) - sectionHeight / 2 }px`


  const { height: headerHeight } = header.getBoundingClientRect ()

  const headerPaddingTop = headerHeight / (PHI ** 4)
  const headerPaddingBottom = headerHeight / (PHI ** 3)

  const headerContentHeight
    = headerHeight - headerPaddingTop - headerPaddingBottom


  const { height: footerHeight } = footer.getBoundingClientRect ()

  const footerPaddingTop = footerHeight / (PHI ** 4)
  const footerPaddingBottom = footerHeight / (PHI ** 3)

  const footerContentHeight
    = footerHeight - footerPaddingTop - footerPaddingBottom


  header.style.paddingTop = `${ headerPaddingTop }px`
  header.style.paddingBottom = `${ headerPaddingBottom }px`

  footer.style.paddingTop = `${ footerPaddingTop }px`
  footer.style.paddingBottom = `${ footerPaddingBottom }px`

  const headerFontSize = headerContentHeight / (PHI * 3)
  const footerFontSize = footerContentHeight / (PHI * 2)
  

  document.querySelectorAll (`#${ id } > header p`).forEach (p => {
    p.style.fontSize = `${ headerFontSize }px`
    p.style.width = `${ headerFontSize }px`
  })


  document.querySelectorAll (`#${ id } > footer p`).forEach (p => {
    p.style.fontSize = `${ footerFontSize }px`
    p.style.width = `${ headerFontSize }px`
      /*
        stick to header font size, not to footer font size
      */
  })


  screenPropertiesStore.patchRatioIndex (window)
  screenPropertiesStore.patchHeights ()
  screenPropertiesStore.patchPaddingTops ()
  screenPropertiesStore.patchWidths ()

  logoPropertiesStore.patchHeight (logoHeight)
  logoPropertiesStore.patchWidth (logoWidth)


  if (parent === "loader") {
    loadingStore.patchShowLogo ()
  }

}