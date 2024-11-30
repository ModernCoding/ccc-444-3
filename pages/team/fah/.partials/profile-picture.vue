<script setup>
  
  const screenPropertiesStore
    = defineScreenPropertiesStoreFromComposable () ()

  const { screenProperties } = storeToRefs (screenPropertiesStore)
  
  const { locale } = useI18n ()

</script>


<template>

  <figure
    class="o-profile-picture"
    :data-number-of-parts="screenProperties.ratioIndex"
  >

    <NuxtImg
      src="/images/profiles/fah.png"
      :alt="NAMES.fah [ locale ] ?? NAMES.fah.en"
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