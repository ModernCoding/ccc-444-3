<script setup>
  const ladiesStore = defineLadiesStoreFromComposable () ()
  const { ladies } = storeToRefs (ladiesStore)
</script>


<template>

  <figure class="o-expertise-angkor-wat">

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
  src="@/assets/sass/pages/ladies-in-it/index.sass"
  lang="sass"
></style>