<script setup>
  
  import AngkorWat from './.partials/angkor-wat'
  import Benefits from './.partials/benefits'
  import Cambodia from './.partials/cambodia'
  import ClassicalMusic from './.partials/classical-music'
  import Menu from './.partials/menu'
  import WhyGuests from './.partials/why-guests'


  const screenPropertiesStore
    = defineScreenPropertiesStoreFromComposable () ()

  const { screenProperties } = storeToRefs (screenPropertiesStore)

</script>


<template>

  <ModalLayout
    v-if="screenProperties.ratioIndex < 2"
    isShorter="1"
  >

    <section
      id="guest-tech-team-lead-in-modal"
      class="o-guest-tech-team-lead"
    >
    
      <AngkorWat />
      <Menu />
      <ClassicalMusic />
      <Cambodia />
      <Benefits />

      <nav>
        <CallToActions />
      </nav>
    
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
        id="guest-tech-team-lead"
        class="o-guest-tech-team-lead"
        :data-number-of-parts="screenProperties.ratioIndex"
      >

        <AngkorWat />
        <Menu v-if="screenProperties.ratioIndex < 3" />
        <ClassicalMusic />
        <Cambodia />
        <Benefits />

        <nav>
          <CallToActions />
        </nav>
      
      </article>


    </template>


    <template v-slot:footer-right>
      <WhyGuests />
    </template>

  </BaseLayout>

</template>


<style
  scoped
  src="@/assets/sass/pages/our-expertise/guest-tech-team-lead.sass"
  lang="sass"
></style>