<script setup>

  import Slogan from './.partials/slogan'

  const equalizeCtas = (
    heighest = 0,
    pictures = document.querySelectorAll ('#index > section picture'),
    i = 0
  ) => {

    if (i >= pictures.length) {

      pictures
        .forEach (picture => picture.style.height = `${ heighest }px`)

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


    <figure>
    
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