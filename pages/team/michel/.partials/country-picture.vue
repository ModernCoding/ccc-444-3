<script setup>
  
  const screenPropertiesStore
    = defineScreenPropertiesStoreFromComposable () ()

  const { screenProperties } = storeToRefs (screenPropertiesStore)

</script>


<template>

  <figure
    class="o-country-picture"
    data-country="fr"
    :data-number-of-parts="screenProperties.ratioIndex"
  >

    <NuxtImg
      src="/images/countries/saint-michel.png"
      alt="Saint-Michel"
      :modifiers="{ b: '#110d0d', opacity: 1 }"
      loading="lazy"
    />

  </figure>

</template>


<style
  scoped
  src="@/assets/sass/pages/team/member.sass"
  lang="sass"
></style>