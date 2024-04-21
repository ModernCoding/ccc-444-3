<script setup>

  const setDimensions = () => {

    const logo = document.querySelector ('#logo')
    if (!logo) { return }

    const header = logo.querySelector ('#logo > header')
    const section = logo.querySelector ('#logo > section')
    const footer = logo.querySelector ('#logo > footer')

    const { width: logoWidth } = logo.getBoundingClientRect ()
    const { height: sectionHeight } = section.getBoundingClientRect ()

    logo.style.height = `${ logoWidth / PHI }px`
    const { height: logoHeight } = logo.getBoundingClientRect ()

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

    const footerFontSize = footerContentHeight / (PHI * 2)
    const footerLetterSpacing = footerFontSize / PHI


    document.querySelectorAll ('#logo > header p').forEach (p => {
      p.style.fontSize = `${ headerFontSize }px`
      p.style.letterSpacing = `${ headerLetterSpacing }px`
    })

    document.querySelectorAll ('#logo > footer p').forEach (p => {
      p.style.fontSize = `${ footerFontSize }px`
      p.style.letterSpacing = `${ footerLetterSpacing }px`
    })

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
        <p>c</p>
        <p>c</p>
        <p>c</p>
      </div>

      <div>
        <p>oding</p>
        <p>rafting</p>
        <p>onsulting</p>
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
        <p>๔๔๔</p>
      </div>
    
      <div>
        <p>ซอฟต์แวร์</p>
        <p>โซลูชั่น</p>
      </div>
      
    </footer>
  
  </article>

</template>


<style
  scoped
  src="@/assets/sass/components/logo.sass"
  lang="sass"
></style>