<script setup>

  import Members from './.partials/members'
  import Title from './.partials/title'

  const screenPropertiesStore
    = defineScreenPropertiesStoreFromComposable () ()
  
  const { screenProperties } = storeToRefs (screenPropertiesStore)

</script>


<template>

  <BaseLayout>

    <template
      v-if="screenProperties.ratioIndex === 2"
      v-slot:aside
    >
    </template>


    <template
      v-if="screenProperties.ratioIndex > 2"
      v-slot:central
    >
    </template>
    

    <template v-slot:main>

      <article id="team">
        
        <Members />

      </article>

    </template>


    <template v-slot:footer-right>
      <Title />
    </template>

  </BaseLayout>

</template>


<style
  scoped
  src="@/assets/sass/pages/team/index.sass"
  lang="sass"
></style>