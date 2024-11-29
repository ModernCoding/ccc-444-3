<script setup>

  import Introduction from './.partials/introduction'
  import Members from './.partials/members'
  import Title from './.partials/title'

  const screenPropertiesStore
    = defineScreenPropertiesStoreFromComposable () ()
  
  const { screenProperties } = storeToRefs (screenPropertiesStore)

</script>


<template>

  <BaseLayout>

    <template
      v-if="screenProperties.ratioIndex > 2"
      v-slot:central
    >
      <Introduction />
    </template>
    

    <template v-slot:main>

      <article
        id="team"
        :data-number-of-parts="screenProperties.ratioIndex"
      >
        <Members />
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
      <Introduction v-if="screenProperties.ratioIndex === 2" />
    </template>

  </BaseLayout>

</template>


<style
  scoped
  src="@/assets/sass/pages/team/index.sass"
  lang="sass"
></style>