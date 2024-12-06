<script setup>
  
  const screenPropertiesStore
    = defineScreenPropertiesStoreFromComposable () ()

  const { screenProperties } = storeToRefs (screenPropertiesStore)

</script>


<template>

  <NuxtLink :to="{ name: 'our-expertise' }">

    <figure
      class="o-expertise-skill-picture"
      :data-number-of-parts="screenProperties.ratioIndex"
    >

      <NuxtImg
        src="/images/countries/angkor-wat.png"
        alt="Angkor Wat"
        :modifiers="{ b: '#110d0d', opacity: 1 }"
        loading="lazy"
      />

    </figure>

  </NuxtLink>

</template>


<style
  scoped
  src="@/assets/sass/pages/our-expertise/skills.sass"
  lang="sass"
></style>