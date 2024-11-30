import { handleTeamMember } from './_local/handleTeamMember'
import { handleNames } from './_local/handleNames'


export default screenPropertiesStore => {

  const { screenProperties: { value: screenProperties } }
    = storeToRefs (screenPropertiesStore)
    
  handleNames (screenProperties)
  handleTeamMember (screenProperties)
}