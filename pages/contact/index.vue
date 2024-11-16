<script setup>

  import ContactInfo from './.partials/contact-info'
  import Location from './.partials/location'
  import WatArun from './.partials/wat-arun'

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
      <ContactInfo />
    </template>


    <template
      v-if="screenProperties.ratioIndex > 2"
      v-slot:central
    >
      <ContactInfo />
    </template>
    

    <template v-slot:main>

      <article
        id="contact"
        :data-number-of-parts="screenProperties.ratioIndex"

        :class="
            screenProperties.isSentenceInFooter
              ? 'o-no-location'
              : ''
          "
      >

        <WatArun />
        <Location v-if="!screenProperties.isSentenceInFooter" />

      </article>

    </template>


    <template
      v-if="screenProperties.isSentenceInFooter"
      v-slot:footer
    >
      <Location />
    </template>

  </BaseLayout>

</template>


<style
  scoped
  src="@/assets/sass/pages/contact/index.sass"
  lang="sass"
></style>