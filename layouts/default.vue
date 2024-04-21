<script setup>

  const hasScrollbar = ref (false)
  const windowWidths = ref ({})


  const setDimensions = () => {

    (main => {

      if (!main) { return }

      hasScrollbar.value = main.scrollHeight > main.clientHeight

      window.addEventListener ('resize', () => {
        hasScrollbar.value = main.scrollHeight > main.clientHeight
      })

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