export default (
  screenPropertiesStore,
  logoProperties,
  isLocationInFooter
) => {

  const { screenProperties: { value: screenProperties } }
    = storeToRefs (screenPropertiesStore)
  console.log (screenProperties);

  const figure = document.querySelector ('.o-wat-arun')


  if (!figure) { return isLocationInFooter.value = true }
  figure.removeAttribute ('style')

  const location = document.querySelector ('.o-location')
  location && location.removeAttribute ('style')


  screenPropertiesStore.patchRatioIndex (window)
  screenPropertiesStore.patchHeights ()
  screenPropertiesStore.patchPaddingTops ()
  screenPropertiesStore.patchWidths ()

  figure.style.height
    = `${ screenProperties.heights.main }px`

  location && location.classList.remove ('text-uppercase')


  const img = figure.querySelector ('img')
  if (!img) { return isLocationInFooter.value = true }

  isLocationInFooter.value = img.getBoundingClientRect ().width
      > screenProperties.widths.main / PHI

  h1
    && !isLocationInFooter.value
    && h1.classList.add ('text-uppercase')

}