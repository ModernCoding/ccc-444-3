import { handleIntroduction } from './_local/handleIntroduction'
import { handleMembers } from './_local/handleMembers'
import { handleTitle } from './_local/handleTitle'


export default (screenPropertiesStore, logoProperties) => {
  
  const { screenProperties } = storeToRefs (screenPropertiesStore)

  handleIntroduction (screenProperties.value)
  handleMembers (screenProperties.value)
  handleTitle (screenPropertiesStore, logoProperties)

}