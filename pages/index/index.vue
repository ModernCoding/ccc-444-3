<script setup>

  import Machine from './.partials/machine'
  import Slogan from './.partials/slogan'

  const ctaScripts = collectCtaScriptsFromComposable ()
  const layoutScripts = collectLayoutScriptsFromComposable ()
  const startPageScripts = collectStartPageScriptsFromComposable ()
  
  const loadingStore = defineLoadingStoreFromComposable () ()

  const screenPropertiesStore
    = defineScreenPropertiesStoreFromComposable () ()
  
  const { loading } = storeToRefs (loadingStore)
  const { screenProperties } = storeToRefs (screenPropertiesStore)

  const isSloganInFooter = ref (false)


  const _equalizeCtas = () => {

    if (!window) { return loadingStore.patchIs (false) }


    ctaScripts.equalize (

      screenProperties,

      `${
        [ '#index', '#central' ] [
          +(screenProperties.value.ratioIndex > 2)
        ]
      } .o-call-to-actions`

    )


    startPageScripts
      .handleMachine (screenPropertiesStore, isSloganInFooter)

    layoutScripts.setMainDimensions (screenPropertiesStore)
    layoutScripts.setFontSizeHeader ()
    layoutScripts.setFontSizeFooter ()

    loadingStore.patchIs (false)
    loadingStore.patchIsResizingMode (false)

  }


  watch (loadingStore, ({ $state: { loading } }) => {

    switch (true) {

      case loading.is && loading.showLogo:
        setTimeout (() => _equalizeCtas (), 1000)
        break

      case loading.isResizingMode:
        _equalizeCtas ()
        break

      default:
        break

    }

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


    <div
      :class="isSloganInFooter ? 'o-no-slogan' : ''"
      id="index-machine"
    >
      
      <Slogan
        v-if="screenProperties.ratioIndex > 2 && !isSloganInFooter"
      />
      
      <Machine v-if="screenProperties.ratioIndex > 2" />
   
    </div>

  </article>


  <ClientOnly>

    <Teleport
      v-if="screenProperties.ratioIndex === 2"
      to="#aside-content"
    >
      <Machine />
    </Teleport>


    <Teleport

      v-if="screenProperties.ratioIndex < 3"

      :to="
          [ '#index', '#__nuxt > footer' ] [
            +(screenProperties.ratioIndex < 2 || isSloganInFooter)
          ]
        "

    >

      <Slogan />

    </Teleport>


    <Teleport
      v-else-if="isSloganInFooter"
      to="#__nuxt > footer"
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