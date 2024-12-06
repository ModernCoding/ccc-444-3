import { handleMenu } from './_localSkills/handleMenu'
import { handlePicture } from './_localSkills/handlePicture'
import { handleText } from './_localSkills/handleText'
import { handleSkillTitle } from './_localSkills/handleSkillTitle'


export default (screenPropertiesStore) => {

  const { screenProperties: { value: screenProperties } }
    = storeToRefs (screenPropertiesStore)


  handleSkillTitle (screenProperties)
  handleMenu (screenProperties)
  handlePicture (screenProperties)
  handleText (screenProperties)

}