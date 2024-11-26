<script setup>
  
  import JustFacts from './.partials/just-facts'
  import Ladies from './.partials/ladies'
  import Menu from './.partials/menu'


  const ladiesStore = defineLadiesStoreFromComposable () ()

  const screenPropertiesStore
    = defineScreenPropertiesStoreFromComposable () ()

  const { screenProperties } = storeToRefs (screenPropertiesStore)


  onUnmounted (ladiesStore.resetIndex)

</script>


<template>

  <BaseLayout>

    <template
      v-if="screenProperties.ratioIndex > 1"
      v-slot:aside
    >
      <JustFacts />
    </template>


    <template
      v-if="screenProperties.ratioIndex > 2"
      v-slot:central
    >
      <Menu />
    </template>


    <template v-slot:main>

      <article id="ladies-in-it">
        <Ladies />
      </article>

    </template>


    <template
      v-if="
        screenProperties.ratioIndex < 2
          || screenProperties.isSentenceInFooter
        "

      v-slot:footer-right
    >
      <JustFacts />
    </template>

  </BaseLayout>

</template>


<style
  scoped
  src="@/assets/sass/pages/ladies-in-it/index.sass"
  lang="sass"
></style>