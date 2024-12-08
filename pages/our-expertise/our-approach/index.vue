<script setup>
  
  import FocusOnJavaScript from './.partials/focus-on-javascript'
  import InnovativeLayout from './.partials/innovative-layout'
  import Machine from './.partials/machine'
  import Menu from './.partials/menu'
  import OnTheSameBoat from './.partials/on-the-same-boat'
  import Title from './.partials/title'


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

      <Machine />
      <Menu />
      <OnTheSameBoat />
      <InnovativeLayout />
      <FocusOnJavaScript />

      <nav>
        <CallToActions />
      </nav>
    
    </section>
  
  </ModalLayout>


  <BaseLayout>

    <template
      v-if="screenProperties.ratioIndex > 1"
      v-slot:aside
    >
      <Machine />
    </template>


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

        <Menu v-if="screenProperties.ratioIndex < 3" />
        <OnTheSameBoat />
        <InnovativeLayout />
        <FocusOnJavaScript />

        <nav>
          <CallToActions />
        </nav>
      
      </article>


    </template>


    <template v-slot:footer-right>
      <Title />
    </template>

  </BaseLayout>

</template>


<style
  scoped
  src="@/assets/sass/pages/our-expertise/skills.sass"
  lang="sass"
></style>