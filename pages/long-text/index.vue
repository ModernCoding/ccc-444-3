<script setup>

  import Article from './.partials/article'

  const screenPropertiesStore
    = defineScreenPropertiesStoreFromComposable () ()
  
  const { screenProperties } = storeToRefs (screenPropertiesStore)

</script>


<template>

  <BaseLayout>

    <template
      v-if="screenProperties.ratioIndex > 1"
      v-slot:main
    >
      <Article />
    </template>

  </BaseLayout>

</template>


<style
  scoped
  src="@/assets/sass/pages/long-text/index.sass"
  lang="sass"
></style>