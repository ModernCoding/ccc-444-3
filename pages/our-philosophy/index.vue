<script setup>
  
  import Consulting from './.partials/consulting'
  import Hotwire from './.partials/hotwire'
  import Laravel from './.partials/laravel'
  import Menu from './.partials/menu'
  import Mvp from './.partials/mvp'


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

      <Laravel />
      <Menu />
      <Mvp />
      <Hotwire />

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
      <Laravel />
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
        <Mvp />
        <Hotwire />

        <nav>
          <CallToActions />
        </nav>
      
      </article>


    </template>


    <template v-slot:footer-right>
      <Consulting />
    </template>

  </BaseLayout>

</template>


<style
  scoped
  src="@/assets/sass/pages/our-expertise/skills.sass"
  lang="sass"
></style>