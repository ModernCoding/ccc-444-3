<script setup>
  
  import AngkorWat from './.partials/angkor-wat'
  import JustFacts from './.partials/just-facts'
  import Lady from './.partials/lady'
  import Menu from './.partials/menu'


  const ladiesStore = defineLadiesStoreFromComposable () ()

  const screenPropertiesStore
    = defineScreenPropertiesStoreFromComposable () ()

  const { screenProperties } = storeToRefs (screenPropertiesStore)


  watch (ladiesStore, () => {

    const content = document.querySelector (
        [ '#ladies-in-it', '#modal-layout > *' ] [
          +(screenProperties.ratioIndex < 2)
        ]
      )
    

    content && content.scrollTo ({ top: 0, behavior: 'smooth' })

  })


  onUnmounted (ladiesStore.resetIndex)

</script>


<template>

  <ModalLayout
    v-if="screenProperties.ratioIndex < 2"
    isShorter="1"
  >

    <section>
      <AngkorWat />
      <Menu />
      <Lady />
    </section>
  
  </ModalLayout>


  <BaseLayout>

    <template
      v-if="screenProperties.ratioIndex > 2"
      v-slot:central
    >
      <Menu />
    </template>


    <template
      v-if="screenProperties.ratioIndex > 1"
      v-slot:main
    >

      <article
        id="ladies-in-it"
        :data-number-of-parts="screenProperties.ratioIndex"
      >

        <AngkorWat />
        <Menu v-if="screenProperties.ratioIndex < 3" />
        <Lady />
      
      </article>

    </template>


    <template v-slot:footer-right>
      <JustFacts />
    </template>

  </BaseLayout>

</template>


<style
  scoped
  src="@/assets/sass/pages/ladies-in-it/index.sass"
  lang="sass"
></style>