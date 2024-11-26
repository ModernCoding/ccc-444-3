export const handleJustFacts = (
  screenPropertiesStore,
  logoProperties
) => {

  const { screenProperties: { value: screenProperties } }
    = storeToRefs (screenPropertiesStore)


  const justFacts = document.querySelector ('.o-just-facts')
  if (!justFacts) { return }
  
  justFacts.removeAttribute ('style')


  ;[

    () => {

        const marginTop = screenProperties.heights.header / PHI

        const height = screenProperties.heights.aside
            - logoProperties.value.height


        justFacts.style.height = `${ height }px`

      },
  

    () => {

        justFacts.style.height
          = `${ screenProperties.heights.footer }px`

      },
  
  ] [ +(screenProperties.ratioIndex < 2) ] ()

}