<script setup>
  
  const screenPropertiesStore
    = defineScreenPropertiesStoreFromComposable () ()

  const { screenProperties } = storeToRefs (screenPropertiesStore)

</script>


<template>

  <figure
    class="o-expertise-angkor-wat"
    :data-number-of-parts="screenProperties.ratioIndex"
  >

    <NuxtImg
      src="/images/countries/angkor-wat.png"
      alt="Angkor Wat"
      :modifiers="{ b: '#110d0d', opacity: 1 }"
      loading="lazy"
    />

  </figure>

</template>


<style
  scoped
  src="@/assets/sass/pages/our-expertise/guest-tech-team-lead.sass"
  lang="sass"
></style>