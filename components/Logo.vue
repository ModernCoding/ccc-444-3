<script setup>

  const screenStore = defineScreenStoreFromComposable () ()


  const setDimensions = () => {

    const logo = document.querySelector ('#logo')
    if (!logo) { return }

    logo.removeAttribute ('style')

    logo
      .querySelectorAll ('*')
      .forEach (e => e.removeAttribute ('style'))


    const aside = document.querySelector ('#__nuxt > section > aside')
    const header = document.querySelector ('#logo > header')
    const section = document.querySelector ('#logo > section')
    const footer = document.querySelector ('#logo > footer')

    const { height: asideHeight } = aside.getBoundingClientRect ()


    const asidePaddingTop = parseFloat (

        window
          .getComputedStyle (aside)
          .getPropertyValue ('padding-top')
          .split ('px')
          .join ('')

      )


    logo.style.width = '100%'

    const { height: sectionHeight } = section.getBoundingClientRect ()
    let { width: logoWidth } = logo.getBoundingClientRect ()

    const logoHeight = ((height, maxHeight) =>
        [ height, maxHeight ] [ +(height > maxHeight) ]
      ) (
        logoWidth / PHI,
        // (asideHeight - asidePaddingTop) / PHI
        (asideHeight - asidePaddingTop)
      )


    logoWidth = logoHeight * PHI

    logo.style.height = `${ logoHeight }px`
    logo.style.width = `${ logoWidth }px`


    ;(nav => {
      if (!nav) { return }
      nav.style.height = `${ logoHeight / PHI }px`
    }) (aside.querySelector ('nav'))


    header.style.height
      = `${ logoHeight / PHI - sectionHeight / 2 }px`

    footer.style.height
      = `${ logoHeight / (PHI ** 2) - sectionHeight / 2 }px`


    const { height: headerHeight } = header.getBoundingClientRect ()

    const headerPaddingTop = headerHeight / (PHI ** 4)
    const headerPaddingBottom = headerHeight / (PHI ** 3)

    const headerContentHeight
      = headerHeight - headerPaddingTop - headerPaddingBottom


    const { height: footerHeight } = footer.getBoundingClientRect ()

    const footerPaddingTop = footerHeight / (PHI ** 4)
    const footerPaddingBottom = footerHeight / (PHI ** 3)

    const footerContentHeight
      = footerHeight - footerPaddingTop - footerPaddingBottom


    header.style.paddingTop = `${ headerPaddingTop }px`
    header.style.paddingBottom = `${ headerPaddingBottom }px`

    footer.style.paddingTop = `${ footerPaddingTop }px`
    footer.style.paddingBottom = `${ footerPaddingBottom }px`

    const headerFontSize = headerContentHeight / (PHI * 3)
    const footerFontSize = footerContentHeight / (PHI * 2)
    

    document.querySelectorAll ('#logo > header p').forEach (p => {
      p.style.fontSize = `${ headerFontSize }px`
      p.style.width = `${ headerFontSize }px`
    })


    document.querySelectorAll ('#logo > footer p').forEach (p => {
      p.style.fontSize = `${ footerFontSize }px`
      p.style.width = `${ headerFontSize }px`
        /*
          stick to header font size, not to footer font size
        */
    })


    screenStore.patchIsPortrait ()
    screenStore.patchPortraitHeights ()
    screenStore.patchPaddingTops ()

  }


  onMounted (() => {
    setDimensions ()
    window.addEventListener ('resize', setDimensions)
  })

</script>


<template>

  <article id="logo">

    <header>

      <div>

        <div
          v-for="i in 3" :key="i"
          class="d-flex align-items-center justify-content-end"
        >
          <p>c</p>
        </div>
        
      </div>


      <div>

        <div class="d-flex align-items-center">
          <p>o</p>
          <p>d</p>
          <p>i</p>
          <p>n</p>
          <p>g</p>
        </div>

        <div class="d-flex align-items-center">
          <p>r</p>
          <p>a</p>
          <p>f</p>
          <p>t</p>
          <p>i</p>
          <p>n</p>
          <p>g</p>
        </div>

        <div class="d-flex align-items-center">
          <p>o</p>
          <p>n</p>
          <p>s</p>
          <p>u</p>
          <p>l</p>
          <p>t</p>
          <p>i</p>
          <p>n</p>
          <p>g</p>
        </div>

      </div>

    </header>


    <section>

      <div>
        <div></div>
      </div>
      
      <div>
        <div></div>
      </div>
        
    </section>


    <footer class="o-font-th">

      <div>

        <div class="d-flex align-items-center justify-content-end">
          <p v-for="i in 3" :key="i">๔</p>
        </div>
    
      </div>
    

      <div>

        <div class="d-flex align-items-center">
          <p>ซ</p>
          <p>อ</p>
          <p>ฟ</p>
          <p>ต์</p>
          <p>แ</p>
          <p>ว</p>
          <p>ร์</p>
        </div>

        <div class="d-flex align-items-center">
          <p>โ</p>
          <p>ซ</p>
          <p>ลู</p>
          <p>ชั่</p>
          <p>น</p>
        </div>

      </div>

    </footer>
  
  </article>

</template>


<style
  scoped
  src="@/assets/sass/components/logo.sass"
  lang="sass"
></style>