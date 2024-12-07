import setFontSizeHeader from './_setFontSizeHeader'
import setMainDimensions from './_setMainDimensions'


const contactScripts = collectContactScriptsFromComposable ()
const ctaScripts = collectCtaScriptsFromComposable ()
const ladyScripts = collectLadyScriptsFromComposable ()
const ourExpertiseScripts = collectOurExpertiseScriptsFromComposable ()

const ourPhilosophyScripts
  = collectOurPhilosophyScriptsFromComposable ()

const startPageScripts = collectStartPageScriptsFromComposable ()
const teamScripts = collectTeamScriptsFromComposable ()


export default (
  loadingStore,
  logoPropertiesStore,
  screenPropertiesStore,
  route,
  delay = 0
) => {

  if (!window) { return loadingStore.patchIs (false) }

  const { loading } = storeToRefs (loadingStore)
  const { logoProperties } = storeToRefs (logoPropertiesStore)
  const { screenProperties } = storeToRefs (screenPropertiesStore)


  setMainDimensions (screenPropertiesStore)
  setFontSizeHeader ()
  ctaScripts.equalizeInHeader (screenProperties)


  setTimeout (() => {

    switch (route.name) {

      case "contact":
        contactScripts.resize (screenPropertiesStore, logoProperties)
        break

      case "index":
        startPageScripts.resize (screenPropertiesStore, logoProperties)
        break

      case "ladies-in-it":
        ladyScripts.resize (screenPropertiesStore)
        break


      case "our-expertise":

        ourExpertiseScripts
          .resize (screenPropertiesStore, logoProperties)

        break


      case "our-expertise-consulting":
      case "our-expertise-guest-tech-team-lead":
      case "our-expertise-our-approach":
        
        ourExpertiseScripts.resizeSkills (screenPropertiesStore)
        ctaScripts.equalize (screenProperties, logoProperties)
        ctaScripts.setFontSize ()
        break


      case "our-philosophy":
        ourPhilosophyScripts.resize (screenPropertiesStore)
        ctaScripts.equalize (screenProperties, logoProperties)
        ctaScripts.setFontSize ()
        break


      case "team":
        teamScripts.resize (screenPropertiesStore, logoProperties)
        break


      case "team-michel":
      case "team-mon":
      case "team-fah":
      case "team-babe":

        teamScripts.resizeMember (screenPropertiesStore)
        break


      default:
        break

    }


    const _run = () => {

        setFontSizeHeader ()

        loadingStore.patchIsImageLoadingComplete (false)
        loadingStore.patchIs (false)
        loadingStore.patchIsResizingMode (false)
        loadingStore.patchIsVeilMode (false)

      }


    loading.value.is ? setTimeout (_run, DELAY_TIMES.ELEMENT) : _run ()

  }, delay)

}