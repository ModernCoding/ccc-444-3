export default (screenPropertiesStore, noMachine) => {

  (index =>
    index && index.classList.remove ('no-machine')
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


  if (!figure) { return noMachine.value = true }
  figure.removeAttribute ('style')

  const slogan = document.querySelector ('#slogan')


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

        if (!img) { return noMachine.value = true }
        img.removeAttribute ('style')


        noMachine.value = (() => {

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


        noMachine.value && (figure.style.display = 'none')

        screenPropertiesStore.patchRatioIndex (window)
        screenPropertiesStore.patchHeights ()
        screenPropertiesStore.patchPaddingTops ()


        screenProperties.ratioIndex < 2 && noMachine.value && (index =>
            index && index.classList.add ('no-machine')
          ) (document.querySelector ('#index'))


        slogan && (() => {

            slogan.removeAttribute ('style')
            
            screenProperties.ratioIndex < 2 && noMachine.value
                ? slogan.classList.remove ('text-uppercase')
                : slogan.classList.add ('text-uppercase')

          }) ()

      },


    () => {

        const logo = document.querySelector ('#logo')
        if (!logo) { return noMachine.value = true }


        const marginTop = screenProperties.heights.header / PHI

        const height = screenProperties.heights.aside
            - logo.getBoundingClientRect ().height
            - marginTop


        figure.style.marginTop = `${ marginTop }px`
        figure.style.height = `${ height }px`

        const img = figure.querySelector ('img')

        if (!img) { return noMachine.value = true }
        img.removeAttribute ('style')


        noMachine.value = (() => {

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


        noMachine.value && (figure.style.display = 'none')


        slogan && (() => {

            slogan.classList.remove ('text-uppercase')
            slogan.removeAttribute ('style')

            !noMachine.value && (
                slogan.style.marginTop = `${ marginTop / PHI }px`
              )

          }) ()

        screenPropertiesStore.patchRatioIndex (window)
        screenPropertiesStore.patchHeights ()
        screenPropertiesStore.patchPaddingTops ()

      },


    () => {

        noMachine.value = false
        figure.style.height = `${ screenProperties.heights.main }px`
        slogan && slogan.classList.add ('text-uppercase')

      }

  ] [ screenProperties.ratioIndex - 1 ] ()

}