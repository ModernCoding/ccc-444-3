<script setup>

  import Machine from './.partials/machine'
  import Slogan from './.partials/slogan'

  const screenStore = defineScreenStoreFromComposable () ()
  const { screen } = storeToRefs (screenStore)


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

          if (!figure) { return }
          figure.removeAttribute ('style')

          const paddingTop
            = screen.value.paddingTops.calculated.main / PHI

          const height = screen.value.heights.main
              - screen.value.paddingTops.corrected.main
              - sectionHeight


          figure.style.paddingTop = `${ paddingTop }px`
          figure.style.height = `${ height }px`

          const img = figure.querySelector ('img')

          if (!img) { return displayMachine.value = false }
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

          screenStore.patchIsPortrait ()
          screenStore.patchPortraitHeights ()
          screenStore.patchPaddingTops ()


          screen.value.isPortrait && noMachine && (index =>
              index && index.classList.add ('no-machine')
            ) (document.querySelector ('#index'))


          ;(slogan =>

              slogan && (
                  screen.value.isPortrait && noMachine
                    ? slogan.classList.remove ('text-uppercase')
                    : slogan.classList.add ('text-uppercase')
                )

            ) (document.querySelector ('#slogan'))

        }) (document.querySelector ('#index > figure'))


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
    equalizeCtas ()
    window.addEventListener ('resize', () => equalizeCtas ())
  })


  onUpdated (equalizeCtas)

</script>


<template>

  <article id="index">
    <CallToActions />
    <Machine />
  </article>


  <ClientOnly>

    <Teleport to="#__nuxt > footer">
      <Slogan />
    </Teleport>

  </ClientOnly>

</template>


<style
  scoped
  src="@/assets/sass/pages/index.sass"
  lang="sass"
></style>