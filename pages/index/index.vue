<script setup>

  import Machine from './.partials/machine'
  import Slogan from './.partials/slogan'

  const loadingStore = defineLoadingStoreFromComposable () ()

  const screenPropertiesStore
    = defineScreenPropertiesStoreFromComposable () ()
  
  const { screenProperties } = storeToRefs (screenPropertiesStore)

  onUpdated (() => loadingStore.patchIsResizingMode ())

</script>


<template>

  <BaseLayout>

    <article id="index">

      <CallToActions v-if="screenProperties.ratioIndex < 3" />
      <Machine v-if="screenProperties.ratioIndex < 2" />
      
      <Slogan
        v-if="
            screenProperties.ratioIndex === 2
              && !screenProperties.isSentenceInFooter
          "
      />


      <div
        v-if="screenProperties.ratioIndex > 2"
        :class="screenProperties.isSentenceInFooter ? 'o-no-slogan' : ''"
        id="index-machine"
      >
        <Slogan v-if="!screenProperties.isSentenceInFooter" />
        <Machine />
      </div>

    </article>


    <ClientOnly>

      <Teleport
        v-if="screenProperties.ratioIndex === 2"
        defer
        to="#aside-content"
      >
        <Machine />
      </Teleport>


      <Teleport
        v-if="screenProperties.ratioIndex > 2"
        defer
        to="#central-content"
      >
        <CallToActions />
      </Teleport>


      <Teleport
        v-if="screenProperties.isSentenceInFooter"
        defer
        to="#footer-content"
      >
        <Slogan />
      </Teleport>

    </ClientOnly>

  </BaseLayout>

</template>


<style
  scoped
  src="@/assets/sass/pages/index.sass"
  lang="sass"
></style>