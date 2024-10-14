<script setup>

  import { Locales } from '#components'

  const windowWidths = ref ({})

  const layoutScripts = collectLayoutScriptsFromComposable ()
  const startPageScripts = collectStartPageScriptsFromComposable ()
  
  const loadingStore = defineLoadingStoreFromComposable () ()
  const modalStore = defineModalStoreFromComposable () ()
  
  const screenPropertiesStore
    = defineScreenPropertiesStoreFromComposable () ()
  
  const { loading } = storeToRefs (loadingStore)
  const { modal } = storeToRefs (modalStore)
  const { screenProperties } = storeToRefs (screenPropertiesStore)

  const { locale } = useI18n ()

  const modalComponents = { Locales }


  const _getComponent = key => modalComponents [ key ]


  const _handleModal = () => {

    if (modal.value.main.show) { return modalStore.resetMain () }

    modalStore.patchMainShow ()
    modalStore.patchMainContent ('Locales')

  }


  const _setDimensions = () => {
  
    if (!window) { return }

    layoutScripts.setMainDimensions (screenPropertiesStore)
    layoutScripts.setFontSizeHeader ()

    windowWidths.value = getWindowWidths (window.innerWidth)

  }


  watch (loadingStore, ({ $state: { loading } }) => {
    loading.isResizingMode && _setDimensions ()
  })


  onMounted (() => {

    const ccc444Locale
      = localStorage.getItem (import.meta.env.VITE_LOCALE_KEY)

    locale.value = ccc444Locale ?? 'en'


    ;(nuxt => {

        if (!nuxt) { return }

        [ 'my', 'th', 'vi' ].includes (ccc444Locale)
          ? nuxt.setAttribute ('data-locale', ccc444Locale)
          : nuxt.removeAttribute ('data-locale')

      }) (document.querySelector ('#__nuxt'))


    _setDimensions ()
    
    window.addEventListener (
        'resize',
        () => loadingStore.patchIsResizingMode ()
      )
  
  })


  onUpdated (() => {

    document.querySelector ('#footer-content .o-slogan')
      && startPageScripts.handleSlogan (screenProperties.value, true)

  })

</script>


<template>

  <header :data-is-shown="+!loading.is">

    <nav />
    <nav v-if="screenProperties.ratioIndex > 2" />

    <nav>
      <button
        class="o-locale o-font-en"
        @click="_handleModal"
      >
        {{ locale }}
      </button>
    </nav>

  </header>


  <section :data-is-shown="+!loading.is">

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


  <footer :data-is-shown="+!loading.is">
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