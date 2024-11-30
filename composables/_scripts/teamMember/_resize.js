import { handleTeamMember } from './_local/handleTeamMember'
import { handleNames } from './_local/handleNames'


export default screenPropertiesStore => {
  handleNames (screenPropertiesStore)
  handleTeamMember (screenPropertiesStore)
}