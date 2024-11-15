<script setup>

  import ContactInfo from './.partials/contact-info'
  import Location from './.partials/location'
  import WatArun from './.partials/wat-arun'

  const loadingStore = defineLoadingStoreFromComposable () ()

  const screenPropertiesStore
    = defineScreenPropertiesStoreFromComposable () ()
    
  const { screenProperties } = storeToRefs (screenPropertiesStore)

  onUpdated (() => loadingStore.patchIsResizingMode ())

</script>


<template>

  <article
    id="contact"
    :data-number-of-parts="screenProperties.ratioIndex"
    :class="screenProperties.isSentenceInFooter ? 'o-no-location' : ''"
  >

    <WatArun />
    <Location v-if="!screenProperties.isSentenceInFooter" />

  </article>


  <ClientOnly>

    <Teleport
      v-if="screenProperties.ratioIndex === 2"
      defer
      to="#aside-content"
    >
      <ContactInfo />
    </Teleport>


    <Teleport
      v-if="screenProperties.ratioIndex > 2"
      defer
      to="#central-content"
    >
      <ContactInfo />
    </Teleport>


    <Teleport
      v-if="screenProperties.isSentenceInFooter"
      defer
      to="#footer-content"
    >
      <Location />
    </Teleport>

  </ClientOnly>

</template>


<style
  scoped
  src="@/assets/sass/pages/contact/index.sass"
  lang="sass"
></style>