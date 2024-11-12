export default (
  screenPropertiesStore,
  logoProperties,
  isLocationInFooter
) => {

  const { screenProperties: { value: screenProperties } }
    = storeToRefs (screenPropertiesStore)

  const figure = document.querySelector ('.o-wat-arun')


  if (!figure) { return isLocationInFooter.value = true }
  figure.removeAttribute ('style')

  const location = document.querySelector ('.o-location')
  location && location.removeAttribute ('style')


  ;[

    () => {

        isSloganInFooter.value = true

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

        if (!img) { return isSloganInFooter.value = true }
        img.removeAttribute ('style')


        isSloganInFooter.value = (() => {

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


        isSloganInFooter.value && (figure.style.display = 'none')


        slogan && (() => {

            const h1 = slogan.querySelector ('h1')
            h1 && h1.classList.remove ('text-uppercase')

            !isSloganInFooter.value && (() => {
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
          = `${ screenProperties.heights.main }px`

        location && location.classList.add ('text-uppercase')


        const img = figure.querySelector ('img')
        if (!img) { return isLocationInFooter.value = true }

        isLocationInFooter.value = img.getBoundingClientRect ().width
            > screenProperties.widths.main / PHI

      }

  ] [ screenProperties.ratioIndex - 1 ] ()

}