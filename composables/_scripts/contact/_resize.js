import { handleContact } from './_local/handleContact'
import { handleGoogleMapsLink } from './_local/handleGoogleMapsLink'
import { handleWatArun } from './_local/handleWatArun'


export default (screenPropertiesStore, logoProperties) => {
  
  const { screenProperties } = storeToRefs (screenPropertiesStore)

  handleWatArun (screenPropertiesStore)
  handleContact (screenProperties.value, logoProperties.value)
  handleGoogleMapsLink (screenProperties.value)

}