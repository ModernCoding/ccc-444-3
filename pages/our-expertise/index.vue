<script setup>

  import Ada from './.partials/ada'
  import Article from './.partials/article'
  import Slogan from './.partials/slogan'
  import Title from './.partials/title'

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
      
      <article id="our-expertise">
        <Article v-if="screenProperties.ratioIndex > 1" />
        <Ada v-if="screenProperties.ratioIndex < 2" />
      </article>

    </template>


    <template
      v-if="screenProperties.ratioIndex > 1"
      v-slot:footer-left
    >
      <Title />
    </template>


    <template v-slot:footer-right>
      <Title v-if="screenProperties.ratioIndex < 2" />
      <Slogan />
    </template>

  </BaseLayout>

</template>


<style
  scoped
  src="@/assets/sass/pages/our-expertise/index.sass"
  lang="sass"
></style>