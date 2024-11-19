import { handleContact } from './_local/handleContact'
import { handleGoogleMapsLink } from './_local/handleGoogleMapsLink'
import { handleWatArun } from './_local/handleWatArun'


export default (screenPropertiesStore, pagesStore, logoProperties) => {
  
  const { screenProperties } = storeToRefs (screenPropertiesStore)

  handleWatArun (screenPropertiesStore)
  handleGoogleMapsLink (screenProperties.value)
  
  handleContact (
    screenProperties.value,
    logoProperties.value,
    pagesStore
  )

}