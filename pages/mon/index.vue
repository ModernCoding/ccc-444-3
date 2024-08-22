<script setup>

  const setFontSize = () => {

    const indexFigcaption
      = document.querySelector ('#location-figcaption')

    if (!indexFigcaption) { return }

    const indexFigcaptionDivs
      = document.querySelectorAll ('#location-figcaption > div')


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

  <article>

    <figure class="d-flex flex-column align-items-center">

      <picture
        class="d-flex align-items-center justify-content-center"
      >
      
        <NuxtImg
          src="/images/shwedagon.png"
          alt="Shwedagon"
          loading="lazy"
        />
      
      </picture>

      
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

        id="location-figcaption"
      >
        <!-- <div>Nous manufacturons</div>
        <div>votre application !</div> -->
        <div>Mon is from Burma</div>
<!--         <div>Wir schneiden</div>
        <div>Ihre App!</div> -->
      </figcaption>

    </figure>

  </article>

</template>


<style
  scoped
  src="@/assets/sass/pages/location/index.sass"
  lang="sass"
></style>