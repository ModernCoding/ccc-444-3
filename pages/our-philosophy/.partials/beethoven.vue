
<script setup>
  
  const screenPropertiesStore
    = defineScreenPropertiesStoreFromComposable () ()

  const { screenProperties } = storeToRefs (screenPropertiesStore)

</script>


<template>

  <NuxtLink :to="{ name: 'index' }">

    <figure
      class="o-philosophy-picture"
      :data-number-of-parts="screenProperties.ratioIndex"
    >

      <NuxtImg
        src="/images/beethoven.png"
        alt="Ludwig van Beethoven"
        :modifiers="{ b: '#110d0d', opacity: 1 }"
        loading="lazy"
      />

    </figure>

  </NuxtLink>

</template>


<style
  scoped
  src="@/assets/sass/pages/our-philosophy/index.sass"
  lang="sass"
></style>