<script setup>

  import Ada from './.partials/ada'
  import Article from './.partials/article'

  const screenPropertiesStore
    = defineScreenPropertiesStoreFromComposable () ()
  
  const { screenProperties } = storeToRefs (screenPropertiesStore)

</script>


<template>

  <ModalLayout v-if="screenProperties.ratioIndex < 2">
    <Article />
  </ModalLayout>


  <BaseLayout>


    <template
      v-if="screenProperties.ratioIndex === 2"
      v-slot:aside
    >
      <Ada />
    </template>


    <template
      v-if="screenProperties.ratioIndex > 2"
      v-slot:central
    >
      <Ada />
    </template>


    <template v-slot:main>
      
      <article id="long-text">
        <Article v-if="screenProperties.ratioIndex > 1" />
        <Ada v-if="screenProperties.ratioIndex < 2" />
      </article>

    </template>

  </BaseLayout>

</template>


<style
  scoped
  src="@/assets/sass/pages/long-text/index.sass"
  lang="sass"
></style>