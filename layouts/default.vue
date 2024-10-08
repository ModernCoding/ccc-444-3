<script setup>

  const windowWidths = ref ({})

  const layoutScripts = collectLayoutScriptsFromComposable ()

  const screenPropertiesStore
    = defineScreenPropertiesStoreFromComposable () ()
  
  const { screenProperties } = storeToRefs (screenPropertiesStore)


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


    screenPropertiesStore.patchRatioIndex (window)
    screenPropertiesStore.patchHeights ()
    screenPropertiesStore.patchPaddingTops ()


    ;(nuxt =>

      nuxt && nuxt.setAttribute (
        'data-number-of-parts',
        screenProperties.value.ratioIndex
      )

    ) (document.querySelector ('#__nuxt'))


    layoutScripts.setFontSize ()

  } 


  onMounted (() => {
    setDimensions ()
    window.addEventListener ('resize', setDimensions)
  })


  onUpdated (setDimensions)

</script>


<template>

  <header>
    <nav></nav>
    <nav v-if="screenProperties.ratioIndex > 2"></nav>
    <nav class="text-end">EN</nav>
  </header>


  <section>

    <aside>
      <Logo />
      <div id="aside-content" />
    </aside>


    <section v-if="screenProperties.ratioIndex > 2" id="central">
      <CallToActions />
    </section>


    <main role="main">
      <slot />
    </main>
    
  </section>


  <footer class="d-flex align-items-center justify-content-center">
    <nav></nav>
    <nav v-if="screenProperties.ratioIndex > 2"></nav>
  </footer>


  <!-- <Loader v-if="true" /> -->
  
</template>


<style
  src="@/assets/sass/layouts/default.sass"
  lang="sass"
></style>