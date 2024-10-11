<script setup>

  const windowWidths = ref ({})

  const layoutScripts = collectLayoutScriptsFromComposable ()
  const loadingStore = defineLoadingStoreFromComposable () ()
  
  const screenPropertiesStore
    = defineScreenPropertiesStoreFromComposable () ()
  
  const { loading } = storeToRefs (loadingStore)
  const { screenProperties } = storeToRefs (screenPropertiesStore)


  const _setDimensions = () => {
  
    if (!window) { return }

    layoutScripts.setMainDimensions (screenPropertiesStore)
    layoutScripts.setFontSizeHeader ()
    layoutScripts.setFontSizeFooter ()

    windowWidths.value = getWindowWidths (window.innerWidth)

  }


  watch (loadingStore, ({ $state: { loading } }) => {
    loading.isResizingMode && _setDimensions ()
  })


  onMounted (() => {

    _setDimensions ()
    
    window.addEventListener (
        'resize',
        () => loadingStore.patchIsResizingMode ()
      )
  
  })

</script>


<template>

  <header>

    <nav />
    <nav v-if="screenProperties.ratioIndex > 2" />

    <nav>
      <div class="o-lang">EN</div>
    </nav>

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


  <footer>
    <nav />
    <nav v-if="screenProperties.ratioIndex > 2" />
    <nav id="footer-content" />
  </footer>


  <Loader v-if="loading.is" />
  
</template>


<style
  src="@/assets/sass/layouts/default.sass"
  lang="sass"
></style>