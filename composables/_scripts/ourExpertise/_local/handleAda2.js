export const handleAda2 = (screenPropertiesStore, logoProperties) => {

  const { screenProperties: { value: screenProperties } }
    = storeToRefs (screenPropertiesStore)

  const sectionHeight = (section =>
      section ? section.getBoundingClientRect ().height : 0
    ) (document.querySelector ('#our-expertise > section'))


  const figure = document.querySelector ('.o-ada-2')
  if (!figure) { return }
  
  figure.removeAttribute ('style')


  ;[

    () => {

        const paddingTop
          = screenProperties.paddingTops.calculated.main / PHI

        const height = screenProperties.heights.main
            - screenProperties.paddingTops.corrected.main
            - sectionHeight


        figure.style.paddingTop = `${ paddingTop }px`
        figure.style.height = `${ height }px`

        const img = figure.querySelector ('img')

        if (!img) { return }
        img.removeAttribute ('style')


        switch (true) {

          case  height <= 0:
          case  img.getBoundingClientRect ().width <= 0:

          case  figure
            .getBoundingClientRect ()
            .width / img.getBoundingClientRect ().width > PHI ** 2:

            figure.style.display = 'none'
            break


          default:
            break

        }


        screenPropertiesStore.patchRatioIndex (window)
        screenPropertiesStore.patchHeights ()
        screenPropertiesStore.patchPaddingTops ()
        screenPropertiesStore.patchWidths ()

      },


    () => {

        const marginTop = screenProperties.heights.header / PHI

        const height = screenProperties.heights.aside
            - logoProperties.value.height
            - marginTop


        figure.style.marginTop = `${ marginTop }px`
        figure.style.height = `${ height }px`

        const img = figure.querySelector ('img')
        if (!img) { return }


        img.removeAttribute ('style')


        switch (true) {

          case  height <= 0:
          case  img.getBoundingClientRect ().width <= 0:

          case  figure
            .getBoundingClientRect ()
            .width / img.getBoundingClientRect ().width > PHI ** 2:

            figure.style.display = 'none'
            break


          default:
            break

        }


        screenPropertiesStore.patchRatioIndex (window)
        screenPropertiesStore.patchHeights ()
        screenPropertiesStore.patchPaddingTops ()
        screenPropertiesStore.patchWidths ()

      },


    () => {

        screenPropertiesStore.patchRatioIndex (window)
        screenPropertiesStore.patchHeights ()
        screenPropertiesStore.patchPaddingTops ()
        screenPropertiesStore.patchWidths ()

        figure.style.height = `${ screenProperties.heights.main }px`

      }

  ] [ screenProperties.ratioIndex - 1 ] ()

}