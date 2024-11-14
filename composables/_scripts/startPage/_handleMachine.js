export default (screenPropertiesStore, logoProperties) => {

  (index =>
    index && index.classList.remove ('o-no-machine')
  ) (document.querySelector ('#index'))

  const { screenProperties: { value: screenProperties } }
    = storeToRefs (screenPropertiesStore)

  const sectionHeight = (section =>
      section ? section.getBoundingClientRect ().height : 0
    ) (document.querySelector ('#index > section'))


  const figure = document.querySelector ([
      '#index > .o-charles-babbage',
      '#aside-content > .o-charles-babbage',
      '#index-machine > .o-charles-babbage'
    ] [ screenProperties.ratioIndex - 1 ])


  if (!figure) {
    return screenPropertiesStore.patchIsSentenceInFooter ()
  }
  
  figure.removeAttribute ('style')

  const slogan = document.querySelector ('.o-slogan')
  slogan && slogan.removeAttribute ('style')


  ;[

    () => {

        screenPropertiesStore.patchIsSentenceInFooter ()

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


        slogan && (() => {

            const h1 = slogan.querySelector ('h1')
            if (!h1) { return }

            screenProperties.ratioIndex < 2 && noMachine
                ? h1.classList.remove ('text-uppercase')
                : h1.classList.add ('text-uppercase')

          }) ()

      },


    () => {

        const marginTop = screenProperties.heights.header / PHI

        const height = screenProperties.heights.aside
            - logoProperties.value.height
            - marginTop


        figure.style.marginTop = `${ marginTop }px`
        figure.style.height = `${ height }px`

        const img = figure.querySelector ('img')

        if (!img) {
          return screenPropertiesStore.patchIsSentenceInFooter ()
        }


        img.removeAttribute ('style')


        screenPropertiesStore.patchIsSentenceInFooter (

          (() => {

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

        )


        screenPropertiesStore.isSentenceInFooter
          && (figure.style.display = 'none')


        slogan && (() => {

            const h1 = slogan.querySelector ('h1')
            h1 && h1.classList.remove ('text-uppercase')

            !screenPropertiesStore.isSentenceInFooter && (() => {
                slogan.style.height = `${ height }px`
                slogan.style.marginTop = `${ marginTop }px`
              }) ()

          }) ()


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

        figure.style.height
          = `${ screenProperties.heights.main - PHI }px`

        const h1 = slogan ? slogan.querySelector ('h1') : null

        h1 && h1.classList.remove ('text-uppercase')


        const img = figure.querySelector ('img')

        if (!img) {
          return screenPropertiesStore.patchIsSentenceInFooter ()
        }


        screenPropertiesStore.patchIsSentenceInFooter (
          img.getBoundingClientRect ().width
            > screenProperties.widths.main / PHI
        )


        h1
          && !screenPropertiesStore.isSentenceInFooter
          && h1.classList.add ('text-uppercase')

      }

  ] [ screenProperties.ratioIndex - 1 ] ()

}