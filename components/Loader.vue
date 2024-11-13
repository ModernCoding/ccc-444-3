<script setup>

  const loaderPropertiesStore
    = defineLoaderPropertiesStoreFromComposable () ()

  const loadingStore = defineLoadingStoreFromComposable () ()
  
  const { loaderProperties } = storeToRefs (loaderPropertiesStore)
  const { loading } = storeToRefs (loadingStore)


  const _setDimensions = () => {

    loaderPropertiesStore.patchIsPortrait ()
    loaderPropertiesStore.patchHeights ()
    loaderPropertiesStore.patchWidths ()


    ;(spinner => {

      if (!spinner) { return }


      if (loaderProperties.value.isPortrait) {

        spinner.style.setProperty (
            "--spinnerDiameter",
            `${ loaderProperties.value.widths.spinner / PHI ** 2 }px`
          )


        spinner.style.setProperty (
            "--spinnerMaxDiameter",
            `${ loaderProperties.value.heights.spinner / PHI }px`
          )

      }


      else {

        spinner.style.setProperty (
            "--spinnerDiameter",
            `${ loaderProperties.value.heights.spinner / PHI ** 2 }px`
          )


        spinner.style.setProperty (
            "--spinnerMaxDiameter",
            `${ loaderProperties.value.widths.spinner / PHI }px`
          )

      }

    }) (document.querySelector ('#loader .o-spinner > div'))

  }


  onMounted (() => {
    _setDimensions ()
    window.addEventListener ('resize', () => _setDimensions ())
  })

</script>


<template>

  <div id="loader" :data-is-shown="+loading.showLogoInLoader">

    <div>
      <Logo parent="loader"/>
    </div>
    

    <div class="o-spinner">
      <div />
    </div>

  </div>

</template>


<style
  scoped
  src="@/assets/sass/components/loader.sass"
  lang="sass"
></style>