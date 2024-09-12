<script setup>

  import Slogan from './.partials/slogan'

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
    setFontSize ()
    window.addEventListener ('resize', setFontSize)
  })


  onUpdated (setFontSize)

</script>


<template>

  <article class="d-flex align-items-center">

    <figure>

      <picture
        class="d-flex align-items-center justify-content-center"
      >
      
        <img
          src="/images/tharrawaddy-min-bell.png"
          alt="Tharrawaddy Min Bell"
          loading="lazy"
        >
      
      </picture>


      <figcaption class="fw-bold">Email us</figcaption>

    </figure>


    <figure>

      <picture
        class="d-flex align-items-center justify-content-center"
      >
      
        <img
          src="/images/bus.png"
          alt="Charles Babbage's analytical engine"
          loading="lazy"
        >
      
      </picture>


      <figcaption class="fw-bold">Request call</figcaption>

    </figure>


    <figure>

      <picture
        class="d-flex align-items-center justify-content-center"
      >
      
        <img
          src="/images/compass.png"
          alt="Charles Babbage's analytical engine"
          loading="lazy"
        >
      
      </picture>


      <figcaption class="fw-bold">Find us</figcaption>

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