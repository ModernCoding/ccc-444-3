<script setup>

  import { Locales } from '#components'

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

  const modalComponents = { Locales }


  const _getComponent = key => modalComponents [ key ]


  const _handleModal = () => {

    if (modal.value.main.show) { return modalStore.resetMain () }

    modalStore.patchMainShow ()
    setTimeout (() => modalStore.patchMainContent ('Locales'), 1000)

  }


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
        @click="_handleModal"
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
        <component :is="_getComponent (modal.main.content)" />
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