export const handleWatArun = (
  screenPropertiesStore,
  logoProperties
) => {

  const { screenProperties: { value: screenProperties } }
    = storeToRefs (screenPropertiesStore)

  const figure = document.querySelector ('.o-wat-arun')


  if (!figure) {
    return screenPropertiesStore.patchIsSentenceInFooter ()
  }
  
  figure.removeAttribute ('style')


  const location = document.querySelector ('.o-location')
  
  location && (() => {

    location.removeAttribute ('style')

    location.querySelectorAll ('*').forEach (element =>
      element.removeAttribute ('style')
    )

  }) ()


  ;[

    () => {

        screenPropertiesStore.patchIsSentenceInFooter ()

        const paddingTop
          = screenProperties.paddingTops.calculated.main / PHI

        const height = screenProperties.heights.main
            - screenProperties.paddingTops.corrected.main


        figure.style.paddingTop = `${ paddingTop }px`
        figure.style.height = `${ height }px`

        const img = figure.querySelector ('img')

        if (!img) { return }
        img.removeAttribute ('style')


        const noMachine = (() => {

          switch (true) {

              case  height <= 0:
              case  img.getBoundingClientRect ().width <= 0:

              case  figure
                .getBoundingClientRect ()
                .width / img.getBoundingClientRect ().width > PHI ** 2:

                return true


              default:
                return false

            }

          }) ()


        noMachine && (figure.style.display = 'none')

        screenPropertiesStore.patchRatioIndex (window)
        screenPropertiesStore.patchHeights ()
        screenPropertiesStore.patchPaddingTops ()
        screenPropertiesStore.patchWidths ()


        screenProperties.ratioIndex < 2 && noMachine && (index =>
            index && index.classList.add ('o-no-machine')
          ) (document.querySelector ('#index'))


        location && (() => {

            const h1 = location.querySelector ('h1')
            if (!h1) { return }

            screenProperties.ratioIndex < 2 && noMachine
                ? h1.classList.remove ('text-uppercase')
                : h1.classList.add ('text-uppercase')

          }) ()

      },


    () => {

        screenPropertiesStore.patchRatioIndex (window)
        screenPropertiesStore.patchHeights ()
        screenPropertiesStore.patchPaddingTops ()
        screenPropertiesStore.patchWidths ()

        figure.style.height
          = `${ screenProperties.heights.main }px`


        const h1 = location ? location.querySelector ('h1') : null

        h1 && h1.classList.add ('text-uppercase')


        const img = figure.querySelector ('img')

        if (!img) {
          return screenPropertiesStore.patchIsSentenceInFooter ()
        }

          screenPropertiesStore.patchIsSentenceInFooter ()


        screenPropertiesStore.patchIsSentenceInFooter ([

            img.getBoundingClientRect ().height
              > screenProperties.heights.main / PHI,

            img.getBoundingClientRect ().width
              > screenProperties.widths.main / PHI

          ] [ +(screenProperties.ratioIndex > 2) ])



        screenProperties.ratioIndex === 2

          && !screenProperties.isSentenceInFooter
        
          && (() => {

              figure.style.height
                = `${ screenProperties.heights.main / PHI }px`

              location && (
                  location.style.height
                    = `${ screenProperties.heights.main / PHI ** 2 }px`
                )

            }) ()


        screenProperties.ratioIndex === 3

          && !screenProperties.isSentenceInFooter
        
          && location && (
              location.style.width
                = `${ screenProperties.widths.main / PHI ** 2 }px`
            )

      }

  ] [ +(screenProperties.ratioIndex > 1) ] ()

}