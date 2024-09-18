<script setup>

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
  <h1 class="text-center">We craft your app!</h1>
</template>


<style
  scoped
  src="@/assets/sass/pages/index.sass"
  lang="sass"
></style>