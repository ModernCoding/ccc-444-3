<script setup>
  
  const imageScripts = collectImageScriptsFromComposable ()

  const ladiesStore = defineLadiesStoreFromComposable () ()
  const loadingStore = defineLoadingStoreFromComposable () ()

  const { ladies } = storeToRefs (ladiesStore)


  // watch (ladiesStore, () => {
  //     loadingStore.patchIsResizingMode ()
  //     imageScripts.checkAllImagesLoaded (loadingStore)
  //   })

</script>


<template>

  <h1 class="o-lady">

    <p>

      <span
        v-for="
            sentence, i in $t (
              `pages.ladiesInIt.index.${
                ladies.MAP.get (ladies.index).key
              }`
            ).split ('%')
          "

        :key="i"
        :class="[ '', 'fw-bold' ] [ +(i % 2 !== 0) ]"
      >
        {{ sentence }}
      </span>

    </p>
  
  </h1>

</template>


<style
  scoped
  src="@/assets/sass/pages/ladies-in-it/index.sass"
  lang="sass"
></style>