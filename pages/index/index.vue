<script setup>

  import Slogan from './.partials/slogan'

  const screenStore = defineScreenStoreFromComposable () ()
  const { screen } = storeToRefs (screenStore)


  const equalizeCtas = (
    heighest = 0,
    pictures = document.querySelectorAll ('#index > section picture'),
    i = 0
  ) => {

    if (i >= pictures.length) {

      (index =>
        index && index.classList.remove ('no-machine')
      ) (document.querySelector ('#index'))

      pictures
        .forEach (picture => picture.style.height = `${ heighest }px`)


      const sectionHeight = (section =>
          section ? section.getBoundingClientRect ().height : 0
        ) (document.querySelector ('#index > section'))


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

        }) (document.querySelector ('#index > figure'))


      return

    }


    pictures [ i ].removeAttribute ('style')

    const height = pictures [ i ].getBoundingClientRect ().height


    return equalizeCtas (
      [ heighest, height ] [ +( height > heighest ) ],
      pictures,
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

    <section>

      <figure>

        <picture>
        
          <img
            src="/images/tharrawaddy-min-bell-2.png"
            alt="Tharrawaddy Min Bell"
            loading="lazy"
          >
        
        </picture>


        <figcaption class="fw-bold">Email us</figcaption>

      </figure>


      <figure>

        <picture>
        
          <img
            src="/images/bus.png"
            alt="Request next call"
            loading="lazy"
          >
        
        </picture>


        <figcaption class="fw-bold">Request call</figcaption>

      </figure>


      <figure>

        <picture>
        
          <img
            src="/images/compass.png"
            alt="Bangsaen, Thailand"
            loading="lazy"
          >
        
        </picture>


        <figcaption class="fw-bold">Find us</figcaption>

      </figure>
      
    </section>


    <figure id="charles-babbage">
    
      <img
        src="/images/machine.png"
        alt="Charles Babbage's analytical engine"
        loading="lazy"
      >
    
    </figure>

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