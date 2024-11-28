import { handleTitle } from './_local/handleTitle'


export default (screenPropertiesStore, logoProperties) => {
  
  const { screenProperties } = storeToRefs (screenPropertiesStore)

  handleTitle (screenPropertiesStore, logoProperties)

}