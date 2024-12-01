<script setup>

  import Ada from './.partials/ada'

  import ExpertiseConsulting from './.partials/expertise-consulting'
  import ExpertiseCraft from './.partials/expertise-craft'
  import ExpertiseGuestLead from './.partials/expertise-guest-lead'
  
  import Slogan from './.partials/slogan'
  import Title from './.partials/title'


  const screenPropertiesStore
    = defineScreenPropertiesStoreFromComposable () ()
  
  const { screenProperties } = storeToRefs (screenPropertiesStore)

</script>


<template>

  <ModalLayout
    v-if="screenProperties.ratioIndex < 2"
    isShorter="1"
  >

    <section class="o-expertise-in-modal">

      <NuxtLink :to="{ name: 'index' }">
        <Ada />
      </NuxtLink>

      <ExpertiseCraft />
      <ExpertiseConsulting />
      <ExpertiseGuestLead />

      <Slogan />

    </section>

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


    <template
      v-if="screenProperties.ratioIndex > 1"
      v-slot:main
    >
      
      <article id="our-expertise">

        <template v-if="screenProperties.ratioIndex > 1">
          <ExpertiseCraft />
          <ExpertiseConsulting />
          <ExpertiseGuestLead />
        </template>

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
      <Slogan v-if="screenProperties.ratioIndex > 1" />
    </template>

  </BaseLayout>

</template>


<style
  scoped
  src="@/assets/sass/pages/our-expertise/index.sass"
  lang="sass"
></style>