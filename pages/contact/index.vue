<script setup>

  import Address from './.partials/address'
  import ContactInfo from './.partials/contact-info'
  import GoogleMapsLink from './.partials/google-maps-link'
  import TaxId from './.partials/tax-id'
  import WatArun from './.partials/wat-arun'

  const screenPropertiesStore
    = defineScreenPropertiesStoreFromComposable () ()

  const { screenProperties } = storeToRefs (screenPropertiesStore)

</script>


<template>

  <BaseLayout>

    <template
      v-if="screenProperties.ratioIndex > 1"
      v-slot:aside
    >
      <TaxId />
      <Address v-if="screenProperties.ratioIndex < 3" />
    </template>


    <template
      v-if="screenProperties.ratioIndex > 2"
      v-slot:central
    >
      <WatArun />
    </template>
    

    <template v-slot:main>
      
      <article
        id="contact" 
        :data-number-of-parts="screenProperties.ratioIndex"
      >

        <template v-if="screenProperties.ratioIndex > 2">
          <ContactInfo />
          <Address />
        </template>

        <WatArun v-if="screenProperties.ratioIndex > 1" />

        <template v-else>
          <TaxId />
          <ContactInfo />
          <Address />
          <WatArun />
        </template>
    
      </article>

    </template>


    <template
      v-if="screenProperties.ratioIndex === 2"
      v-slot:footer-left
    >
      <GoogleMapsLink />
    </template>


    <template v-else v-slot:footer-right>
      <GoogleMapsLink />
    </template>


    <template
      v-if="screenProperties.ratioIndex === 2"
      v-slot:footer-right
    >
      <ContactInfo />
    </template>

  </BaseLayout>

</template>


<style
  scoped
  src="@/assets/sass/pages/contact/index.sass"
  lang="sass"
></style>