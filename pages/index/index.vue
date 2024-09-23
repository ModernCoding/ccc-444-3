<script setup>

  import Machine from './.partials/machine'
  import Slogan from './.partials/slogan'

  const screenStore = defineScreenStoreFromComposable () ()
  const { screen } = storeToRefs (screenStore)

  const noMachine = ref (false)


  const equalizeCtas = (

    heighestPicture = 0,
    heighestFigcaption = 0,
    pictures = document.querySelectorAll ('#index > section picture'),

    figcaptions
      = document.querySelectorAll ('#index > section figcaption'),

    i = 0

  ) => {

    if (i >= pictures.length) {

      (index =>
        index && index.classList.remove ('no-machine')
      ) (document.querySelector ('#index'))

      pictures.forEach (
          picture => picture.style.height = `${ heighestPicture }px`
        )


      const mainHeight = (index =>
          index ? index.getBoundingClientRect ().height : 0
        ) (document.querySelector ('main[role="main"]'))


      const sectionHeight = (section =>
          section ? section.getBoundingClientRect ().height : 0
        ) (document.querySelector ('#index > section'))


      const figcaptionPaddingTop = parseFloat (

          window
            .getComputedStyle (figcaptions [ 0 ])
            .getPropertyValue ('padding-top')
            .split ('px')
            .join ('')

        )


      ;(delta =>

        (heighestPicture > delta) && pictures.forEach (
            picture => picture.style.height = `${ delta }px`
          )
      
      ) (mainHeight - heighestFigcaption - figcaptionPaddingTop - screen.value.paddingTops.corrected.main)


      ;(figure => {

          if (!figure) { return noMachine.value = true }
          figure.removeAttribute ('style')

          const paddingTop
            = screen.value.paddingTops.calculated.main / PHI

          const height = screen.value.heights.main
              - screen.value.paddingTops.corrected.main
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

          screenStore.patchIsPortrait ()
          screenStore.patchHeights ()
          screenStore.patchPaddingTops ()


          screen.value.isPortrait && noMachine && (index =>
              index && index.classList.add ('no-machine')
            ) (document.querySelector ('#index'))


          ;(slogan =>

              slogan && (
                  
                  slogan.removeAttribute ('style'),
                  
                  screen.value.isPortrait && noMachine.value
                    ? slogan.classList.remove ('text-uppercase')
                    : slogan.classList.add ('text-uppercase')
                
                )

            ) (document.querySelector ('#slogan'))

        }) (document.querySelector ('#index > #charles-babbage'))


      ;(figure => {

          if (!figure) { return noMachine.value = true }
          figure.removeAttribute ('style')

          const logo = document.querySelector ('#logo')
          if (!logo) { return noMachine.value = true }


          const marginTop
            = screen.value.heights.header / PHI

          const height = screen.value.heights.aside
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


          ;(slogan => {

              if (!slogan) { return }
              slogan.classList.remove ('text-uppercase')
              slogan.removeAttribute ('style')

              !noMachine.value && (
                  slogan.style.marginTop = `${ marginTop / PHI }px`
                )
            
            }) (document.querySelector ('#slogan'))


          screenStore.patchIsPortrait ()
          screenStore.patchHeights ()
          screenStore.patchPaddingTops ()

        }) (
          document.querySelector ('#aside-content > #charles-babbage')
        )


      return

    }


    pictures [ i ].removeAttribute ('style')

    const pictureHeight = pictures [ i ].getBoundingClientRect ().height

    const figcaptionHeight
      = figcaptions [ i ].getBoundingClientRect ().height


    return equalizeCtas (

      [ heighestPicture, pictureHeight ] [
          +( pictureHeight > heighestPicture )
        ],

      [ heighestFigcaption, figcaptionHeight ] [
          +( figcaptionHeight > heighestFigcaption )
        ],

      pictures,
      figcaptions,
      ++i

    )

  }


  onMounted (() => {
    setTimeout (equalizeCtas, 180)
    window.addEventListener ('resize', () => equalizeCtas ())
  })


  onUpdated (equalizeCtas)

</script>


<template>

  <article id="index">
    <CallToActions />
  </article>


  <ClientOnly>

    <Teleport
      :to="[ '#aside-content', '#index' ] [ +screen.isPortrait ]"
    >
      <Machine />
    </Teleport>


    <Teleport
      :to="
          [ '#index', '#__nuxt > footer' ] [
            +(screen.isPortrait || noMachine)
          ]
        "
    >
      <Slogan />
    </Teleport>

  </ClientOnly>

</template>


<style
  scoped
  src="@/assets/sass/pages/index.sass"
  lang="sass"
></style>