import { handleTeamMember } from './_localMember/handleTeamMember'
import { handleNames } from './_localMember/handleNames'


export default screenPropertiesStore => {

  const { screenProperties: { value: screenProperties } }
    = storeToRefs (screenPropertiesStore)
    
  handleNames (screenProperties)
  handleTeamMember (screenProperties)
}