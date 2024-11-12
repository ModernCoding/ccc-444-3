<script setup>

  import ContactInfo from './.partials/contact-info'
  import Location from './.partials/location'
  import WatArun from './.partials/wat-arun'

  const contactScripts = collectContactScriptsFromComposable ()
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

    // contactScripts
    //   .handleLocation (screenProperties.value, isLocationInFooter.value)

    layoutScripts
      .runResizingScripts (loadingStore, screenPropertiesStore)

  }


  watch (loadingStore, ({ $state: { loading } }) => {

    switch (true) {

      case loading.is && loading.showLogo:
        setTimeout (() => _equalizeCtas (), DELAY_TIMES.LOADING)
        break

      case !loading.is && loading.isResizingMode:
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

  <article id="contact">

    <WatArun />

    <!-- <CallToActions v-if="screenProperties.ratioIndex < 3" /> -->
    <!-- <ContactInfo v-if="screenProperties.ratioIndex < 2" /> -->
    
<!--     <Location
      v-if="screenProperties.ratioIndex === 2 && !isLocationInFooter"
    />
 -->

<!--     <div
      v-if="screenProperties.ratioIndex > 2"
      :class="isLocationInFooter ? 'o-no-Location' : ''"
      id="index-ContactInfo"
    >
      <Location v-if="!isLocationInFooter" />
    </div> -->

  </article>


<!--   <ClientOnly>

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
      <CallToActions />
    </Teleport>


    <Teleport v-if="isLocationInFooter" defer to="#footer-content">
      <Location />
    </Teleport>

  </ClientOnly> -->

</template>


<style
  scoped
  src="@/assets/sass/pages/contact/index.sass"
  lang="sass"
></style>