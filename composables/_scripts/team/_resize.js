import { handleIntroduction } from './_local/handleIntroduction'
import { handleTitle } from './_local/handleTitle'


export default (screenPropertiesStore, logoProperties) => {
  
  const { screenProperties } = storeToRefs (screenPropertiesStore)

  handleIntroduction (screenProperties.value)
  handleTitle (screenPropertiesStore, logoProperties)

}