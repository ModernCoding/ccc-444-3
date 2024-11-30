<script setup>
  
  const screenPropertiesStore
    = defineScreenPropertiesStoreFromComposable () ()

  const { screenProperties } = storeToRefs (screenPropertiesStore)

</script>


<template>

  <figure
    class="o-profile-picture"
    :data-number-of-parts="screenProperties.ratioIndex"
  >

    <NuxtImg
      src="/images/profiles/michel.png"
      alt="Michel Boretti"
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