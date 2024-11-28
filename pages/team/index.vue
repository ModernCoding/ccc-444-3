<script setup>

  import Introduction from './.partials/introduction'

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
    </template>


    <template
      v-if="screenProperties.ratioIndex > 2"
      v-slot:central
    >
    </template>
    

    <template v-slot:main>

      <article id="team">

        <Introduction
          v-if="
              screenProperties.ratioIndex === 2
                && !screenProperties.isSentenceInFooter
            "
        />


        <div
          v-if="screenProperties.ratioIndex > 2"

          :class="
              screenProperties.isSentenceInFooter
                ? 'o-no-Introduction'
                : ''
            "

          id="index-machine"
        >
          <Introduction v-if="!screenProperties.isSentenceInFooter" />
        </div>

      </article>

    </template>


    <template v-slot:footer-right>
      <Introduction />
    </template>

  </BaseLayout>

</template>


<style
  scoped
  src="@/assets/sass/pages/team/index.sass"
  lang="sass"
></style>