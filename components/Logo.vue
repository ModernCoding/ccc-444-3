<script setup>

  const setDimensions = () => {

    const logo = document.querySelector ('#logo')
    if (!logo) { return }

    logo
      .querySelectorAll ('*')
      .forEach (e => e.removeAttribute ('style'))


    const header = document.querySelector ('#logo > header')
    const section = document.querySelector ('#logo > section')
    const footer = document.querySelector ('#logo > footer')

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
    const headerDivMargin = headerLetterSpacing / (PHI ** 2)

    const footerFontSize = footerContentHeight / (PHI * 2)
    const footerLetterSpacing = footerFontSize / PHI
    const footerDivMargin = footerLetterSpacing / (PHI ** 2)

    document.querySelectorAll ('#logo > header p').forEach (p => {
      p.style.fontSize = `${ headerFontSize }px`
      p.style.letterSpacing = `${ headerLetterSpacing }px`
    })

    document.querySelectorAll ('#logo > footer p').forEach (p => {
      p.style.fontSize = `${ footerFontSize }px`
      p.style.letterSpacing = `${ footerLetterSpacing }px`
    })


    document
      .querySelectorAll ('#logo > header > div')
      .forEach ((div, i) => {

        div.style.width = `${
            div.getBoundingClientRect ().width
              + headerDivMargin * (i > 0 ? -1 : 1)
          }px`


        i > 0
          ? div.style.marginLeft = `${ headerDivMargin }px`
          : div.style.marginRight = `${ -headerDivMargin }px` 

      })


    document
      .querySelectorAll ('#logo > footer > div')
      .forEach ((div, i) => {

        div.style.width = `${
            div.getBoundingClientRect ().width
              + footerDivMargin * (i > 0 ? -1 : 1)
          }px`


        i > 0
          ? div.style.marginLeft = `${ footerDivMargin }px`
          : div.style.marginRight = `${ -footerDivMargin }px` 

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