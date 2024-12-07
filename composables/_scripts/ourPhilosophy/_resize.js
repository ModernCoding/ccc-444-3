import { handleMenu } from './_local/handleMenu'
import { handlePicture } from './_local/handlePicture'
import { handleText } from './_local/handleText'
import { handleQuote } from './_local/handleQuote'


export default screenPropertiesStore => {

  const { screenProperties: { value: screenProperties } }
    = storeToRefs (screenPropertiesStore)


  handleQuote (screenProperties)
  handleMenu (screenProperties)
  handlePicture (screenProperties)
  handleText (screenProperties)

}