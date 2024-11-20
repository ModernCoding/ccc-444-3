export const handleWatArun = screenPropertiesStore => {

  const { screenProperties: { value: screenProperties } }
    = storeToRefs (screenPropertiesStore)

  const figure = document.querySelector ('.o-wat-arun')


  if (!figure) {
    return screenPropertiesStore.patchIsSentenceInFooter ()
  }
  
  figure.removeAttribute ('style')


  // formatting in 1-part mode is being done in handleContact

  screenProperties.ratioIndex > 1 && (() => {

      screenPropertiesStore.patchRatioIndex (window)
      screenPropertiesStore.patchHeights ()
      screenPropertiesStore.patchPaddingTops ()
      screenPropertiesStore.patchWidths ()

      figure.style.height = `${ screenProperties.heights.main }px`

    }) ()

}