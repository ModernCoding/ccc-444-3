import { handleJustFacts } from './_local/handleJustFacts'
import { handleMenu } from './_local/handleMenu'


export default (screenPropertiesStore, logoProperties) => {
  handleJustFacts (screenPropertiesStore, logoProperties)
  handleMenu (screenPropertiesStore, logoProperties)
}