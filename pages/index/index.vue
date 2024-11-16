<script setup>

  import Machine from './.partials/machine'
  import Slogan from './.partials/slogan'

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
      <Machine />
    </template>


    <template
      v-if="screenProperties.ratioIndex > 2"
      v-slot:central
    >
      <CallToActions />
    </template>
    

    <template v-slot:main>

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

          :class="
              screenProperties.isSentenceInFooter
                ? 'o-no-slogan'
                : ''
            "

          id="index-machine"
        >
          <Slogan v-if="!screenProperties.isSentenceInFooter" />
          <Machine />
        </div>

      </article>

    </template>


    <template
      v-if="screenProperties.isSentenceInFooter"
      v-slot:footer
    >
      <Slogan />
    </template>

  </BaseLayout>

</template>


<style
  scoped
  src="@/assets/sass/pages/index.sass"
  lang="sass"
></style>