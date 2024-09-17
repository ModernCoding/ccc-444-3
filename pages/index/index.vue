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


          switch (true) {

            case  img.getBoundingClientRect ().width <= 0:

            case  figure
              .getBoundingClientRect ()
              .width / img.getBoundingClientRect ().width > PHI ** 2:

              figure.style.display = 'none'
              break


            default:
              break

          }


          screenStore.patchIsPortrait ()
          screenStore.patchPortraitHeights ()
          screenStore.patchPaddingTops ()

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


  const setFontSize = () => {

    const indexFigcaption = document.querySelector ('#index-figcaption')
    if (!indexFigcaption) { return }

    const indexFigcaptionDivs
      = document.querySelectorAll ('#index-figcaption > div')


    ;(function _set (i = 2) {

      let totalHeight = 0

      const fontSize = indexFigcaption.getBoundingClientRect ().height
          / indexFigcaptionDivs.length
          / PHI ** i

      indexFigcaptionDivs.forEach (div => {
          div.style.fontSize = `${ fontSize }px`
          div.style.letterSpacing = `${ fontSize / PHI ** 2 }px`
          totalHeight += div.getBoundingClientRect ().height
        })


      switch (true) {

        case  indexFigcaption.getBoundingClientRect ().height
                < totalHeight:
      
        case  totalHeight > fontSize * indexFigcaptionDivs.length * PHI:

          return _set (++i)


        default:
          return
      
      }

    }) ()

  }


  onMounted (() => {
    
    equalizeCtas ()
    setFontSize ()
    
    window.addEventListener ('resize', () => {
      equalizeCtas ()
      setFontSize ()
    })
  
  })


  onUpdated (() => {
    equalizeCtas ()
    setFontSize ()
  })

</script>


<template>

  <article id="index">

    <section>

      <figure>

        <picture>
        
          <img
            src="/images/tharrawaddy-min-bell.png"
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