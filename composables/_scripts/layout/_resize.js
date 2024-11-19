import setFontSizeHeader from './_setFontSizeHeader'
import setMainDimensions from './_setMainDimensions'


const contactScripts = collectContactScriptsFromComposable ()
const ctaScripts = collectCtaScriptsFromComposable ()
const startPageScripts = collectStartPageScriptsFromComposable ()


export default (
  loadingStore,
  logoPropertiesStore,
  pagesStore,
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

    switch (route.name) {

      case "contact":

        contactScripts
          .resize (screenPropertiesStore, pagesStore, logoProperties)
      
        break


      case "index":
        startPageScripts.resize (screenPropertiesStore, logoProperties)
        break

      default:
        break

    }


    const _run = () => {

        setFontSizeHeader ()

        loadingStore.patchIsImageLoadingComplete (false)
        loadingStore.patchIs (false)
        loadingStore.patchIsResizingMode (false)

      }


    loading.value.is ? setTimeout (_run, DELAY_TIMES.ELEMENT) : _run ()

  }, delay)

}