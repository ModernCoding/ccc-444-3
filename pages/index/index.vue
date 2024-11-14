<script setup>

  import Machine from './.partials/machine'
  import Slogan from './.partials/slogan'

  const ctaScripts = collectCtaScriptsFromComposable ()
  const imageScripts = collectImageScriptsFromComposable ()
  const layoutScripts = collectLayoutScriptsFromComposable ()
  const startPageScripts = collectStartPageScriptsFromComposable ()
  
  const loadingStore = defineLoadingStoreFromComposable () ()

  const logoPropertiesStore
    = defineLogoPropertiesStoreFromComposable () ()

  const screenPropertiesStore
    = defineScreenPropertiesStoreFromComposable () ()
  
  const { loading } = storeToRefs (loadingStore)
  const { logoProperties } = storeToRefs (logoPropertiesStore)
  const { screenProperties } = storeToRefs (screenPropertiesStore)

  const { locale } = useI18n ()


  const _equalizeCtas = () => {

    if (!window) { return loadingStore.patchIs (false) }


    ctaScripts.equalize (screenProperties, logoProperties)
    ctaScripts.setFontSize ()

    startPageScripts.handleMachine (
        screenPropertiesStore,
        logoProperties
      )

    startPageScripts
      .handleSlogan (screenProperties.value)

    // layoutScripts
    //   .resize (loadingStore, screenPropertiesStore)

  }


  watch (loadingStore, ({ $state: { loading } }) => {

    switch (true) {

      case loading.is && loading.showLogoInLoader:
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

  <article id="index">

    <CallToActions v-if="screenProperties.ratioIndex < 3" />
    <Machine v-if="screenProperties.ratioIndex < 2" />
    
    <Slogan
      v-if="
          screenProperties.ratioIndex === 2
            && !screenProperties.isSentenceInFooter
        "
    />


    <div
      v-if="screenProperties.ratioIndex > 2"
      :class="screenProperties.isSentenceInFooter ? 'o-no-slogan' : ''"
      id="index-machine"
    >
      <Slogan v-if="!screenProperties.isSentenceInFooter" />
      <Machine />
    </div>

  </article>


  <ClientOnly>

    <Teleport
      v-if="screenProperties.ratioIndex === 2"
      defer
      to="#aside-content"
    >
      <Machine />
    </Teleport>


    <Teleport
      v-if="screenProperties.ratioIndex > 2"
      defer
      to="#central-content"
    >
      <CallToActions />
    </Teleport>


    <Teleport
      v-if="screenProperties.isSentenceInFooter"
      defer
      to="#footer-content"
    >
      <Slogan />
    </Teleport>

  </ClientOnly>

</template>


<style
  scoped
  src="@/assets/sass/pages/index.sass"
  lang="sass"
></style>