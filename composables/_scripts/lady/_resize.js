import { handleJustFacts } from './_local/handleJustFacts'
import { handleLady } from './_local/handleLady'
import { handleMenu } from './_local/handleMenu'


export default (screenPropertiesStore, logoProperties) => {

  const { screenProperties } = storeToRefs (screenPropertiesStore)

  handleJustFacts (screenPropertiesStore, logoProperties)
  handleMenu (screenProperties.value)
  handleLady (screenProperties.value)

}