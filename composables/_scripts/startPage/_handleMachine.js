export default (
  screenPropertiesStore,
  logoProperties,
  isSloganInFooter
) => {

  (index =>
    index && index.classList.remove ('o-no-machine')
  ) (document.querySelector ('#index'))


  const screenProperties = screenPropertiesStore.$state.screenProperties

  const sectionHeight = (section =>
      section ? section.getBoundingClientRect ().height : 0
    ) (document.querySelector ('#index > section'))


  const figure = document.querySelector ([
      '#index > .o-charles-babbage',
      '#aside-content > .o-charles-babbage',
      '#index-machine > .o-charles-babbage'
    ] [ screenProperties.ratioIndex - 1 ])


  if (!figure) { return isSloganInFooter.value = true }
  figure.removeAttribute ('style')

  const slogan = document.querySelector ('.o-slogan')
  slogan && slogan.removeAttribute ('style')


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

        screenPropertiesStore.patchRatioIndex (window)
        screenPropertiesStore.patchHeights ()
        screenPropertiesStore.patchPaddingTops ()
        screenPropertiesStore.patchWidths ()


        screenProperties.ratioIndex < 2
          && isSloganInFooter.value
          && (index =>
              index && index.classList.add ('o-no-machine')
            ) (document.querySelector ('#index'))


        slogan && (() => {

            screenProperties.ratioIndex < 2 && isSloganInFooter.value
                ? slogan.classList.remove ('text-uppercase')
                : slogan.classList.add ('text-uppercase')

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

            slogan.classList.remove ('text-uppercase')

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
          = `${ screenProperties.heights.main - PHI }px`

        slogan && slogan.classList.remove ('text-uppercase')

        const img = figure.querySelector ('img')
        if (!img) { return isSloganInFooter.value = true }

        isSloganInFooter.value = img.getBoundingClientRect ().width
            > screenProperties.widths.main / PHI ** 2

        slogan
          && !isSloganInFooter.value
          && slogan.classList.add ('text-uppercase')

      }

  ] [ screenProperties.ratioIndex - 1 ] ()

}