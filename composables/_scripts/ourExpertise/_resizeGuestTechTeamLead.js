import { handleMenu } from './_localGuestTechTeamLead/handleMenu'
import { handlePicture } from './_localGuestTechTeamLead/handlePicture'
import { handleText } from './_localGuestTechTeamLead/handleText'
import { handleWhy } from './_localGuestTechTeamLead/handleWhy'


export default (screenPropertiesStore) => {

  const { screenProperties: { value: screenProperties } }
    = storeToRefs (screenPropertiesStore)


  handleWhy (screenProperties)
  handleMenu (screenProperties)
  handlePicture (screenProperties)
  handleText (screenProperties)

}