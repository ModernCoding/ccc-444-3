import { handleMenu } from './_local/handleMenu'
import { handlePicture } from './_local/handlePicture'
import { handleText } from './_local/handleText'
import { handleSkillTitle } from './_local/handleSkillTitle'


export default screenPropertiesStore => {

  const { screenProperties: { value: screenProperties } }
    = storeToRefs (screenPropertiesStore)


  handleSkillTitle (screenProperties)
  handleMenu (screenProperties)
  handlePicture (screenProperties)
  handleText (screenProperties)

}