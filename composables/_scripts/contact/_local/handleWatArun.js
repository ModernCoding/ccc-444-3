export const handleWatArun = screenPropertiesStore => {

  const { screenProperties: { value: screenProperties } }
    = storeToRefs (screenPropertiesStore)

  const figure = document.querySelector ('.o-wat-arun')
  figure && figure.removeAttribute ('style')


  screenPropertiesStore.patchRatioIndex (window)
  screenPropertiesStore.patchHeights ()
  screenPropertiesStore.patchPaddingTops ()
  screenPropertiesStore.patchWidths ()


  figure && (height => figure.style.height = `${ height }px`) (

      screenProperties.heights [
        [ 'aside', 'main' ] [ +(screenProperties.ratioIndex > 1) ]
      ]

    )

}