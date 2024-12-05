import { handleMenu } from './_localGuestTechTeamLead/handleMenu'
import { handlePicture } from './_localGuestTechTeamLead/handlePicture'
import { handleText } from './_localGuestTechTeamLead/handleText'
import { handleWhy } from './_localGuestTechTeamLead/handleWhy'


export default (screenPropertiesStore, logoProperties) => {

  const { screenProperties } = storeToRefs (screenPropertiesStore)

  handleWhy (screenPropertiesStore, logoProperties)
  handleMenu (screenProperties.value)
  handlePicture (screenProperties.value)
  handleText (screenProperties.value)

}