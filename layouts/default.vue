<script setup>

  const windowWidths = ref ({})

  const layoutScripts = collectLayoutScriptsFromComposable ()
  const loadingStore = defineLoadingStoreFromComposable () ()
  const modalStore = defineModalStoreFromComposable () ()
  
  const screenPropertiesStore
    = defineScreenPropertiesStoreFromComposable () ()
  
  const { loading } = storeToRefs (loadingStore)
  const { modal } = storeToRefs (modalStore)
  const { screenProperties } = storeToRefs (screenPropertiesStore)

  const { locale, messages } = useI18n ()
  const languageOptions = ref (Object.keys (messages.value))


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

    const ccc444Locale
      = localStorage.getItem (import.meta.env.VITE_LOCALE_KEY)

    locale.value = ccc444Locale ?? 'en'


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
      <button
        class="o-lang"
        @click="modalStore.patchMainShow (!modal.main.show)"
      >
        {{ locale }}
      </button>
    </nav>

  </header>


  <section>

    <aside>
      <Logo />
      <div id="aside-content" />
    </aside>


    <section id="central" />


    <main role="main">

      <slot />


      <div
        id="main-modal"
        :data-number-of-parts="screenProperties.ratioIndex"
        :data-is-shown="+modal.main.show"
      >
        {{ modal.main.content }}
      </div>

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