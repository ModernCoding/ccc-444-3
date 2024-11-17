import { handleContactInfo } from './_local/handleContactInfo'
import { handleGoogleMapsLink } from './_local/handleGoogleMapsLink'
import { handleWatArun } from './_local/handleWatArun'


export default (screenPropertiesStore, logoProperties) => {
  
  const { screenProperties } = storeToRefs (screenPropertiesStore)

  handleWatArun (screenPropertiesStore, logoProperties)
  handleGoogleMapsLink (screenProperties.value)
  handleContactInfo (screenProperties.value)

}