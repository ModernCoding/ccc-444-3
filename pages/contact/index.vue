<script setup>

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
      <ContactInfo />
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
        <ContactInfo />
        <GoogleMapsLink />
      </template>

      <WatArun v-else />

    </template>

  </BaseLayout>

</template>


<style
  scoped
  src="@/assets/sass/pages/contact/index.sass"
  lang="sass"
></style>