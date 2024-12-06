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

  const { locale } = useI18n ()


  watch (locale, () => {

    const content = document.querySelector ('.o-expertise-skill-text')
    content && content.scrollTo ({ top: 0, behavior: 'smooth' })

  })

</script>


<template>

  <ModalLayout
    v-if="screenProperties.ratioIndex < 2"
    isShorter="1"
  >

    <section
      class="o-expertise-skill-in-modal o-expertise-skill-text"
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
        class="o-expertise-skill-in-main o-expertise-skill-text"
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
  src="@/assets/sass/pages/our-expertise/skills.sass"
  lang="sass"
></style>