export default screenPropertiesStore => {

  const { screenProperties: { value: screenProperties } }
    = storeToRefs (screenPropertiesStore)


  ;(main => {

    if (!main) { return }


    (mainContent => {

      if (!mainContent) { return }
      mainContent.removeAttribute ('style')


      switch (true) {

        case mainContent.scrollHeight <= mainContent.clientHeight:
        case [ 'index', 'contact' ].includes (useRoute ().name):
          return mainContent.style.overflowY = 'hidden'

        default:
          break

      }


      const mainPaddingLeft = parseInt (

          window
            .getComputedStyle (document.querySelector ('#__nuxt'))
            .getPropertyValue ('padding-right')
            .split ('px')
            .join ('')

        )


      mainContent.style.paddingRight = `${ mainPaddingLeft / PHI }px`

    }) (main.querySelector ('*'))

  }) (document.querySelector ('main[role="main"]'))


  document
    .documentElement
    .style
    .setProperty ('--vh', `${ window.innerHeight * 0.01 }px`)


  screenPropertiesStore.patchRatioIndex (window)
  screenPropertiesStore.patchHeights ()
  screenPropertiesStore.patchPaddingTops ()
  screenPropertiesStore.patchWidths ()


  ;(nuxt =>

    nuxt && nuxt.setAttribute (
      'data-number-of-parts',
      screenProperties.ratioIndex
    )

  ) (document.querySelector ('#__nuxt'))

}