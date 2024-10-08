<script setup>

  const layoutPropertiesStore
    = defineLayoutPropertiesStoreFromComposable () ()
  
  const { layoutProperties } = storeToRefs (layoutPropertiesStore)


  const setDimensions = () => {

    layoutPropertiesStore.patchIsPortrait ()
    layoutPropertiesStore.patchHeights ()
    layoutPropertiesStore.patchWidths ()


    ;(spinner => {

      if (!spinner) { return }


      if (layoutProperties.value.isPortrait) {

        spinner.style.setProperty (
            "--spinnerDiameter",
            `${ layoutProperties.value.widths.spinner / PHI ** 2 }px`
          )


        spinner.style.setProperty (
            "--spinnerMaxDiameter",
            `${ layoutProperties.value.heights.spinner / PHI }px`
          )

      }


      else {

        spinner.style.setProperty (
            "--spinnerDiameter",
            `${ layoutProperties.value.heights.spinner / PHI ** 2 }px`
          )


        spinner.style.setProperty (
            "--spinnerMaxDiameter",
            `${ layoutProperties.value.widths.spinner / PHI }px`
          )

      }

    }) (document.querySelector ('#loader .o-spinner > div'))


  }


  onMounted (() => {

    setDimensions ()
    window.addEventListener ('resize', () => setDimensions ())
    
    screen.orientation.addEventListener (
        'change',
        () => setDimensions ()
      )

  })

</script>


<template>

  <div id="loader">

    <div>
      <Logo parent="loader" />
    </div>
    

    <div class="o-spinner">
      <div></div>
    </div>

  </div>

</template>


<style
  scoped
  src="@/assets/sass/components/loader.sass"
  lang="sass"
></style>