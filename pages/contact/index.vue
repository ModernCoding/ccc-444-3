<script setup>

  import ContactInfo from './.partials/contact-info'
  import Location from './.partials/location'
  import WatArun from './.partials/wat-arun'

  const contactScripts = collectContactScriptsFromComposable ()
  const imageScripts = collectImageScriptsFromComposable ()
  const layoutScripts = collectLayoutScriptsFromComposable ()
  
  const loadingStore = defineLoadingStoreFromComposable () ()

  const logoPropertiesStore
    = defineLogoPropertiesStoreFromComposable () ()

  const screenPropertiesStore
    = defineScreenPropertiesStoreFromComposable () ()
  
  const { loading } = storeToRefs (loadingStore)
  const { logoProperties } = storeToRefs (logoPropertiesStore)
  const { screenProperties } = storeToRefs (screenPropertiesStore)

  const isLocationInFooter = ref (false)
  const { locale } = useI18n ()


  const _equalizeCtas = () => {

    if (!window) { return loadingStore.patchIs (false) }


    contactScripts.handleWatArun (
        screenPropertiesStore,
        logoProperties,
        isLocationInFooter
      )

    contactScripts
      .handleLocation (screenProperties.value, isLocationInFooter.value)

    layoutScripts
      .runResizingScripts (loadingStore, screenPropertiesStore)

  }


  watch (loadingStore, ({ $state: { loading } }) => {

    switch (true) {

      case  loading.is
            && loading.showLogoInLoader
            && loading.isImageLoadingComplete:

        setTimeout (() => _equalizeCtas (), DELAY_TIMES.LOADING)
        break


      case  loading.isImageLoadingComplete:
      case  !loading.is && loading.isResizingMode:

        _equalizeCtas ()
        break


      default:
        break

    }

  })


  watch (locale, () => loadingStore.patchIs ())


  watch (logoPropertiesStore, ({ $state: { logoProperties } }) => {

    !loading.value.is && _equalizeCtas ()
      /*
        if page is loading, do not equalize since equalizing process is
        already running
      */

  })


  onMounted (() => {

    loadingStore.patchIs ()
    imageScripts.checkAllImagesLoaded (loadingStore)
    
    window.addEventListener (
        'resize',
        () => loadingStore.patchIsResizingMode ()
      )
    
    screen
      .orientation
      .addEventListener ('change', () => loadingStore.patchIs ())

  })


</script>


<template>

  <article
    id="contact"
    :class="isLocationInFooter ? 'o-no-location' : ''"
  >

    <WatArun />
    <Location v-if="!isLocationInFooter" />

  </article>


  <ClientOnly>

    <Teleport
      v-if="screenProperties.ratioIndex === 2"
      defer
      to="#aside-content"
    >
      <ContactInfo />
    </Teleport>


    <Teleport
      v-if="screenProperties.ratioIndex > 2"
      defer
      to="#central-content"
    >
      <ContactInfo />
    </Teleport>


    <Teleport v-if="isLocationInFooter" defer to="#footer-content">
      <Location />
    </Teleport>

  </ClientOnly>

</template>


<style
  scoped
  src="@/assets/sass/pages/contact/index.sass"
  lang="sass"
></style>