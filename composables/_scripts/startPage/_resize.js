import { handleMachine } from './_local/handleMachine'
import { handleSlogan } from './_local/handleSlogan'

const ctaScripts = collectCtaScriptsFromComposable ()


export default (screenPropertiesStore, logoProperties) => {
  
  const { screenProperties } = storeToRefs (screenPropertiesStore)

  ctaScripts.equalize (screenProperties, logoProperties)
  ctaScripts.setFontSize ()

  handleMachine (screenPropertiesStore, logoProperties)
  handleSlogan (screenProperties.value)

}