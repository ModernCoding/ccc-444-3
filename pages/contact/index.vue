<script setup>

  import Address from './.partials/address'
  import ContactInfo from './.partials/contact-info'
  import GoogleMapsLink from './.partials/google-maps-link'
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
      <Address />
      <GoogleMapsLink />
    </template>


    <template
      v-if="screenProperties.ratioIndex > 2"
      v-slot:central
    >
      <WatArun />
    </template>
    

    <template v-slot:main>

      <template v-if="screenProperties.ratioIndex > 2">
        <Address />
        <ContactInfo />
        <GoogleMapsLink />
      </template>

      <WatArun v-else />

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