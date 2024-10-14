<script setup>

  import Machine from './.partials/machine'
  import Slogan from './.partials/slogan'

  const ctaScripts = collectCtaScriptsFromComposable ()
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

  const isSloganInFooter = ref (false)
  const { locale } = useI18n ()


  const _equalizeCtas = () => {

    if (!window) { return loadingStore.patchIs (false) }


    ctaScripts.setFontSize ()
    ctaScripts.equalize (screenProperties, logoProperties)

    startPageScripts.handleMachine (
        screenPropertiesStore,
        logoProperties,
        isSloganInFooter
      )

    !isSloganInFooter.value
      && startPageScripts.handleSlogan (screenProperties.value)

    layoutScripts.setMainDimensions (screenPropertiesStore)


    const _runLayoutScripts = () => {

        layoutScripts.setFontSizeHeader ()
        layoutScripts.setFontSizeFooter ()

        loadingStore.patchIs (false)
        loadingStore.patchIsResizingMode (false)

      }


    loading.value.is
      ? setTimeout (_runLayoutScripts, DELAY_TIMES.ELEMENT)
      : _runLayoutScripts ()

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

  <article id="index">

    <CallToActions v-if="screenProperties.ratioIndex < 3" />
    <Machine v-if="screenProperties.ratioIndex < 2" />
    
    <Slogan
      v-if="screenProperties.ratioIndex === 2 && !isSloganInFooter"
    />


    <div
      v-if="screenProperties.ratioIndex > 2"
      :class="isSloganInFooter ? 'o-no-slogan' : ''"
      id="index-machine"
    >
      <Slogan v-if="!isSloganInFooter" />
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
      to="#central"
    >
      <CallToActions />
    </Teleport>


    <Teleport
      v-if="screenProperties.ratioIndex < 2 || isSloganInFooter"
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