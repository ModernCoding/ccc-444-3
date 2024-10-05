<script setup>

  const windowWidths = ref ({})

  const screenStore = defineScreenStoreFromComposable () ()
  const { screen } = storeToRefs (screenStore)


  const setDimensions = () => {

    (main => {

      if (!main) { return }


      (mainContent => {
        
        if (!mainContent) { return }
        mainContent.removeAttribute ('style')
        
        if (main.scrollHeight <= main.clientHeight) { return }

        // if (mainContent.scrollHeight <= mainContent.clientHeight) {
        //   return
        // }


        const mainPaddingLeft = parseInt (

            window
              .getComputedStyle (document.querySelector ('#__nuxt'))
              .getPropertyValue ('padding-right')
              .split ('px')
              .join ('')

          )


        mainContent.style.paddingRight = `${ mainPaddingLeft / PHI }px`

      }) (main.querySelector ('*'))

    }) (document.querySelector ('main[role="main"]'))


    windowWidths.value = getWindowWidths (window.innerWidth)


    document
      .documentElement
      .style
      .setProperty ('--vh', `${ window.innerHeight * 0.01 }px`)


    screenStore.patchRatioIndex (window)
    screenStore.patchHeights ()
    screenStore.patchPaddingTops ()


    ;(nuxt =>

      nuxt && nuxt.setAttribute (
        'data-number-of-parts',
        screen.value.ratioIndex
      )

    ) (document.querySelector ('#__nuxt'))

  } 


  onMounted (() => {
    setDimensions ()
    window.addEventListener ('resize', setDimensions)
  })

</script>


<template>

  <header>

    <nav>
      <nav></nav>
      <nav v-if="screen.ratioIndex > 2"></nav>
      <nav class="text-end">EN</nav>
    </nav>

  </header>


  <section>

    <aside>
      <Logo />
      <div id="aside-content" />
    </aside>


    <section v-if="screen.ratioIndex > 2" id="central">
      <CallToActions />
    </section>


    <main role="main">
      <slot />
    </main>
    
  </section>


  <footer class="d-flex align-items-center justify-content-center">
    <nav></nav>
    <nav v-if="screen.ratioIndex > 2"></nav>
  </footer>
  
</template>


<style
  src="@/assets/sass/layouts/default.sass"
  lang="sass"
></style>