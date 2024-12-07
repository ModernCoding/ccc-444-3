<script setup>
  
  import Beethoven from './.partials/beethoven'
  import Menu from './.partials/menu'
  import Quote from './.partials/quote'
  import Mvp from './.partials/mvp'


  const screenPropertiesStore
    = defineScreenPropertiesStoreFromComposable () ()

  const { screenProperties } = storeToRefs (screenPropertiesStore)

  const { locale } = useI18n ()


  watch (locale, () => {

    const content = document.querySelector ('.o-philosophy-text')
    content && content.scrollTo ({ top: 0, behavior: 'smooth' })

  })

</script>


<template>

  <ModalLayout
    v-if="screenProperties.ratioIndex < 2"
    isShorter="1"
  >

    <section class="o-philosophy-in-modal o-philosophy-text">

      <Beethoven />
      <Menu />
      <Mvp />

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
      <Beethoven />
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
        class="o-philosophy-in-main o-philosophy-text"
        :data-number-of-parts="screenProperties.ratioIndex"
      >

        <Menu v-if="screenProperties.ratioIndex < 3" />
        <Mvp />

        <nav>
          <CallToActions />
        </nav>
      
      </article>


    </template>


    <template v-slot:footer-right>
      <Quote />
    </template>

  </BaseLayout>

</template>


<style
  scoped
  src="@/assets/sass/pages/our-philosophy/index.sass"
  lang="sass"
></style>