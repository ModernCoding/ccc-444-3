<script setup>

  import { Locales, Menu } from '#components'

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


  const _getComponent = key => ({ Locales, Menu }) [ key ]


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

      <nav :data-is-shown="+!modal.show">
        <CallToActionsHeader v-if="route.name !== 'index'" />
      </nav>
      

      <div
        class="o-modal"
        id="header-left-modal"
        :data-number-of-parts="screenProperties.ratioIndex"
        :data-is-shown="+modal.show"
        @click="modalScripts.openOrClose (modalStore)"
      />

    </nav>


    <nav
      v-if="screenProperties.ratioIndex > 2"
      :data-is-shown="+!modal.show"
    >
      
      <div
        class="o-modal"
        id="header-central-modal"
        :data-number-of-parts="screenProperties.ratioIndex"
        :data-is-shown="+modal.show"
        @click="modalScripts.openOrClose (modalStore)"
      />

    </nav>


    <nav>

      <button
        class="o-locale"
        @click="modalScripts.openOrClose (modalStore, 'Menu')"
      >

        <i
          :class="`bi bi-${ modal.show ? 'x-lg' : 'list' }`"
          aria-hidden="true"
        ></i>

      </button>


      <button
        class="o-locale o-font-en"
        @click="modalScripts.openOrClose (modalStore, 'Locales')"
      >

        <i
          v-if="modal.show"
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

      <NuxtLink
        v-if="
            screenProperties.ratioIndex > 1
              || route.name !== 'contact'
          "

        to="/"
        :data-is-shown="+!modal.show"
      >
        <Logo />
      </NuxtLink>
      

      <div id="aside-content" :data-is-shown="+!modal.show">
        <slot name="aside" />
      </div>


      <div
        class="o-modal"
        id="aside-modal"
        :data-number-of-parts="screenProperties.ratioIndex"
        :data-is-shown="+modal.show"
        @click="modalScripts.openOrClose (modalStore)"
      />
    
    </aside>


    <section id="central">

      <article
        id="central-content"
        :data-is-shown="+!modal.show"
      >
        <slot name="central" />
      </article>


      <div
        class="o-modal"
        id="central-modal"
        :data-number-of-parts="screenProperties.ratioIndex"
        :data-is-shown="+modal.show"
        @click="modalScripts.openOrClose (modalStore)"
      />

    </section>


    <main role="main">

      <slot name="main" />


      <div
        class="o-modal"
        id="main-modal"
        :data-number-of-parts="screenProperties.ratioIndex"
        :data-is-shown="+modal.show"
      >
        <component :is="_getComponent (modal.content)" />
      </div>

    </main>
    
  </section>


  <footer
    :data-is-shown="+(!loading.is && !modal.show)"
    data-is-veiled-at-first-loading
  >

    <nav id="footer-left-content">
      <slot name="footer-left" />
    </nav>

  
    <nav
      v-if="screenProperties.ratioIndex > 2"
      id="footer-central-content"
    >
      <slot name="footer-central" />
    </nav>

  
    <nav id="footer-right-content">
      <slot name="footer-right" />
    </nav>
  
  </footer>


  <Loader v-if="loading.is" />
  
</template>


<style
  src="@/assets/sass/components/base-layout.sass"
  lang="sass"
></style>