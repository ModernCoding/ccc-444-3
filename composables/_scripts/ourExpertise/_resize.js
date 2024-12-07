import { handleAda2 } from './_local/handleAda2'
import { handleExpertise } from './_local/handleExpertise'
import { handleSlogan } from './_local/handleSlogan'
import { handleTitle } from './_local/handleTitle'


export default (screenPropertiesStore, logoProperties) => {

  const { screenProperties } = storeToRefs (screenPropertiesStore)
  
  handleAda2 (screenPropertiesStore, logoProperties)
  handleSlogan (screenProperties.value)
  handleTitle (screenPropertiesStore, logoProperties)
  handleExpertise (screenProperties.value)
  
}