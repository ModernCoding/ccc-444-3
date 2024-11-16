<script setup>

  import { Locales } from '#components'

  const ctaScripts = collectCtaScriptsFromComposable ()
  const imageScripts = collectImageScriptsFromComposable ()
  const layoutScripts = collectLayoutScriptsFromComposable ()
  const modalScripts = collectModalScriptsFromComposable ()
  
  const loadingStore = defineLoadingStoreFromComposable () ()

  const logoPropertiesStore
    = defineLogoPropertiesStoreFromComposable () ()

  const modalStore = defineModalStoreFromComposable () ()
  
  const screenPropertiesStore
    = defineScreenPropertiesStoreFromComposable () ()
  
  const { loading } = storeToRefs (loadingStore)
  const { modal } = storeToRefs (modalStore)
  const { screenProperties } = storeToRefs (screenPropertiesStore)

  const { locale } = useI18n ()
  const route = useRoute ()


  const _getComponent = key => ({ Locales }) [ key ]


  watch (loadingStore, ({ $state: { loading } }) => {

    const delay = (() => {

        switch (true) {

          case  loading.is
                && loading.showLogoInLoader
                && loading.isImageLoadingComplete:

            return DELAY_TIMES.LOADING


          case  loading.isImageLoadingComplete:
          case  !loading.is && loading.isResizingMode:

            return 0


          default:
            return -1

        }

      }) ()


    delay > -1 && layoutScripts.resize (
      loadingStore,
      logoPropertiesStore,
      screenPropertiesStore,
      route,
      delay
    )

  })


  watch (locale, () => loadingStore.patchIs ())


  watch (route, () => {
    loadingStore.patchIs ()
    imageScripts.checkAllImagesLoaded (loadingStore)
  })


  onMounted (() => {

    loadingStore.patchIs ()


    const ccc444Locale
      = localStorage.getItem (import.meta.env.VITE_LOCALE_KEY)

    locale.value = ccc444Locale ?? 'en'


    ;(nuxt => {

        if (!nuxt) { return }

        [ 'my', 'th', 'vi' ].includes (ccc444Locale)
            ? nuxt.setAttribute ('data-locale', ccc444Locale)
            : nuxt.removeAttribute ('data-locale')

      }) (document.querySelector ('#__nuxt'))


    imageScripts.checkAllImagesLoaded (loadingStore)


    window.addEventListener (
        'resize',
        () => loadingStore.patchIsResizingMode ()
      )
    

    screen
      .orientation
      .addEventListener ('change', () => loadingStore.patchIs ())
  
  })


  onUpdated (() => {
    loadingStore.patchIsResizingMode ()
    imageScripts.checkAllImagesLoaded (loadingStore)
  })

</script>


<template>

  <header
    :data-is-shown="+!loading.is"
    data-is-veiled-at-first-loading
  >

    <nav>
      <CallToActionsHeader v-if="route.name !== 'index'" />
    </nav>


    <nav v-if="screenProperties.ratioIndex > 2" />


    <nav>

      <button
        class="o-locale o-font-en"
        @click="modalScripts.openOrClose (modalStore, 'Locales')"
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


  <section
    :data-is-shown="+!loading.is"
    data-is-veiled-at-first-loading
  >

    <aside>

      <NuxtLink to="/" :data-is-shown="+!modal.main.show">
        <Logo />
      </NuxtLink>
      

      <div id="aside-content" :data-is-shown="+!modal.main.show">
        <slot name="aside" />
      </div>


      <div
        class="o-modal"
        id="aside-modal"
        :data-number-of-parts="screenProperties.ratioIndex"
        :data-is-shown="+modal.main.show"
        @click="modalScripts.openOrClose (modalStore)"
      />
    
    </aside>


    <section id="central">

      <article
        id="central-content"
        :data-is-shown="+!modal.main.show"
      >
        <slot name="central" />
      </article>


      <div
        class="o-modal"
        id="central-modal"
        :data-number-of-parts="screenProperties.ratioIndex"
        :data-is-shown="+modal.main.show"
        @click="modalScripts.openOrClose (modalStore)"
      />

    </section>


    <main role="main">

      <slot name="main" />


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


  <footer
    :data-is-shown="+(!loading.is && !modal.main.show)"
    data-is-veiled-at-first-loading
  >

    <nav />
  
    <nav v-if="screenProperties.ratioIndex > 2" />
  
    <nav id="footer-content">
      <slot name="footer" />
    </nav>
  
  </footer>


  <Loader v-if="loading.is" />
  
</template>


<style
  src="@/assets/sass/layouts/default.sass"
  lang="sass"
></style>