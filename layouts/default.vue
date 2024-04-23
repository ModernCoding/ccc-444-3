<script setup>

  const windowWidths = ref ({})


  const setDimensions = () => {

    (main => {

      if (!main) { return }


      (mainContent => {
        
        if (!mainContent) { return }

        mainContent.removeAttribute ('style')

        if (mainContent.scrollHeight <= mainContent.clientHeight) {
          return
        }


        const mainPaddingLeft = parseInt (

            window
              .getComputedStyle (main)
              .getPropertyValue ('padding-left')
              .split ('px')
              .join ('')

          )


        ;(mainContentWidth => {

          mainContent.style.paddingRight = `${
            mainPaddingLeft / PHI
              - (mainContentWidth - mainContent.clientWidth)
                /*
                  compensating scrollbar width
                */
          }px`

        }) (mainContent.getBoundingClientRect ().width)

      }) (main.querySelector ('*'))

    }) (document.querySelector ('main[role="main"]'))


    windowWidths.value = getWindowWidths (window.innerWidth)

    document
      .documentElement
      .style
      .setProperty ('--vh', `${ window.innerHeight * 0.01 }px`)

  } 


  onMounted (() => {
    setDimensions ()
    window.addEventListener ('resize', setDimensions)
  })

</script>


<template>

  <header>

    <nav v-if="!windowWidths.isAtLeastXxlHalf">
      <div />
      <Menu />
    </nav>

  </header>


  <section>

    <aside>
      <Logo />
    </aside>

    <Menu v-if="windowWidths.isAtLeastXxlHalf" />

    <main role="main">
      <slot />
    </main>
    
  </section>


  <footer>
  </footer>
  
</template>


<style
  src="@/assets/sass/layouts/default.sass"
  lang="sass"
></style>