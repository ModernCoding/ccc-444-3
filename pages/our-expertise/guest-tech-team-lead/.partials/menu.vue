<script setup>

  const imageScripts = collectImageScriptsFromComposable ()
  
  const ladiesStore = defineLadiesStoreFromComposable () ()
  const loadingStore = defineLoadingStoreFromComposable () ()

  const { ladies } = storeToRefs (ladiesStore)


  const _handle = i => {
    
    loadingStore.patchIsVeilMode ()

    setTimeout (() => {
        ladiesStore.patchIndex (i)
        imageScripts.checkAllImagesLoaded (loadingStore)
      }, DELAY_TIMES.ELEMENT)

  }

</script>


<template>

  <menu class="o-guest-tech-team-lead-menu">

    <li
      v-for="i in ladies.MAP.keys ()"
      :key="i"
      @click="_handle (i)"
    >

      <i
        :class="`
            bi
            bi-hand-index${ ladies.index === i ? '-fill' : '' }
          `"

        aria-hidden="true"
      />


      <div :class="[ '', 'fw-bold' ] [ +(ladies.index === i) ]">
        {{ ladies.MAP.get (i).name }}
      </div>

    </li>

  </menu>

</template>


<style
  scoped
  src="@/assets/sass/pages/our-expertise/guest-tech-team-lead.sass"
  lang="sass"
></style>