export default screenPropertiesStore => {

  (main => {

    if (!main) { return }


    (mainContent => {
      
      if (!mainContent) { return }
      mainContent.removeAttribute ('style')
      
      if (main.scrollHeight <= main.clientHeight + PHI) { return }

      // if (mainContent.scrollHeight <= mainContent.clientHeight) {
      //   return
      // }


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
      screenPropertiesStore.$state.screenProperties.ratioIndex
    )

  ) (document.querySelector ('#__nuxt'))

}