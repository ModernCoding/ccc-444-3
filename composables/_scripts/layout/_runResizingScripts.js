import setFontSizeHeader from './_setFontSizeHeader'
import setMainDimensions from './_setMainDimensions'


export default (loadingStore, screenPropertiesStore) => {

  const { loading } = storeToRefs (loadingStore)
  setMainDimensions (screenPropertiesStore)

  const _run = () => {
      setFontSizeHeader ()
      loadingStore.patchIs (false)
      loadingStore.patchIsResizingMode (false)
    }

  loading.value.is ? setTimeout (_run, DELAY_TIMES.ELEMENT) : _run ()

}