<script setup>

  const setDimensions = () => {

    const logo = document.querySelector ('#logo')
    if (!logo) { return }

    logo
      .querySelectorAll ('*')
      .forEach (e => e.removeAttribute ('style'))


    const aside = document.querySelector ('#__nuxt > section > aside')
    const header = document.querySelector ('#logo > header')
    const section = document.querySelector ('#logo > section')
    const footer = document.querySelector ('#logo > footer')

    const { height: asideHeight } = aside.getBoundingClientRect ()

    const asidePaddingTop = window
        .getComputedStyle (aside)
        .getPropertyValue ('padding-top')
        .split ('px')
        .join ('')

    const asidePaddingBottom = window
        .getComputedStyle (aside)
        .getPropertyValue ('padding-bottom')
        .split ('px')
        .join ('')


    ;(function _format (i = 0) {

      logo.style.width = `${ 100 / PHI ** i }%`

      const { width: logoWidth } = logo.getBoundingClientRect ()
      const { height: sectionHeight } = section.getBoundingClientRect ()

      logo.style.height = `${ logoWidth / PHI }px`
      const { height: logoHeight } = logo.getBoundingClientRect ()

      if (
        logoHeight
          > (asideHeight - asidePaddingTop - asidePaddingBottom) / PHI
      ) { return _format (++i) }


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
      const headerLetterSpacing = headerFontSize / PHI
      const headerDivMargin = headerLetterSpacing / (PHI ** 2)

      const footerFontSize = footerContentHeight / (PHI * 2)
      const footerLetterSpacing = footerFontSize / PHI
      const footerDivMargin = footerLetterSpacing / (PHI ** 2)

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


      return

    }) ()

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