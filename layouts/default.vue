<script setup>

  const windowWidths = ref ({})

  const layoutScripts = collectLayoutScriptsFromComposable ()
  const loadingStore = defineLoadingStoreFromComposable () ()
  
  const screenPropertiesStore
    = defineScreenPropertiesStoreFromComposable () ()
  
  const { loading } = storeToRefs (loadingStore)
  const { screenProperties } = storeToRefs (screenPropertiesStore)


  const setDimensions = () => {
  
    if (!window) { return }

    layoutScripts.setMainDimensions (screenPropertiesStore)
    layoutScripts.setFontSizeHeader ()
    layoutScripts.setFontSizeFooter ()

    windowWidths.value = getWindowWidths (window.innerWidth)

  }


  onMounted (() => {
    setDimensions ()
    window.addEventListener ('resize', setDimensions)
  })

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


  <Loader v-if="loading.is" />
  
</template>


<style
  src="@/assets/sass/layouts/default.sass"
  lang="sass"
></style>