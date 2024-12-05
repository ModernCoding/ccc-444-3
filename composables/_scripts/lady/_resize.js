import { handleJustFacts } from './_local/handleJustFacts'
import { handleLady } from './_local/handleLady'
import { handleMenu } from './_local/handleMenu'
import { handlePicture } from './_local/handlePicture'


export default screenPropertiesStore => {
  
  const { screenProperties: { value: screenProperties } }
    = storeToRefs (screenPropertiesStore)


  handleJustFacts (screenProperties)
  handleMenu (screenProperties)
  handleLady (screenProperties)
  handlePicture (screenProperties)

}