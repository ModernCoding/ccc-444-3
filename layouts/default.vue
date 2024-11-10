<script setup>

  import { Contact, Locales } from '#components'

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


  const _getComponent = key => ({ Contact, Locales }) [ key ]


  const _handleModal = () => {

    document
      .querySelectorAll ('main[role="main"] > *:not(.o-modal)')
      .forEach (element =>

          modal.value.main.show
            ? element.removeAttribute ('data-is-hidden')
            : element.setAttribute ('data-is-hidden', 1)

        )


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

        <i
          v-if="modal.main.show"
          class="bi bi-x-lg"
          aria-hidden="true"
        ></i>
        
        <span v-else>{{ locale }}</span>

      </button>

    </nav>

  </header>


  <section :data-is-shown="+!loading.is">

    <aside>

      <NuxtLink to="/" :data-is-shown="+!modal.main.show">
        <Logo />
      </NuxtLink>
      

      <div id="aside-content" :data-is-shown="+!modal.main.show" />


      <div
        class="o-modal"
        id="aside-modal"
        :data-number-of-parts="screenProperties.ratioIndex"
        :data-is-shown="+modal.main.show"
        @click="_handleModal"
      />
    
    </aside>


    <section id="central">

      <article
        id="central-content"
        :data-is-shown="+!modal.main.show"
      />


      <div
        class="o-modal"
        id="central-modal"
        :data-number-of-parts="screenProperties.ratioIndex"
        :data-is-shown="+modal.main.show"
        @click="_handleModal"
      />

    </section>


    <main role="main">

      <slot />


      <div
        class="o-modal"
        id="main-modal"
        :data-number-of-parts="screenProperties.ratioIndex"
        :data-is-shown="+modal.main.show"
      >
        <component :is="_getComponent (modal.main.content)" />
      </div>

    </main>
    
  </section>


  <footer :data-is-shown="+(!loading.is && !modal.main.show)">
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