<script setup>

  import Machine from './.partials/machine'
  import Slogan from './.partials/slogan'

  const ctaScripts = collectCtaScriptsFromComposable ()
  const layoutScripts = collectLayoutScriptsFromComposable ()

  const screenPropertiesStore
    = defineScreenPropertiesStoreFromComposable () ()
  
  const { screenProperties } = storeToRefs (screenPropertiesStore)

  const noMachine = ref (false)


  const equalizeCtas = () => {

    if (!window) { return }


    ctaScripts.equalize (

      screenProperties,

      `${
        [ '#index', '#central' ] [ +(screenProperties.value.ratioIndex > 2) ]
      } .o-call-to-actions`

    )


    ;(index =>
      index && index.classList.remove ('no-machine')
    ) (document.querySelector ('#index'))


    const sectionHeight = (section =>
        section ? section.getBoundingClientRect ().height : 0
      ) (document.querySelector ('#index > section'))


    ;(figure => {

        if (!figure) { return noMachine.value = true }
        noMachine.value = false
        
        figure.removeAttribute ('style')

        figure.style.height
          = `${ screenProperties.value.heights.main }px`


        ;(slogan =>
            slogan && slogan.classList.add ('text-uppercase')
          ) (document.querySelector ('#slogan'))

      }) (
        document.querySelector ('#index-machine > .o-charles-babbage')
      )


    ;(figure => {

        if (!figure) { return noMachine.value = true }
        figure.removeAttribute ('style')


        const paddingTop
          = screenProperties.value.paddingTops.calculated.main / PHI

        const height = screenProperties.value.heights.main
            - screenProperties.value.paddingTops.corrected.main
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


        screenProperties.value.ratioIndex < 2 && noMachine && (index =>
            index && index.classList.add ('no-machine')
          ) (document.querySelector ('#index'))


        ;(slogan =>

            slogan && (
                
                slogan.removeAttribute ('style'),
                
                screenProperties.value.ratioIndex < 2 && noMachine.value
                    ? slogan.classList.remove ('text-uppercase')
                    : slogan.classList.add ('text-uppercase')
              
              )

          ) (document.querySelector ('#slogan'))

      }) (document.querySelector ('#index > .o-charles-babbage'))


    ;(figure => {

        if (!figure) { return noMachine.value = true }
        figure.removeAttribute ('style')

        const logo = document.querySelector ('#logo')
        if (!logo) { return noMachine.value = true }


        const marginTop
          = screenProperties.value.heights.header / PHI

        const height = screenProperties.value.heights.aside
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


        screenPropertiesStore.patchRatioIndex (window)
        screenPropertiesStore.patchHeights ()
        screenPropertiesStore.patchPaddingTops ()

      }) (
        document.querySelector ('#aside-content > .o-charles-babbage')
      )

      
    layoutScripts.setFontSize ()

  }


  onMounted (() => {
    
    setTimeout (() => equalizeCtas (), 180)
    window.addEventListener ('resize', () => equalizeCtas ())
    
    screen.orientation.addEventListener (
        'change',
        () => setTimeout (() => equalizeCtas (), 180)
      )

  })


  onUpdated (equalizeCtas)

</script>


<template>

  <article id="index">

    <CallToActions v-if="screenProperties.ratioIndex < 3" />
    <Machine v-if="screenProperties.ratioIndex < 2" />

    <div
      id="index-machine"
      class="d-flex align-items-center justify-content-center"
    >
      <Machine v-if="screenProperties.ratioIndex > 2" />
    </div>

  </article>


  <ClientOnly>

    <Teleport
      v-if="screenProperties.ratioIndex === 2"
      to="#aside-content"
    >
      <Machine />
    </Teleport>


    <Teleport

      v-if="screenProperties.ratioIndex < 3"

      :to="
          [ '#index', '#__nuxt > footer' ] [
            +(screenProperties.ratioIndex < 2 || noMachine)
          ]
        "

    >

      <Slogan />

    </Teleport>


    <Teleport
      v-else
      to="#index-machine"
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