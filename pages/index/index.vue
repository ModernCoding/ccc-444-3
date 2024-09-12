<script setup>

  import Footer from './.partials/footer'

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

    <figure class="d-flex flex-column align-items-center">

      <picture
        class="d-flex align-items-center justify-content-center"
      >
      
        <NuxtImg
          src="/images/tharrawaddy-min-bell.png"
          alt="Tharrawaddy Min Bell"
          loading="lazy"
        />
      
      </picture>


      <figcaption>
        <div>EMAIL</div>
        <div>US</div>
      </figcaption>

    </figure>


    <figure class="d-flex flex-column align-items-center">

      <picture
        class="d-flex align-items-center justify-content-center"
      >
      
        <NuxtImg
          src="/images/bus.png"
          alt="Charles Babbage's analytical engine"
          loading="lazy"
        />
      
      </picture>


      <figcaption>
        <div>REQUEST</div>
        <div>CALL</div>
      </figcaption>

    </figure>


    <figure class="d-flex flex-column align-items-center">

      <picture
        class="d-flex align-items-center justify-content-center"
      >
      
        <NuxtImg
          src="/images/compass.png"
          alt="Charles Babbage's analytical engine"
          loading="lazy"
        />
      
      </picture>


      <figcaption>
        <div>FIND</div>
        <div>US</div>
      </figcaption>

    </figure>

  </article>


      <!-- 
      <figcaption
        class="
            d-flex
            flex-column
            align-items-center
            justify-content-center
            text-center
            text-uppercase
            w-100
          "

        id="index-figcaption"
      > -->
        <!-- <div>Nous manufacturons</div>
        <div>votre application !</div> -->
        <!-- <div>We craft your app!</div> -->
<!--         <div>Wir schneiden</div>
        <div>Ihre App!</div> -->
      <!-- </figcaption> -->


  <Teleport to="#__nuxt > footer">
    <Footer />
  </Teleport>

</template>


<style
  scoped
  src="@/assets/sass/pages/index.sass"
  lang="sass"
></style>