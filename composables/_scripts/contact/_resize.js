import { handleLocation } from './_local/handleLocation'
import { handleWatArun } from './_local/handleWatArun'


export default (screenPropertiesStore, logoProperties) => {
  
  const { screenProperties } = storeToRefs (screenPropertiesStore)

  handleWatArun (screenPropertiesStore, logoProperties)
  handleLocation (screenProperties.value)

}