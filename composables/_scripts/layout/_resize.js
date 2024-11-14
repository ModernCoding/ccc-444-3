import setFontSizeHeader from './_setFontSizeHeader'
import setMainDimensions from './_setMainDimensions'


const ctaScripts = collectCtaScriptsFromComposable ()
const startPageScripts = collectStartPageScriptsFromComposable ()


export default (
  loadingStore,
  logoPropertiesStore,
  screenPropertiesStore,
  route,
  delay = 0
) => {

  if (!window) { return loadingStore.patchIs (false) }

  const { loading } = storeToRefs (loadingStore)
  const { logoProperties } = storeToRefs (logoPropertiesStore)
  const { screenProperties } = storeToRefs (screenPropertiesStore)


  setMainDimensions (screenPropertiesStore)
  setFontSizeHeader ()
  ctaScripts.equalizeInHeader (screenProperties)


  setTimeout (() => {

    ctaScripts.equalize (screenProperties, logoProperties)
    ctaScripts.setFontSize ()

    startPageScripts
      .handleMachine (screenPropertiesStore, logoProperties)

    startPageScripts.handleSlogan (screenProperties.value)


    const _run = () => {

        setFontSizeHeader ()

        loadingStore.patchIsImageLoadingComplete (false)
        loadingStore.patchIs (false)
        loadingStore.patchIsResizingMode (false)

      }


    loading.value.is ? setTimeout (_run, DELAY_TIMES.ELEMENT) : _run ()

  }, delay)

}